"use client";

import { Mesh, Program, Renderer, Triangle } from "ogl";
import {
  useEffect,
  useRef,
  type CSSProperties,
  type HTMLAttributes,
  type ReactNode,
} from "react";

import "./glow-cursor.css";

/** Keep in sync with `#define MAX_POINTS` in the fragment shader. */
const MAX_POINTS = 20;

const VERTEX_SHADER = /* glsl */ `
attribute vec2 position;
attribute vec2 uv;
varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = vec4(position, 0.0, 1.0);
}
`;

const FRAGMENT_SHADER = /* glsl */ `
precision mediump float;

#define MAX_POINTS 20

uniform vec2 uResolution;
uniform vec2 uPoints[MAX_POINTS];
uniform float uPointCount;
uniform vec3 uColor;
uniform vec3 uSecondaryColor;
uniform float uTrailWidth;
uniform float uTaper;
uniform float uGlowIntensity;
uniform float uGlowSpread;
uniform float uHotspot;
uniform float uBrightness;
uniform float uOpacity;
uniform float uPulseSpeed;
uniform float uNormalBlend;
uniform float uTime;
uniform float uFade;

varying vec2 vUv;

void main() {
  if (uFade < 0.001) discard;

  vec2 pixel = vUv * uResolution;
  float denominator = max(uPointCount - 1.0, 1.0);
  float strongest = 0.0;
  float strongestCore = 0.0;
  float colorWeight = 0.0;
  vec3 colorSum = vec3(0.0);

  for (int i = 0; i < MAX_POINTS - 1; i++) {
    float index = float(i);
    float active = 1.0 - step(uPointCount - 1.0, index);

    vec2 start = uPoints[i];
    vec2 end = uPoints[i + 1];
    vec2 segment = end - start;
    vec2 toPixel = pixel - start;
    float segLen2 = max(dot(segment, segment), 0.0001);
    float along = clamp(dot(toPixel, segment) / segLen2, 0.0, 1.0);
    float progress = clamp((index + along) / denominator, 0.0, 1.0);
    float life = pow(max(1.0 - progress, 0.0), mix(0.55, 1.25, uTaper));
    float width = uTrailWidth * mix(1.0, 0.28, pow(progress, mix(0.55, 1.5, uTaper)));
    float distanceToTrail = length(toPixel - segment * along);
    float falloff = max(width * (0.8 + uGlowSpread * 1.3), 0.5);
    float beam = (falloff * falloff) / (distanceToTrail * distanceToTrail + falloff * falloff);
    float core = exp(-pow(distanceToTrail / max(width, 0.5), 2.0) * 2.4);
    float pulse = 1.0 + sin(uTime * uPulseSpeed * 3.0 - progress * 10.0) * 0.12 * min(abs(uPulseSpeed), 1.0);
    float intensity = (core + min(beam, 1.0) * uGlowIntensity * 0.5) * life * pulse * active;

    strongest = max(strongest, intensity);
    strongestCore = max(strongestCore, core * life * active);
    colorSum += mix(uColor, uSecondaryColor, progress) * intensity;
    colorWeight += intensity;
  }

  float alpha = clamp(strongest * uOpacity * uFade, 0.0, 1.0);
  if (alpha < 0.001) discard;

  vec3 color = colorSum / max(colorWeight, 0.0001);
  color = mix(color, vec3(1.0), smoothstep(0.25, 0.95, strongestCore) * uHotspot);
  float luminance = clamp(strongest * uBrightness, 0.0, 1.0);
  vec3 additiveColor = color * luminance;
  float normalAlpha = clamp(strongest * uBrightness * uOpacity * uFade, 0.0, 1.0);
  vec3 normalColor = mix(color, vec3(1.0), smoothstep(0.45, 1.0, strongestCore) * uHotspot * 0.3);
  gl_FragColor = vec4(
    mix(additiveColor, normalColor, uNormalBlend),
    mix(alpha, normalAlpha, uNormalBlend)
  );
}
`;

type BlendMode = "normal" | "screen" | "plus-lighter";

export type GlowCursorProps = {
  color?: string;
  secondaryColor?: string;
  trailLength?: number;
  trailWidth?: number;
  trailTaper?: number;
  followSpeed?: number;
  glowIntensity?: number;
  glowSpread?: number;
  hotspot?: number;
  brightness?: number;
  opacity?: number;
  pulseSpeed?: number;
  noiseStrength?: number;
  idleFade?: boolean;
  idleTimeout?: number;
  fadeDuration?: number;
  blendMode?: BlendMode;
  maxDevicePixelRatio?: number;
  enabled?: boolean;
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
} & Omit<
  HTMLAttributes<HTMLDivElement>,
  "children" | "className" | "style" | "color"
>;

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max);

const hexToRgb = (hex: string): [number, number, number] => {
  let value = (hex || "").replace("#", "").trim();
  if (value.length === 3) {
    value = value
      .split("")
      .map((char) => char + char)
      .join("");
  }
  const parsed = Number.parseInt(value || "00ed64", 16);
  if (Number.isNaN(parsed)) return [0.49, 1, 0.7];
  return [
    ((parsed >> 16) & 255) / 255,
    ((parsed >> 8) & 255) / 255,
    (parsed & 255) / 255,
  ];
};

