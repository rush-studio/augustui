/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
// @ts-nocheck
// This file is autogenerated by scripts/build-registry.ts
// Do not edit this file directly.
import * as React from "react";

export const Index: Record<string, any> = {
  index: {
    name: "index",
    description: "",
    type: "registry:style",
    registryDependencies: ["utils"],
    files: [],
    component: null,
    meta: undefined,
  },
  "typing-animation": {
    name: "typing-animation",
    description:
      "A typing animation component that animates text as it's typed and retyped.",
    type: "registry:ui",
    registryDependencies: undefined,
    files: [
      {
        path: "registry/augustui/typing-animation.tsx",
        type: "registry:ui",
        target: "components/augustui/typing-animation.tsx",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/augustui/typing-animation.tsx");
      const exportName =
        Object.keys(mod).find(
          (key) =>
            typeof mod[key] === "function" || typeof mod[key] === "object",
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    meta: undefined,
  },
  "social-dock": {
    name: "social-dock",
    description:
      "A social dock component that displays a list of social media icons.",
    type: "registry:ui",
    registryDependencies: undefined,
    files: [
      {
        path: "registry/augustui/social-dock.tsx",
        type: "registry:ui",
        target: "components/augustui/social-dock.tsx",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/augustui/social-dock.tsx");
      const exportName =
        Object.keys(mod).find(
          (key) =>
            typeof mod[key] === "function" || typeof mod[key] === "object",
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    meta: undefined,
  },
  "tectonic-waves": {
    name: "tectonic-waves",
    description:
      "A tectonic waves component that animates the waves like tectonic plates.",
    type: "registry:ui",
    registryDependencies: undefined,
    files: [
      {
        path: "registry/augustui/tectonic-waves.tsx",
        type: "registry:ui",
        target: "components/augustui/tectonic-waves.tsx",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/augustui/tectonic-waves.tsx");
      const exportName =
        Object.keys(mod).find(
          (key) =>
            typeof mod[key] === "function" || typeof mod[key] === "object",
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    meta: undefined,
  },
  "luminous-veil": {
    name: "luminous-veil",
    description:
      "A refined background component featuring soft, cascading light beams for an elegant and immersive experience.",
    type: "registry:ui",
    registryDependencies: undefined,
    files: [
      {
        path: "registry/augustui/luminous-veil.tsx",
        type: "registry:ui",
        target: "components/augustui/luminous-veil.tsx",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/augustui/luminous-veil.tsx");
      const exportName =
        Object.keys(mod).find(
          (key) =>
            typeof mod[key] === "function" || typeof mod[key] === "object",
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    meta: undefined,
  },
  "scramble-appear": {
    name: "scramble-appear",
    description:
      "A dynamic text effect that scrambles and blinks each letter into place for the added intrigue and elegance.",
    type: "registry:ui",
    registryDependencies: undefined,
    files: [
      {
        path: "registry/augustui/scramble-appear.tsx",
        type: "registry:ui",
        target: "components/augustui/scramble-appear.tsx",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/augustui/scramble-appear.tsx");
      const exportName =
        Object.keys(mod).find(
          (key) =>
            typeof mod[key] === "function" || typeof mod[key] === "object",
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    meta: undefined,
  },
  "letter-decoder": {
    name: "letter-decoder",
    description: "A letter decoder component that decodes text as it's typed.",
    type: "registry:ui",
    registryDependencies: undefined,
    files: [
      {
        path: "registry/augustui/letter-decoder.tsx",
        type: "registry:ui",
        target: "components/augustui/letter-decoder.tsx",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/augustui/letter-decoder.tsx");
      const exportName =
        Object.keys(mod).find(
          (key) =>
            typeof mod[key] === "function" || typeof mod[key] === "object",
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    meta: undefined,
  },
  "shimmer-text": {
    name: "shimmer-text",
    description: "A shimmer text component that shimmers text.",
    type: "registry:ui",
    registryDependencies: undefined,
    files: [
      {
        path: "registry/augustui/shimmer-text.tsx",
        type: "registry:ui",
        target: "components/augustui/shimmer-text.tsx",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/augustui/shimmer-text.tsx");
      const exportName =
        Object.keys(mod).find(
          (key) =>
            typeof mod[key] === "function" || typeof mod[key] === "object",
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    meta: undefined,
  },
  "nudge-button": {
    name: "nudge-button",
    description: "A nudge button component that nudes text.",
    type: "registry:ui",
    registryDependencies: undefined,
    files: [
      {
        path: "registry/augustui/nudge-button.tsx",
        type: "registry:ui",
        target: "components/augustui/nudge-button.tsx",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/augustui/nudge-button.tsx");
      const exportName =
        Object.keys(mod).find(
          (key) =>
            typeof mod[key] === "function" || typeof mod[key] === "object",
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    meta: undefined,
  },
  "swipe-flicker": {
    name: "swipe-flicker",
    description: "A swipe flicker component that flickers images.",
    type: "registry:ui",
    registryDependencies: undefined,
    files: [
      {
        path: "registry/augustui/swipe-flicker.tsx",
        type: "registry:ui",
        target: "components/augustui/swipe-flicker.tsx",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/augustui/swipe-flicker.tsx");
      const exportName =
        Object.keys(mod).find(
          (key) =>
            typeof mod[key] === "function" || typeof mod[key] === "object",
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    meta: undefined,
  },
  "phantom-hover": {
    name: "phantom-hover",
    description: "A phantom hover component that hovers over the element.",
    type: "registry:ui",
    registryDependencies: undefined,
    files: [
      {
        path: "registry/augustui/phantom-hover.tsx",
        type: "registry:ui",
        target: "components/augustui/phantom-hover.tsx",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/augustui/phantom-hover.tsx");
      const exportName =
        Object.keys(mod).find(
          (key) =>
            typeof mod[key] === "function" || typeof mod[key] === "object",
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    meta: undefined,
  },
  "shape-shifter": {
    name: "shape-shifter",
    description:
      "A shape shifter component that shifts the shape of the element.",
    type: "registry:ui",
    registryDependencies: undefined,
    files: [
      {
        path: "registry/augustui/shape-shifter.tsx",
        type: "registry:ui",
        target: "components/augustui/shape-shifter.tsx",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/augustui/shape-shifter.tsx");
      const exportName =
        Object.keys(mod).find(
          (key) =>
            typeof mod[key] === "function" || typeof mod[key] === "object",
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    meta: undefined,
  },
  "glazing-button": {
    name: "glazing-button",
    description: "A glazing button component that glazes the button.",
    type: "registry:ui",
    registryDependencies: undefined,
    files: [
      {
        path: "registry/augustui/glazing-button.tsx",
        type: "registry:ui",
        target: "components/augustui/glazing-button.tsx",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/augustui/glazing-button.tsx");
      const exportName =
        Object.keys(mod).find(
          (key) =>
            typeof mod[key] === "function" || typeof mod[key] === "object",
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    meta: undefined,
  },
  "whisper-text": {
    name: "whisper-text",
    description: "A whisper text component that whispers text.",
    type: "registry:ui",
    registryDependencies: undefined,
    files: [
      {
        path: "registry/augustui/whisper-text.tsx",
        type: "registry:ui",
        target: "components/augustui/whisper-text.tsx",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/augustui/whisper-text.tsx");
      const exportName =
        Object.keys(mod).find(
          (key) =>
            typeof mod[key] === "function" || typeof mod[key] === "object",
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    meta: undefined,
  },
  "perspective-pile": {
    name: "perspective-pile",
    description: "A perspective pile component that displays a list of images.",
    type: "registry:ui",
    registryDependencies: undefined,
    files: [
      {
        path: "registry/augustui/perspective-pile.tsx",
        type: "registry:ui",
        target: "components/augustui/perspective-pile.tsx",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/augustui/perspective-pile.tsx");
      const exportName =
        Object.keys(mod).find(
          (key) =>
            typeof mod[key] === "function" || typeof mod[key] === "object",
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    meta: undefined,
  },
  "cascade-cards": {
    name: "cascade-cards",
    description: "A cascade cards component that displays a list of cards.",
    type: "registry:ui",
    registryDependencies: undefined,
    files: [
      {
        path: "registry/augustui/cascade-cards.tsx",
        type: "registry:ui",
        target: "components/augustui/cascade-cards.tsx",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/augustui/cascade-cards.tsx");
      const exportName =
        Object.keys(mod).find(
          (key) =>
            typeof mod[key] === "function" || typeof mod[key] === "object",
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    meta: undefined,
  },
  "starwars-prologue": {
    name: "starwars-prologue",
    description: "A star wars prologue component that displays a list of text.",
    type: "registry:ui",
    registryDependencies: undefined,
    files: [
      {
        path: "registry/augustui/starwars-prologue.tsx",
        type: "registry:ui",
        target: "components/augustui/starwars-prologue.tsx",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/augustui/starwars-prologue.tsx");
      const exportName =
        Object.keys(mod).find(
          (key) =>
            typeof mod[key] === "function" || typeof mod[key] === "object",
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    meta: undefined,
  },
  "hover-vibe-card": {
    name: "hover-vibe-card",
    description: "A hover vibe card component that displays a list of text.",
    type: "registry:ui",
    registryDependencies: undefined,
    files: [
      {
        path: "registry/augustui/hover-vibe-card.tsx",
        type: "registry:ui",
        target: "components/augustui/hover-vibe-card.tsx",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/augustui/hover-vibe-card.tsx");
      const exportName =
        Object.keys(mod).find(
          (key) =>
            typeof mod[key] === "function" || typeof mod[key] === "object",
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    meta: undefined,
  },
  "parallax-hover-card": {
    name: "parallax-hover-card",
    description:
      "A parallax hover card component that displays a list of text.",
    type: "registry:ui",
    registryDependencies: undefined,
    files: [
      {
        path: "registry/augustui/parallax-hover-card.tsx",
        type: "registry:ui",
        target: "components/augustui/parallax-hover-card.tsx",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/augustui/parallax-hover-card.tsx");
      const exportName =
        Object.keys(mod).find(
          (key) =>
            typeof mod[key] === "function" || typeof mod[key] === "object",
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    meta: undefined,
  },
  "shadeshift-visibility": {
    name: "shadeshift-visibility",
    description:
      "A shade shift visibility component that displays a list of text.",
    type: "registry:ui",
    registryDependencies: undefined,
    files: [
      {
        path: "registry/augustui/shadeshift-visibility.tsx",
        type: "registry:ui",
        target: "components/augustui/shadeshift-visibility.tsx",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/augustui/shadeshift-visibility.tsx");
      const exportName =
        Object.keys(mod).find(
          (key) =>
            typeof mod[key] === "function" || typeof mod[key] === "object",
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    meta: undefined,
  },
  "velvet-view": {
    name: "velvet-view",
    description: "A velvet view component that displays a list of text.",
    type: "registry:ui",
    registryDependencies: undefined,
    files: [
      {
        path: "registry/augustui/velvet-view.tsx",
        type: "registry:ui",
        target: "components/augustui/velvet-view.tsx",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/augustui/velvet-view.tsx");
      const exportName =
        Object.keys(mod).find(
          (key) =>
            typeof mod[key] === "function" || typeof mod[key] === "object",
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    meta: undefined,
  },
  "slide-deck": {
    name: "slide-deck",
    description: "A slide deck component that displays a list of images.",
    type: "registry:ui",
    registryDependencies: undefined,
    files: [
      {
        path: "registry/augustui/slide-deck.tsx",
        type: "registry:ui",
        target: "components/augustui/slide-deck.tsx",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/augustui/slide-deck.tsx");
      const exportName =
        Object.keys(mod).find(
          (key) =>
            typeof mod[key] === "function" || typeof mod[key] === "object",
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    meta: undefined,
  },
  "typing-animation-demo": {
    name: "typing-animation-demo",
    description:
      "Example showing a typing animation component that animates text as it's typed and retyped.",
    type: "registry:example",
    registryDependencies: ["https://augustui.com/r/typing-animation"],
    files: [
      {
        path: "registry/example/typing-animation-demo.tsx",
        type: "registry:example",
        target: "components/typing-animation-demo.tsx",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/example/typing-animation-demo.tsx");
      const exportName =
        Object.keys(mod).find(
          (key) =>
            typeof mod[key] === "function" || typeof mod[key] === "object",
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    meta: undefined,
  },
  "social-dock-demo": {
    name: "social-dock-demo",
    description:
      "Example showing a social dock component that displays a list of social media icons.",
    type: "registry:example",
    registryDependencies: ["https://augustui.com/r/social-dock"],
    files: [
      {
        path: "registry/example/social-dock-demo.tsx",
        type: "registry:example",
        target: "components/social-dock-demo.tsx",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/example/social-dock-demo.tsx");
      const exportName =
        Object.keys(mod).find(
          (key) =>
            typeof mod[key] === "function" || typeof mod[key] === "object",
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    meta: undefined,
  },
  "tectonic-waves-demo": {
    name: "tectonic-waves-demo",
    description:
      "Example showing a tectonic waves component that animates the waves like tectonic plates.",
    type: "registry:example",
    registryDependencies: ["https://augustui.com/r/tectonic-waves"],
    files: [
      {
        path: "registry/example/tectonic-waves-demo.tsx",
        type: "registry:example",
        target: "components/tectonic-waves-demo.tsx",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/example/tectonic-waves-demo.tsx");
      const exportName =
        Object.keys(mod).find(
          (key) =>
            typeof mod[key] === "function" || typeof mod[key] === "object",
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    meta: undefined,
  },
  "luminous-veil-demo": {
    name: "luminous-veil-demo",
    description:
      "Example showing a refined background component featuring soft, cascading light beams for an elegant and immersive experience.",
    type: "registry:example",
    registryDependencies: ["https://augustui.com/r/luminous-veil"],
    files: [
      {
        path: "registry/example/luminous-veil-demo.tsx",
        type: "registry:example",
        target: "components/luminous-veil-demo.tsx",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/example/luminous-veil-demo.tsx");
      const exportName =
        Object.keys(mod).find(
          (key) =>
            typeof mod[key] === "function" || typeof mod[key] === "object",
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    meta: undefined,
  },
  "scramble-appear-demo": {
    name: "scramble-appear-demo",
    description:
      "Example showing a dynamic text effect that scrambles and blinks each letter into place for the added intrigue and elegance.",
    type: "registry:example",
    registryDependencies: ["https://augustui.com/r/scramble-appear"],
    files: [
      {
        path: "registry/example/scramble-appear-demo.tsx",
        type: "registry:example",
        target: "components/scramble-appear-demo.tsx",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/example/scramble-appear-demo.tsx");
      const exportName =
        Object.keys(mod).find(
          (key) =>
            typeof mod[key] === "function" || typeof mod[key] === "object",
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    meta: undefined,
  },
  "letter-decoder-demo": {
    name: "letter-decoder-demo",
    description:
      "Example showing a letter decoder component that decodes text as it's typed.",
    type: "registry:example",
    registryDependencies: ["https://augustui.com/r/letter-decoder"],
    files: [
      {
        path: "registry/example/letter-decoder-demo.tsx",
        type: "registry:example",
        target: "components/letter-decoder-demo.tsx",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/example/letter-decoder-demo.tsx");
      const exportName =
        Object.keys(mod).find(
          (key) =>
            typeof mod[key] === "function" || typeof mod[key] === "object",
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    meta: undefined,
  },
  "shimmer-text-demo": {
    name: "shimmer-text-demo",
    description: "Example showing a shimmer text component that shimmers text.",
    type: "registry:example",
    registryDependencies: ["https://augustui.com/r/shimmer-text"],
    files: [
      {
        path: "registry/example/shimmer-text-demo.tsx",
        type: "registry:example",
        target: "components/shimmer-text-demo.tsx",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/example/shimmer-text-demo.tsx");
      const exportName =
        Object.keys(mod).find(
          (key) =>
            typeof mod[key] === "function" || typeof mod[key] === "object",
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    meta: undefined,
  },
  "nudge-button-demo": {
    name: "nudge-button-demo",
    description: "Example showing a nudge button component that nudes text.",
    type: "registry:example",
    registryDependencies: ["https://augustui.com/r/nudge-button"],
    files: [
      {
        path: "registry/example/nudge-button-demo.tsx",
        type: "registry:example",
        target: "components/nudge-button-demo.tsx",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/example/nudge-button-demo.tsx");
      const exportName =
        Object.keys(mod).find(
          (key) =>
            typeof mod[key] === "function" || typeof mod[key] === "object",
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    meta: undefined,
  },
  "swipe-flicker-demo": {
    name: "swipe-flicker-demo",
    description:
      "Example showing a swipe flicker component that flickers images.",
    type: "registry:example",
    registryDependencies: ["https://augustui.com/r/swipe-flicker"],
    files: [
      {
        path: "registry/example/swipe-flicker-demo.tsx",
        type: "registry:example",
        target: "components/swipe-flicker-demo.tsx",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/example/swipe-flicker-demo.tsx");
      const exportName =
        Object.keys(mod).find(
          (key) =>
            typeof mod[key] === "function" || typeof mod[key] === "object",
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    meta: undefined,
  },
  "phantom-hover-demo": {
    name: "phantom-hover-demo",
    description:
      "Example showing a phantom hover component that hovers over the element.",
    type: "registry:example",
    registryDependencies: ["https://augustui.com/r/phantom-hover"],
    files: [
      {
        path: "registry/example/phantom-hover-demo.tsx",
        type: "registry:example",
        target: "components/phantom-hover-demo.tsx",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/example/phantom-hover-demo.tsx");
      const exportName =
        Object.keys(mod).find(
          (key) =>
            typeof mod[key] === "function" || typeof mod[key] === "object",
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    meta: undefined,
  },
  "shape-shifter-demo": {
    name: "shape-shifter-demo",
    description:
      "Example showing a shape shifter component that shifts the shape of the element.",
    type: "registry:example",
    registryDependencies: ["https://augustui.com/r/shape-shifter"],
    files: [
      {
        path: "registry/example/shape-shifter-demo.tsx",
        type: "registry:example",
        target: "components/shape-shifter-demo.tsx",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/example/shape-shifter-demo.tsx");
      const exportName =
        Object.keys(mod).find(
          (key) =>
            typeof mod[key] === "function" || typeof mod[key] === "object",
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    meta: undefined,
  },
  "glazing-button-demo": {
    name: "glazing-button-demo",
    description:
      "Example showing a glazing button component that glazes the button.",
    type: "registry:example",
    registryDependencies: ["https://augustui.com/r/glazing-button"],
    files: [
      {
        path: "registry/example/glazing-button-demo.tsx",
        type: "registry:example",
        target: "components/glazing-button-demo.tsx",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/example/glazing-button-demo.tsx");
      const exportName =
        Object.keys(mod).find(
          (key) =>
            typeof mod[key] === "function" || typeof mod[key] === "object",
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    meta: undefined,
  },
  "whisper-text-demo": {
    name: "whisper-text-demo",
    description: "Example showing a whisper text component that whispers text.",
    type: "registry:example",
    registryDependencies: ["https://augustui.com/r/whisper-text"],
    files: [
      {
        path: "registry/example/whisper-text-demo.tsx",
        type: "registry:example",
        target: "components/whisper-text-demo.tsx",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/example/whisper-text-demo.tsx");
      const exportName =
        Object.keys(mod).find(
          (key) =>
            typeof mod[key] === "function" || typeof mod[key] === "object",
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    meta: undefined,
  },
  "perspective-pile-demo": {
    name: "perspective-pile-demo",
    description:
      "Example showing a perspective pile component that displays a list of images.",
    type: "registry:example",
    registryDependencies: ["https://augustui.com/r/perspective-pile"],
    files: [
      {
        path: "registry/example/perspective-pile-demo.tsx",
        type: "registry:example",
        target: "components/perspective-pile-demo.tsx",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/example/perspective-pile-demo.tsx");
      const exportName =
        Object.keys(mod).find(
          (key) =>
            typeof mod[key] === "function" || typeof mod[key] === "object",
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    meta: undefined,
  },
  "cascade-cards-demo": {
    name: "cascade-cards-demo",
    description:
      "Example showing a cascade cards component that displays a list of cards.",
    type: "registry:example",
    registryDependencies: ["https://augustui.com/r/cascade-cards"],
    files: [
      {
        path: "registry/example/cascade-cards-demo.tsx",
        type: "registry:example",
        target: "components/cascade-cards-demo.tsx",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/example/cascade-cards-demo.tsx");
      const exportName =
        Object.keys(mod).find(
          (key) =>
            typeof mod[key] === "function" || typeof mod[key] === "object",
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    meta: undefined,
  },
  "starwars-prologue-demo": {
    name: "starwars-prologue-demo",
    description:
      "Example showing a star wars prologue component that displays a list of text.",
    type: "registry:example",
    registryDependencies: ["https://augustui.com/r/starwars-prologue"],
    files: [
      {
        path: "registry/example/starwars-prologue-demo.tsx",
        type: "registry:example",
        target: "components/starwars-prologue-demo.tsx",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/example/starwars-prologue-demo.tsx");
      const exportName =
        Object.keys(mod).find(
          (key) =>
            typeof mod[key] === "function" || typeof mod[key] === "object",
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    meta: undefined,
  },
  "hover-vibe-card-demo": {
    name: "hover-vibe-card-demo",
    description:
      "Example showing a hover vibe component that displays a list of text.",
    type: "registry:example",
    registryDependencies: ["https://augustui.com/r/hover-vibe"],
    files: [
      {
        path: "registry/example/hover-vibe-card-demo.tsx",
        type: "registry:example",
        target: "components/hover-vibe-card-demo.tsx",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/example/hover-vibe-card-demo.tsx");
      const exportName =
        Object.keys(mod).find(
          (key) =>
            typeof mod[key] === "function" || typeof mod[key] === "object",
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    meta: undefined,
  },
  "parallax-hover-card-demo": {
    name: "parallax-hover-card-demo",
    description:
      "Example showing a parallax hover card component that displays a list of text.",
    type: "registry:example",
    registryDependencies: ["https://augustui.com/r/parallax-hover-card"],
    files: [
      {
        path: "registry/example/parallax-hover-card-demo.tsx",
        type: "registry:example",
        target: "components/parallax-hover-card-demo.tsx",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import(
        "@/registry/example/parallax-hover-card-demo.tsx"
      );
      const exportName =
        Object.keys(mod).find(
          (key) =>
            typeof mod[key] === "function" || typeof mod[key] === "object",
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    meta: undefined,
  },
  "shadeshift-visibility-demo": {
    name: "shadeshift-visibility-demo",
    description:
      "Example showing a shade shift visibility component that displays a list of text.",
    type: "registry:example",
    registryDependencies: ["https://augustui.com/r/shadeshift-visibility"],
    files: [
      {
        path: "registry/example/shadeshift-visibility-demo.tsx",
        type: "registry:example",
        target: "components/shadeshift-visibility-demo.tsx",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import(
        "@/registry/example/shadeshift-visibility-demo.tsx"
      );
      const exportName =
        Object.keys(mod).find(
          (key) =>
            typeof mod[key] === "function" || typeof mod[key] === "object",
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    meta: undefined,
  },
  "velvet-view-demo": {
    name: "velvet-view-demo",
    description:
      "Example showing a velvet view component that displays a list of text.",
    type: "registry:example",
    registryDependencies: ["https://augustui.com/r/velvet-view"],
    files: [
      {
        path: "registry/example/velvet-view-demo.tsx",
        type: "registry:example",
        target: "components/velvet-view-demo.tsx",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/example/velvet-view-demo.tsx");
      const exportName =
        Object.keys(mod).find(
          (key) =>
            typeof mod[key] === "function" || typeof mod[key] === "object",
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    meta: undefined,
  },
  "slide-deck-demo": {
    name: "slide-deck-demo",
    description:
      "Example showing a slide deck component that displays a list of images.",
    type: "registry:example",
    registryDependencies: ["https://augustui.com/r/slide-deck"],
    files: [
      {
        path: "registry/example/slide-deck-demo.tsx",
        type: "registry:example",
        target: "components/slide-deck-demo.tsx",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/example/slide-deck-demo.tsx");
      const exportName =
        Object.keys(mod).find(
          (key) =>
            typeof mod[key] === "function" || typeof mod[key] === "object",
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    meta: undefined,
  },
  utils: {
    name: "utils",
    description: "",
    type: "registry:lib",
    registryDependencies: undefined,
    files: [
      {
        path: "registry/lib/utils.ts",
        type: "registry:lib",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/lib/utils.ts");
      const exportName =
        Object.keys(mod).find(
          (key) =>
            typeof mod[key] === "function" || typeof mod[key] === "object",
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    meta: undefined,
  },
};
