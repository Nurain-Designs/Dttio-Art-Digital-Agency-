// All images exactly matching the Dttio design reference
export const heroSphere = `${(import.meta.env.VITE_PAGES_BASE ?? "/")}images/sphere-desert.jpeg`;        // sandy sphere in desert - top left hero
export const heroWheel = `${(import.meta.env.VITE_PAGES_BASE ?? "/")}images/wheel-desert.jpeg`;           // metallic wheel in desert - top right hero
export const heroGlass = `${(import.meta.env.VITE_PAGES_BASE ?? "/")}images/glass-water.jpeg`;       // glass sphere on water - bottom left hero
export const heroBalloon = `${(import.meta.env.VITE_PAGES_BASE ?? "/")}images/pink-cloud-ball.jpeg`; // bottom right hero image

export const expertiseImg = `${(import.meta.env.VITE_PAGES_BASE ?? "/")}images/tree-chair.jpeg`;           // tree arch on water - expertise section
export const darkSphere = `${(import.meta.env.VITE_PAGES_BASE ?? "/")}images/glass-sphere-dark.jpg`;     // dark glass sphere - top right scroll area

export const works = [
  `${(import.meta.env.VITE_PAGES_BASE ?? "/")}images/sphere-desert.jpeg`,
  `${(import.meta.env.VITE_PAGES_BASE ?? "/")}images/pink-bubbles.jpg`,
  `${(import.meta.env.VITE_PAGES_BASE ?? "/")}images/mirror-desert.jpg`,
];

export const moods = [
  `${(import.meta.env.VITE_PAGES_BASE ?? "/")}images/blue-sphere.jpeg`,
  `${(import.meta.env.VITE_PAGES_BASE ?? "/")}images/portal-clouds.png`,
  `${(import.meta.env.VITE_PAGES_BASE ?? "/")}images/cloud-pillars.png`,
];

export const expressions = [
  `${(import.meta.env.VITE_PAGES_BASE ?? "/")}images/pink-cloud-ball.jpeg`,
  `${(import.meta.env.VITE_PAGES_BASE ?? "/")}images/wheel-desert.jpeg`,
  `${(import.meta.env.VITE_PAGES_BASE ?? "/")}images/purple-moon.jpg`,
];

export const shopArt = [
  `${(import.meta.env.VITE_PAGES_BASE ?? "/")}images/shop_art_1.png`,
  `${(import.meta.env.VITE_PAGES_BASE ?? "/")}images/shop_art_2.png`,
  `${(import.meta.env.VITE_PAGES_BASE ?? "/")}images/shop_art_3.png`,
  `${(import.meta.env.VITE_PAGES_BASE ?? "/")}images/shop_art_4.png`,
];

export const allArt = [
  heroSphere,
  heroWheel,
  heroGlass,
  heroBalloon,
  expertiseImg,
  darkSphere,
  ...works,
  ...moods,
];