export default function GlowCursor({
  color = "#7CFFB2",
  secondaryColor = "#00ed64",
  trailLength = 16,
  trailWidth = 9,
  trailTaper = 0.7,
  followSpeed = 0.12,
  glowIntensity = 1.8,
  glowSpread = 1.25,
  hotspot = 0.3,
  brightness = 1.25,
  opacity = 0.5,
  pulseSpeed = 0.4,
  idleFade = true,
  idleTimeout = 400,
  fadeDuration = 500,
  blendMode = "normal",
  maxDevicePixelRatio = 1,
  enabled = true,
  children,
  className = "",
  style,
  ...rest
}: GlowCursorProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const propsRef = useRef({
    color,
    secondaryColor,
    trailLength,
    trailWidth,
    trailTaper,
    followSpeed,
    glowIntensity,
    glowSpread,
    hotspot,
    brightness,
    opacity,
    pulseSpeed,
    idleFade,
    idleTimeout,
    fadeDuration,
    blendMode,
    enabled,
  });

  propsRef.current = {
    color,
    secondaryColor,
    trailLength,
    trailWidth,
    trailTaper,
    followSpeed,
    glowIntensity,
    glowSpread,
    hotspot,
    brightness,
    opacity,
    pulseSpeed,
    idleFade,
    idleTimeout,
    fadeDuration,
    blendMode,
    enabled,
  };

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const coarsePointer = window.matchMedia("(pointer: coarse)");
    if (reducedMotion.matches || coarsePointer.matches) {
      canvas.hidden = true;
      return;
    }

    const config = propsRef.current;
    const dpr = Math.min(window.devicePixelRatio || 1, maxDevicePixelRatio);
    const renderer = new Renderer({
      canvas,
      alpha: true,
      dpr,
      antialias: false,
      depth: false,
      stencil: false,
      powerPreference: "low-power",
    } as ConstructorParameters<typeof Renderer>[0]);
    const gl = renderer.gl;
    gl.clearColor(0, 0, 0, 0);

    const pointData = Array(MAX_POINTS * 2).fill(0) as number[];
    const points = Array.from({ length: MAX_POINTS }, () => ({ x: 0, y: 0 }));
    const target = { x: 0, y: 0 };
    const head = { x: 0, y: 0 };

    const program = new Program(gl, {
      vertex: VERTEX_SHADER,
      fragment: FRAGMENT_SHADER,
      uniforms: {
        uResolution: { value: [1, 1] },
        uPoints: { value: pointData },
        uPointCount: { value: config.trailLength },
        uColor: { value: hexToRgb(config.color) },
        uSecondaryColor: { value: hexToRgb(config.secondaryColor) },
        uTrailWidth: { value: config.trailWidth },
        uTaper: { value: config.trailTaper },
        uGlowIntensity: { value: config.glowIntensity },
        uGlowSpread: { value: config.glowSpread },
        uHotspot: { value: config.hotspot },
        uBrightness: { value: config.brightness },
        uOpacity: { value: config.opacity },
        uPulseSpeed: { value: config.pulseSpeed },
        uNormalBlend: { value: config.blendMode === "normal" ? 1 : 0 },
        uTime: { value: 0 },
        uFade: { value: 0 },
      },
      transparent: true,
      depthTest: false,
      depthWrite: false,
    });
    const mesh = new Mesh(gl, { geometry: new Triangle(gl), program });

    let width = 1;
    let height = 1;
    let initialized = false;
    let pointerInside = false;
    let fade = 0;
    let lastInputTime = 0;
    let lastFrameTime = 0;
    let raf = 0;
    let destroyed = false;
    let running = false;
    let canvasVisible = true;
    let lastColor = config.color;
    let lastSecondary = config.secondaryColor;

    const setCanvasVisible = (visible: boolean) => {
      if (canvasVisible === visible) return;
      canvasVisible = visible;
      canvas.style.visibility = visible ? "visible" : "hidden";
    };

    const resize = () => {
      width = Math.max(window.innerWidth | 0, 1);
      height = Math.max(window.innerHeight | 0, 1);
      renderer.setSize(width, height);
      program.uniforms.uResolution.value = [width, height];
    };

    const initializeTrail = (x: number, y: number) => {
      target.x = x;
      target.y = y;
      head.x = x;
      head.y = y;
      for (let i = 0; i < MAX_POINTS; i++) {
        points[i].x = x;
        points[i].y = y;
        pointData[i * 2] = x;
        pointData[i * 2 + 1] = y;
      }
      initialized = true;
      fade = 1;
      setCanvasVisible(true);
    };

    const startLoop = () => {
      if (running || destroyed) return;
      running = true;
      lastFrameTime = performance.now();
      raf = requestAnimationFrame(tick);
    };

    const syncStaticUniforms = (cfg: typeof propsRef.current) => {
      if (cfg.color !== lastColor) {
        lastColor = cfg.color;
        program.uniforms.uColor.value = hexToRgb(cfg.color);
      }
      if (cfg.secondaryColor !== lastSecondary) {
        lastSecondary = cfg.secondaryColor;
        program.uniforms.uSecondaryColor.value = hexToRgb(cfg.secondaryColor);
      }
      program.uniforms.uTrailWidth.value = Math.max(cfg.trailWidth, 0.1);
      program.uniforms.uTaper.value = clamp(cfg.trailTaper, 0, 1);
      program.uniforms.uGlowIntensity.value = Math.max(cfg.glowIntensity, 0);
      program.uniforms.uGlowSpread.value = Math.max(cfg.glowSpread, 0);
      program.uniforms.uHotspot.value = clamp(cfg.hotspot, 0, 1);
      program.uniforms.uBrightness.value = Math.max(cfg.brightness, 0);
      program.uniforms.uOpacity.value = clamp(cfg.opacity, 0, 1);
      program.uniforms.uPulseSpeed.value = cfg.pulseSpeed;
      program.uniforms.uNormalBlend.value = cfg.blendMode === "normal" ? 1 : 0;
    };

    // Push static look once; hot path only touches points / fade / time.
    syncStaticUniforms(config);

    const updatePointer = (event: PointerEvent) => {
      if (event.pointerType === "touch") return;

      const x = clamp(event.clientX, 0, width);
      const y = clamp(height - event.clientY, 0, height);
      if (!initialized) initializeTrail(x, y);
      target.x = x;
      target.y = y;
      pointerInside = true;
      lastInputTime = performance.now();
      startLoop();
    };

    const onPointerLeave = () => {
      pointerInside = false;
      lastInputTime = performance.now();
      startLoop();
    };

    const tick = (now: number) => {
      if (destroyed) {
        running = false;
        return;
      }

      const cfg = propsRef.current;
      const delta = Math.min((now - lastFrameTime) / 16.667, 2.5);
      lastFrameTime = now;

      const activeCount = clamp(Math.round(cfg.trailLength), 2, MAX_POINTS);

      if (initialized) {
        const headEase =
          1 - Math.pow(1 - clamp(cfg.followSpeed, 0.01, 0.99), delta);
        const chainEase =
          1 -
          Math.pow(
            1 - clamp(0.2 + cfg.followSpeed * 0.45, 0.08, 0.8),
            delta,
          );
        head.x += (target.x - head.x) * headEase;
        head.y += (target.y - head.y) * headEase;
        points[0].x = head.x;
        points[0].y = head.y;
        pointData[0] = head.x;
        pointData[1] = head.y;

        for (let i = 1; i < activeCount; i++) {
          const prev = points[i - 1];
          const point = points[i];
          point.x += (prev.x - point.x) * chainEase;
          point.y += (prev.y - point.y) * chainEase;
          pointData[i * 2] = point.x;
          pointData[i * 2 + 1] = point.y;
        }
      }

      const shouldFade =
        cfg.idleFade &&
        (!pointerInside || now - lastInputTime > cfg.idleTimeout);
      const fadeTarget = initialized && cfg.enabled && !shouldFade ? 1 : 0;
      const fadeStep = (16.667 * delta) / Math.max(cfg.fadeDuration, 16);
      fade += (fadeTarget - fade) * Math.min(1, fadeStep * 7);

      syncStaticUniforms(cfg);
      program.uniforms.uPointCount.value = activeCount;
      program.uniforms.uTime.value = now * 0.001;
      program.uniforms.uFade.value = fade;

      if (fade > 0.002 || fadeTarget > 0) {
        setCanvasVisible(true);
        renderer.render({ scene: mesh });
        raf = requestAnimationFrame(tick);
        return;
      }

      // Fully idle — clear once, hide canvas, stop the loop.
      program.uniforms.uFade.value = 0;
      renderer.render({ scene: mesh });
      setCanvasVisible(false);
      running = false;
    };

    const onVisibility = () => {
      if (document.hidden) {
        cancelAnimationFrame(raf);
        running = false;
        setCanvasVisible(false);
        return;
      }
      if (pointerInside) startLoop();
    };

    resize();
    setCanvasVisible(false);
    window.addEventListener("resize", resize, { passive: true });
    window.addEventListener("pointermove", updatePointer, { passive: true });
    window.addEventListener("pointerleave", onPointerLeave);
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      destroyed = true;
      running = false;
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", updatePointer);
      window.removeEventListener("pointerleave", onPointerLeave);
      document.removeEventListener("visibilitychange", onVisibility);
      mesh.geometry.remove();
      program.remove();
    };
  }, [maxDevicePixelRatio]);

  return (
    <div
      ref={containerRef}
      className={`glow-cursor${className ? ` ${className}` : ""}`}
      style={style}
      {...rest}
    >
      <canvas
        ref={canvasRef}
        className="glow-cursor__canvas"
        style={{ mixBlendMode: blendMode }}
        aria-hidden="true"
      />
      {children ? <div className="glow-cursor__content">{children}</div> : null}
    </div>
  );
}
