//! These icons are not available via Simple Icons
import analogIcon from '@/assets/icons/analog.svg';
import awsS3Icon from '@/assets/icons/aws-s3.png';
import awsIcon from '@/assets/icons/aws.webp';
import azureCosmosDBIcon from '@/assets/icons/azure-cosmosdb.svg';
import azureIcon from '@/assets/icons/azure.png';
import bunnyNetIcon from '@/assets/icons/bunny-net.webp';
import dieselIcon from '@/assets/icons/diesel.png';
import fiberIcon from '@/assets/icons/fiber.svg';
import kindeIcon from '@/assets/icons/kinde.svg';
import micronautIcon from '@/assets/icons/micronaut.ico';
import neonIcon from '@/assets/icons/neon.png';
import playwrightIcon from '@/assets/icons/playwright.svg';
import tigrisIcon from '@/assets/icons/tigris.jpg';
import uploadcareIcon from '@/assets/icons/uploadcare.png';
import uploadthingIcon from '@/assets/icons/uploadthing.ico';
import zustandIcon from '@/assets/icons/zustand.png';

import type { BackendEcosystem, FrontendEcosystem, UniversalOptions } from '@/types';

export const TECH_STACK_CATEGORIES = [
  'frontend',
  'metaFramework',
  'stateManagement',
  'styling',
  'frontendTesting',
  'backend',
  'backendFramework',
  'orm',
  'backendTesting',
  'database',
  'auth',
  'hosting',
  'storage',
] as const;

//? Using Simple Icons CDN for consistent SVG icons
const si = (name: string) => `https://cdn.simpleicons.org/${name}`;

export const frontendEcosystems: FrontendEcosystem[] = [
  {
    id: 'react',
    name: 'React',
    description:
      'Declarative, component-based UI library by Meta with a vast ecosystem and virtual DOM rendering',
    icon: si('react'),
    url: 'https://react.dev',
    metaFrameworks: [
      {
        id: 'nextjs',
        name: 'Next.js',
        description:
          'Full-stack React framework with SSR, SSG, API routes, and file-based routing by Vercel',
        icon: si('nextdotjs'),
        url: 'https://nextjs.org',
      },
      {
        id: 'remix',
        name: 'Remix',
        description:
          'Full-stack React framework focused on web standards, nested routing, and progressive enhancement',
        icon: si('remix'),
        url: 'https://remix.run',
      },
      {
        id: 'vite-react',
        name: 'Vite (SPA)',
        description: 'Lightning-fast build tool with HMR for client-side single-page applications',
        icon: si('vite'),
        url: 'https://vitejs.dev',
      },
      {
        id: 'astro-react',
        name: 'Astro',
        description:
          'Content-focused static site generator with partial hydration via React islands architecture',
        icon: si('astro'),
        url: 'https://astro.build',
      },
      {
        id: 'tanstack-start',
        name: 'TanStack Start',
        description:
          'Full-stack React framework with type-safe routing, SSR, and seamless TanStack integration',
        icon: si('reactquery'),
        url: 'https://tanstack.com/start',
      },
    ],
    stateManagement: [
      {
        id: 'zustand',
        name: 'Zustand',
        description:
          'Lightweight, unopinionated state management with a hooks-based API and minimal boilerplate',
        icon: zustandIcon,
        url: 'https://zustand-demo.pmnd.rs',
      },
      {
        id: 'redux-toolkit',
        name: 'Redux Toolkit',
        description:
          'Official Redux package with simplified store setup, immutable updates, and built-in async handling',
        icon: si('redux'),
        url: 'https://redux-toolkit.js.org',
      },
      {
        id: 'jotai',
        name: 'Jotai',
        description:
          'Primitive, flexible atomic state management inspired by Recoil with bottom-up approach',
        icon: 'https://cdn.candycode.com/jotai/jotai-mascot.png',
        url: 'https://jotai.org',
      },
      {
        id: 'react-query',
        name: 'TanStack Query',
        description:
          'Powerful async state management for fetching, caching, and syncing server data',
        icon: si('reactquery'),
        url: 'https://tanstack.com/query',
      },
      {
        id: 'react-context',
        name: 'React Context',
        description: 'Built-in React API for sharing state across components without prop drilling',
        icon: si('react'),
        url: 'https://react.dev/learn/passing-data-deeply-with-context',
      },
      {
        id: 'recoil',
        name: 'Recoil',
        description:
          'Experimental atomic state management by Meta with derived state and async queries',
        icon: si('recoil'),
        url: 'https://recoiljs.org',
      },
    ],
    styling: [
      {
        id: 'tailwind',
        name: 'Tailwind CSS',
        description:
          'Utility-first CSS framework for rapidly building custom designs without leaving your HTML',
        icon: si('tailwindcss'),
        url: 'https://tailwindcss.com',
      },
      {
        id: 'css-modules',
        name: 'CSS Modules',
        description:
          'Locally scoped CSS classes that avoid naming conflicts and enable modular styling',
        icon: si('cssmodules'),
        url: 'https://github.com/css-modules/css-modules',
      },
      {
        id: 'styled-components',
        name: 'Styled Components',
        description:
          'CSS-in-JS library using tagged template literals for dynamic, component-scoped styling',
        icon: si('styledcomponents'),
        url: 'https://styled-components.com',
      },
      {
        id: 'emotion',
        name: 'Emotion',
        description: 'Performant CSS-in-JS library with both styled components and css prop APIs',
        icon: 'https://raw.githubusercontent.com/emotion-js/emotion/main/emotion.png',
        url: 'https://emotion.sh',
      },
      {
        id: 'shadcn',
        name: 'shadcn/ui',
        description:
          'Copy-paste accessible components built on Radix UI primitives with Tailwind styling',
        icon: si('shadcnui'),
        url: 'https://ui.shadcn.com',
      },
      {
        id: 'chakra',
        name: 'Chakra UI',
        description:
          'Accessible, themeable component library with built-in dark mode and design system',
        icon: si('chakraui'),
        url: 'https://chakra-ui.com',
      },
      {
        id: 'mantine',
        name: 'Mantine',
        description:
          'Full-featured React component library with 100+ hooks, components, and form handling',
        icon: si('mantine'),
        url: 'https://mantine.dev',
      },
    ],
    testing: [
      {
        id: 'vitest',
        name: 'Vitest',
        description: 'Vite-native unit testing',
        icon: si('vitest'),
        url: 'https://vitest.dev',
      },
      {
        id: 'jest',
        name: 'Jest',
        description: 'JavaScript testing framework',
        icon: si('jest'),
        url: 'https://jestjs.io',
      },
      {
        id: 'playwright',
        name: 'Playwright',
        description: 'E2E browser testing',
        icon: playwrightIcon,
        url: 'https://playwright.dev',
      },
      {
        id: 'cypress',
        name: 'Cypress',
        description: 'E2E and component testing',
        icon: si('cypress'),
        url: 'https://www.cypress.io',
      },
      {
        id: 'testing-library',
        name: 'Testing Library',
        description:
          'Simple, accessibility-focused testing utilities that encourage testing user behavior over implementation',
        icon: si('testinglibrary'),
        url: 'https://testing-library.com',
      },
    ],
  },
  {
    id: 'vue',
    name: 'Vue',
    description:
      'Progressive JavaScript framework with gentle learning curve, reactive data binding, and composition API',
    icon: si('vuedotjs'),
    url: 'https://vuejs.org',
    metaFrameworks: [
      {
        id: 'nuxt',
        name: 'Nuxt',
        description:
          'Intuitive Vue framework with SSR, file-based routing, auto-imports, and powerful modules ecosystem',
        icon: si('nuxt'),
        url: 'https://nuxt.com',
      },
      {
        id: 'vite-vue',
        name: 'Vite (SPA)',
        description: 'Lightning-fast build tool with HMR for Vue single-page applications',
        icon: si('vite'),
        url: 'https://vitejs.dev',
      },
      {
        id: 'astro-vue',
        name: 'Astro',
        description:
          'Content-focused static site generator with partial hydration via Vue islands architecture',
        icon: si('astro'),
        url: 'https://astro.build',
      },
    ],
    stateManagement: [
      {
        id: 'pinia',
        name: 'Pinia',
        description:
          'Official Vue state management with devtools support, TypeScript inference, and modular stores',
        icon: 'https://pinia.vuejs.org/logo.svg',
        url: 'https://pinia.vuejs.org',
      },
      {
        id: 'vuex',
        name: 'Vuex',
        description:
          'Centralized state management with strict mutation patterns, now superseded by Pinia',
        icon: si('vuedotjs'),
        url: 'https://vuex.vuejs.org',
      },
      {
        id: 'vue-query',
        name: 'TanStack Query',
        description:
          'Powerful async state management for fetching, caching, and syncing server data in Vue',
        icon: si('reactquery'),
        url: 'https://tanstack.com/query',
      },
    ],
    styling: [
      {
        id: 'tailwind',
        name: 'Tailwind CSS',
        description:
          'Utility-first CSS framework for rapidly building custom designs without leaving your templates',
        icon: si('tailwindcss'),
        url: 'https://tailwindcss.com',
      },
      {
        id: 'vue-scoped',
        name: 'Scoped CSS',
        description:
          'Built-in Vue single-file component styles with automatic scoping via unique attributes',
        icon: si('vuedotjs'),
        url: 'https://vuejs.org/api/sfc-css-features',
      },
      {
        id: 'vuetify',
        name: 'Vuetify',
        description:
          'Comprehensive Material Design component framework with extensive theming and a11y support',
        icon: si('vuetify'),
        url: 'https://vuetifyjs.com',
      },
      {
        id: 'primevue',
        name: 'PrimeVue',
        description:
          'Feature-rich UI component suite with 90+ components, templates, and premium themes',
        icon: si('primevue'),
        url: 'https://primevue.org',
      },
      {
        id: 'naive-ui',
        name: 'Naive UI',
        description:
          'TypeScript-friendly Vue 3 component library with customizable themes and tree-shaking',
        icon: si('vuedotjs'),
        url: 'https://www.naiveui.com',
      },
    ],
    testing: [
      {
        id: 'vitest',
        name: 'Vitest',
        description:
          'Blazing fast Vite-native unit testing framework with seamless Vue integration',
        icon: si('vitest'),
        url: 'https://vitest.dev',
      },
      {
        id: 'jest',
        name: 'Jest',
        description:
          'Comprehensive JavaScript testing framework with zero-config setup and snapshot testing',
        icon: si('jest'),
        url: 'https://jestjs.io',
      },
      {
        id: 'playwright',
        name: 'Playwright',
        description:
          'Cross-browser E2E testing framework by Microsoft with auto-wait and trace debugging',
        icon: playwrightIcon,
        url: 'https://playwright.dev',
      },
      {
        id: 'cypress',
        name: 'Cypress',
        description:
          'Developer-friendly E2E and component testing with real-time reloads and time-travel debugging',
        icon: si('cypress'),
        url: 'https://www.cypress.io',
      },
    ],
  },
  {
    id: 'svelte',
    name: 'Svelte',
    description:
      'Compile-time reactive framework that shifts work from runtime to build for smaller, faster apps',
    icon: si('svelte'),
    url: 'https://svelte.dev',
    metaFrameworks: [
      {
        id: 'sveltekit',
        name: 'SvelteKit',
        description:
          'Official full-stack Svelte framework with SSR, file-based routing, and adapter system',
        icon: si('svelte'),
        url: 'https://kit.svelte.dev',
      },
      {
        id: 'vite-svelte',
        name: 'Vite (SPA)',
        description: 'Lightning-fast build tool with HMR for Svelte single-page applications',
        icon: si('vite'),
        url: 'https://vitejs.dev',
      },
      {
        id: 'astro-svelte',
        name: 'Astro',
        description:
          'Content-focused static site generator with partial hydration via Svelte islands architecture',
        icon: si('astro'),
        url: 'https://astro.build',
      },
    ],
    stateManagement: [
      {
        id: 'svelte-stores',
        name: 'Svelte Stores',
        description: 'Built-in reactive state containers with subscribe, set, and update methods',
        icon: si('svelte'),
        url: 'https://svelte.dev/docs/svelte-store',
      },
      {
        id: 'svelte-runes',
        name: 'Runes (Svelte 5)',
        description:
          'New fine-grained reactivity system with universal signals-based state management',
        icon: si('svelte'),
        url: 'https://svelte.dev/docs/svelte/what-are-runes',
      },
      {
        id: 'svelte-query',
        name: 'TanStack Query',
        description:
          'Powerful async state management for fetching, caching, and syncing server data in Svelte',
        icon: si('reactquery'),
        url: 'https://tanstack.com/query',
      },
    ],
    styling: [
      {
        id: 'tailwind',
        name: 'Tailwind CSS',
        description:
          'Utility-first CSS framework for rapidly building custom designs in Svelte components',
        icon: si('tailwindcss'),
        url: 'https://tailwindcss.com',
      },
      {
        id: 'svelte-scoped',
        name: 'Scoped CSS',
        description: 'Built-in component-scoped styles in Svelte single-file components',
        icon: si('svelte'),
        url: 'https://svelte.dev/docs/svelte-components#style',
      },
      {
        id: 'skeleton',
        name: 'Skeleton',
        description: 'Adaptive Svelte UI toolkit with Tailwind integration and theming system',
        icon: si('skeleton'),
        url: 'https://www.skeleton.dev',
      },
    ],
    testing: [
      {
        id: 'vitest',
        name: 'Vitest',
        description:
          'Blazing fast Vite-native unit testing framework with Svelte component testing',
        icon: si('vitest'),
        url: 'https://vitest.dev',
      },
      {
        id: 'playwright',
        name: 'Playwright',
        description:
          'Cross-browser E2E testing framework by Microsoft with auto-wait and trace debugging',
        icon: playwrightIcon,
        url: 'https://playwright.dev',
      },
      {
        id: 'cypress',
        name: 'Cypress',
        description:
          'Developer-friendly E2E and component testing with real-time reloads and time-travel debugging',
        icon: si('cypress'),
        url: 'https://www.cypress.io',
      },
    ],
  },
  {
    id: 'angular',
    name: 'Angular',
    description:
      'Enterprise-ready TypeScript framework by Google with dependency injection, RxJS, and powerful CLI',
    icon: si('angular'),
    url: 'https://angular.dev',
    metaFrameworks: [
      {
        id: 'angular-cli',
        name: 'Angular CLI',
        description:
          'Official command-line interface for scaffolding, building, and deploying Angular apps',
        icon: si('angular'),
        url: 'https://angular.dev/tools/cli',
      },
      {
        id: 'analog',
        name: 'Analog',
        description:
          'Full-stack Angular meta-framework with file-based routing, SSR, and Vite integration',
        icon: analogIcon,
        url: 'https://analogjs.org',
      },
    ],
    stateManagement: [
      {
        id: 'ngrx',
        name: 'NgRx',
        description: 'Redux-inspired reactive state management with RxJS-powered side effects',
        icon: si('ngrx'),
        url: 'https://ngrx.io',
      },
      {
        id: 'ngxs',
        name: 'NGXS',
        description: 'State management using classes and decorators with minimal boilerplate',
        icon: si('angular'),
        url: 'https://www.ngxs.io',
      },
      {
        id: 'angular-signals',
        name: 'Signals',
        description:
          'Built-in fine-grained reactivity system for synchronous state without RxJS complexity',
        icon: si('angular'),
        url: 'https://angular.dev/guide/signals',
      },
      {
        id: 'akita',
        name: 'Akita',
        description: 'Entity-based state management pattern by Salesforce with devtools support',
        icon: si('angular'),
        url: 'https://opensource.salesforce.com/akita',
      },
    ],
    styling: [
      {
        id: 'tailwind',
        name: 'Tailwind CSS',
        description:
          'Utility-first CSS framework for rapidly building custom designs in Angular templates',
        icon: si('tailwindcss'),
        url: 'https://tailwindcss.com',
      },
      {
        id: 'angular-material',
        name: 'Angular Material',
        description:
          'Official Material Design component library with accessibility and theming built-in',
        icon: si('angular'),
        url: 'https://material.angular.io',
      },
      {
        id: 'primeng',
        name: 'PrimeNG',
        description:
          'Comprehensive UI suite with 90+ components, templates, and advanced data tables',
        icon: si('primeng'),
        url: 'https://primeng.org',
      },
      {
        id: 'ng-bootstrap',
        name: 'ng-bootstrap',
        description: 'Native Angular widgets built from scratch using Bootstrap CSS framework',
        icon: si('bootstrap'),
        url: 'https://ng-bootstrap.github.io',
      },
    ],
    testing: [
      {
        id: 'jest',
        name: 'Jest',
        description:
          'Comprehensive JavaScript testing framework with zero-config setup and snapshot testing',
        icon: si('jest'),
        url: 'https://jestjs.io',
      },
      {
        id: 'jasmine',
        name: 'Jasmine',
        description:
          "Behavior-driven testing framework that ships as Angular's default test runner",
        icon: si('jasmine'),
        url: 'https://jasmine.github.io',
      },
      {
        id: 'playwright',
        name: 'Playwright',
        description:
          'Cross-browser E2E testing framework by Microsoft with auto-wait and trace debugging',
        icon: playwrightIcon,
        url: 'https://playwright.dev',
      },
      {
        id: 'cypress',
        name: 'Cypress',
        description:
          'Developer-friendly E2E and component testing with real-time reloads and time-travel debugging',
        icon: si('cypress'),
        url: 'https://www.cypress.io',
      },
    ],
  },
  {
    id: 'solid',
    name: 'Solid',
    description:
      'High-performance reactive UI library with true fine-grained reactivity and no virtual DOM',
    icon: si('solid'),
    url: 'https://www.solidjs.com',
    metaFrameworks: [
      {
        id: 'solidstart',
        name: 'SolidStart',
        description: 'Full-stack Solid framework with SSR, streaming, and nested routing',
        icon: si('solid'),
        url: 'https://start.solidjs.com',
      },
      {
        id: 'vite-solid',
        name: 'Vite (SPA)',
        description: 'Lightning-fast build tool with HMR for Solid single-page applications',
        icon: si('vite'),
        url: 'https://vitejs.dev',
      },
      {
        id: 'astro-solid',
        name: 'Astro',
        description:
          'Content-focused static site generator with partial hydration via Solid islands architecture',
        icon: si('astro'),
        url: 'https://astro.build',
      },
    ],
    stateManagement: [
      {
        id: 'solid-signals',
        name: 'Signals',
        description:
          'Built-in primitives for creating reactive state that updates only what changes',
        icon: si('solid'),
        url: 'https://www.solidjs.com/docs/latest/api#createsignal',
      },
      {
        id: 'solid-query',
        name: 'TanStack Query',
        description:
          'Powerful async state management for fetching, caching, and syncing server data in Solid',
        icon: si('reactquery'),
        url: 'https://tanstack.com/query',
      },
    ],
    styling: [
      {
        id: 'tailwind',
        name: 'Tailwind CSS',
        description:
          'Utility-first CSS framework for rapidly building custom designs in Solid apps',
        icon: si('tailwindcss'),
        url: 'https://tailwindcss.com',
      },
      {
        id: 'solid-styled',
        name: 'Solid Styled',
        description: 'Styled-components-like CSS-in-JS library built specifically for Solid',
        icon: si('solid'),
        url: 'https://github.com/solidjs/solid-styled-components',
      },
      {
        id: 'kobalte',
        name: 'Kobalte',
        description: 'Unstyled, accessible UI primitives for building design systems in Solid',
        icon: si('solid'),
        url: 'https://kobalte.dev',
      },
    ],
    testing: [
      {
        id: 'vitest',
        name: 'Vitest',
        description: 'Blazing fast Vite-native unit testing framework with Solid component testing',
        icon: si('vitest'),
        url: 'https://vitest.dev',
      },
      {
        id: 'playwright',
        name: 'Playwright',
        description:
          'Cross-browser E2E testing framework by Microsoft with auto-wait and trace debugging',
        icon: playwrightIcon,
        url: 'https://playwright.dev',
      },
      {
        id: 'cypress',
        name: 'Cypress',
        description:
          'Developer-friendly E2E and component testing with real-time reloads and time-travel debugging',
        icon: si('cypress'),
        url: 'https://www.cypress.io',
      },
    ],
  },
  {
    id: 'htmx',
    name: 'HTMX',
    description:
      'Lightweight library for HTML-driven interactivity using AJAX, CSS transitions, and WebSockets',
    icon: si('htmx'),
    url: 'https://htmx.org',
    metaFrameworks: [
      {
        id: 'htmx-standalone',
        name: 'Server Templates',
        description:
          'Traditional server-rendered HTML enhanced with HTMX attributes for dynamic updates',
        icon: si('htmx'),
        url: 'https://htmx.org',
      },
    ],
    stateManagement: [
      {
        id: 'server-state',
        name: 'Server State',
        description:
          'Hypermedia-driven approach where application state is managed entirely on the server',
        icon: si('htmx'),
        url: 'https://htmx.org/essays/hypermedia-driven-applications',
      },
      {
        id: 'alpine',
        name: 'Alpine.js',
        description:
          'Lightweight reactive framework for sprinkling JavaScript behavior into HTML markup',
        icon: si('alpinedotjs'),
        url: 'https://alpinejs.dev',
      },
    ],
    styling: [
      {
        id: 'tailwind',
        name: 'Tailwind CSS',
        description:
          'Utility-first CSS framework that pairs perfectly with server-rendered HTML and HTMX',
        icon: si('tailwindcss'),
        url: 'https://tailwindcss.com',
      },
      {
        id: 'vanilla-css',
        name: 'Vanilla CSS',
        description: 'Standard CSS without frameworks for full control over styling',
        icon: si('css'),
        url: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
      },
      {
        id: 'bootstrap',
        name: 'Bootstrap',
        description:
          'Popular CSS framework with pre-built components, grid system, and JavaScript plugins',
        icon: si('bootstrap'),
        url: 'https://getbootstrap.com',
      },
    ],
    testing: [
      {
        id: 'playwright',
        name: 'Playwright',
        description:
          'Cross-browser E2E testing framework by Microsoft with auto-wait and trace debugging',
        icon: playwrightIcon,
        url: 'https://playwright.dev',
      },
      {
        id: 'cypress',
        name: 'Cypress',
        description:
          'Developer-friendly E2E and component testing with real-time reloads and time-travel debugging',
        icon: si('cypress'),
        url: 'https://www.cypress.io',
      },
    ],
  },
];

export const backendEcosystems: BackendEcosystem[] = [
  {
    id: 'node',
    name: 'Node.js',
    language: 'TypeScript/JavaScript',
    description: 'Event-driven JavaScript runtime built on V8 for scalable network applications',
    icon: si('nodedotjs'),
    url: 'https://nodejs.org',
    frameworks: [
      {
        id: 'express',
        name: 'Express',
        description:
          'Minimal, unopinionated Node.js web framework with extensive middleware ecosystem',
        icon: si('express'),
        url: 'https://expressjs.com',
      },
      {
        id: 'fastify',
        name: 'Fastify',
        description: 'High-performance Node.js framework with built-in validation and logging',
        icon: si('fastify'),
        url: 'https://fastify.dev',
      },
      {
        id: 'nestjs',
        name: 'NestJS',
        description:
          'Progressive Node.js framework with TypeScript, DI, and modular architecture inspired by Angular',
        icon: si('nestjs'),
        url: 'https://nestjs.com',
      },
      {
        id: 'hono',
        name: 'Hono',
        description: 'Ultrafast, lightweight web framework that runs on any JavaScript runtime',
        icon: si('hono'),
        url: 'https://hono.dev',
      },
      {
        id: 'elysia',
        name: 'Elysia',
        description: 'TypeScript framework optimized for Bun with end-to-end type safety',
        icon: si('bun'),
        url: 'https://elysiajs.com',
      },
    ],
    orms: [
      {
        id: 'prisma',
        name: 'Prisma',
        description:
          'Next-generation ORM with auto-generated types, migrations, and intuitive data modeling',
        icon: si('prisma'),
        url: 'https://www.prisma.io',
      },
      {
        id: 'drizzle',
        name: 'Drizzle',
        description: 'Lightweight TypeScript ORM with SQL-like syntax and zero dependencies',
        icon: si('drizzle'),
        url: 'https://orm.drizzle.team',
      },
      {
        id: 'typeorm',
        name: 'TypeORM',
        description:
          'Feature-rich ORM supporting Active Record and Data Mapper patterns with TypeScript',
        icon: si('typeorm'),
        url: 'https://typeorm.io',
      },
      {
        id: 'sequelize',
        name: 'Sequelize',
        description:
          'Mature promise-based ORM with support for multiple SQL dialects and migrations',
        icon: si('sequelize'),
        url: 'https://sequelize.org',
      },
      {
        id: 'mongoose',
        name: 'Mongoose',
        description: 'Elegant MongoDB object modeling with schema validation and middleware hooks',
        icon: si('mongoose'),
        url: 'https://mongoosejs.com',
      },
      {
        id: 'kysely',
        name: 'Kysely',
        description:
          'Type-safe SQL query builder with zero dependencies and full TypeScript inference',
        icon: si('typescript'),
        url: 'https://kysely.dev',
      },
    ],
    testing: [
      {
        id: 'vitest',
        name: 'Vitest',
        description: 'Blazing fast Vite-native testing framework with Jest-compatible API',
        icon: si('vitest'),
        url: 'https://vitest.dev',
      },
      {
        id: 'jest',
        name: 'Jest',
        description:
          'Comprehensive JavaScript testing framework with zero-config setup and mocking',
        icon: si('jest'),
        url: 'https://jestjs.io',
      },
      {
        id: 'supertest',
        name: 'Supertest',
        description: 'High-level HTTP testing library for testing Express and Node.js servers',
        icon: si('nodedotjs'),
        url: 'https://github.com/ladjs/supertest',
      },
    ],
  },
  {
    id: 'python',
    name: 'Python',
    language: 'Python',
    description: 'Readable, versatile language with rich ecosystem for web, data science, and AI',
    icon: si('python'),
    url: 'https://www.python.org',
    frameworks: [
      {
        id: 'fastapi',
        name: 'FastAPI',
        description:
          'High-performance async Python framework with automatic OpenAPI docs and type validation',
        icon: si('fastapi'),
        url: 'https://fastapi.tiangolo.com',
      },
      {
        id: 'django',
        name: 'Django',
        description:
          'Batteries-included framework with admin panel, ORM, auth, and security built-in',
        icon: si('django'),
        url: 'https://www.djangoproject.com',
      },
      {
        id: 'flask',
        name: 'Flask',
        description: 'Lightweight WSGI micro-framework with flexibility to add only what you need',
        icon: si('flask'),
        url: 'https://flask.palletsprojects.com',
      },
      {
        id: 'litestar',
        name: 'Litestar',
        description:
          'High-performance ASGI framework with dependency injection and OpenAPI support',
        icon: si('python'),
        url: 'https://litestar.dev',
      },
    ],
    orms: [
      {
        id: 'sqlalchemy',
        name: 'SQLAlchemy',
        description:
          'Comprehensive SQL toolkit and ORM with flexible query construction and connection pooling',
        icon: si('sqlalchemy'),
        url: 'https://www.sqlalchemy.org',
      },
      {
        id: 'django-orm',
        name: 'Django ORM',
        description:
          'Integrated ORM with migrations, querysets, and model inheritance built into Django',
        icon: si('django'),
        url: 'https://docs.djangoproject.com/en/stable/topics/db',
      },
      {
        id: 'tortoise',
        name: 'Tortoise ORM',
        description: 'Easy-to-use async ORM inspired by Django with familiar query syntax',
        icon: si('python'),
        url: 'https://tortoise.github.io',
      },
      {
        id: 'sqlmodel',
        name: 'SQLModel',
        description:
          'Pydantic and SQLAlchemy fusion for type-safe database models by FastAPI creator',
        icon: si('python'),
        url: 'https://sqlmodel.tiangolo.com',
      },
      {
        id: 'odmantic',
        name: 'ODMantic',
        description: 'Async MongoDB ODM using Pydantic models and Motor driver',
        icon: si('mongodb'),
        url: 'https://art049.github.io/odmantic',
      },
    ],
    testing: [
      {
        id: 'pytest',
        name: 'pytest',
        description:
          'Feature-rich Python testing framework with powerful fixtures and plugin system',
        icon: si('pytest'),
        url: 'https://pytest.org',
      },
      {
        id: 'unittest',
        name: 'unittest',
        description: "Python's standard library testing module with xUnit-style test organization",
        icon: si('python'),
        url: 'https://docs.python.org/3/library/unittest.html',
      },
    ],
  },
  {
    id: 'ruby',
    name: 'Ruby',
    language: 'Ruby',
    description: 'Elegant, expressive language optimized for developer productivity and happiness',
    icon: si('ruby'),
    url: 'https://www.ruby-lang.org',
    frameworks: [
      {
        id: 'rails',
        name: 'Ruby on Rails',
        description:
          'Convention-over-configuration MVC framework with integrated tools for rapid development',
        icon: si('rubyonrails'),
        url: 'https://rubyonrails.org',
      },
      {
        id: 'sinatra',
        name: 'Sinatra',
        description: 'DSL for quickly creating web applications with minimal ceremony',
        icon: si('rubysinatra'),
        url: 'https://sinatrarb.com',
      },
      {
        id: 'hanami',
        name: 'Hanami',
        description:
          'Modern Ruby framework emphasizing clean architecture and object-oriented design',
        icon: si('ruby'),
        url: 'https://hanamirb.org',
      },
    ],
    orms: [
      {
        id: 'activerecord',
        name: 'Active Record',
        description: "Rails's powerful ORM with migrations, validations, and associations",
        icon: si('rubyonrails'),
        url: 'https://guides.rubyonrails.org/active_record_basics.html',
      },
      {
        id: 'sequel',
        name: 'Sequel',
        description: 'Flexible database toolkit with both simple and advanced dataset APIs',
        icon: si('ruby'),
        url: 'https://sequel.jeremyevans.net',
      },
      {
        id: 'rom-rb',
        name: 'ROM',
        description: 'Data mapping and persistence toolkit with clean separation of concerns',
        icon: si('ruby'),
        url: 'https://rom-rb.org',
      },
    ],
    testing: [
      {
        id: 'rspec',
        name: 'RSpec',
        description: 'Behavior-driven development framework with expressive, readable test syntax',
        icon: si('ruby'),
        url: 'https://rspec.info',
      },
      {
        id: 'minitest',
        name: 'Minitest',
        description: "Ruby's fast, lightweight testing library with spec and unit test styles",
        icon: si('ruby'),
        url: 'https://github.com/minitest/minitest',
      },
    ],
  },
  {
    id: 'go',
    name: 'Go',
    language: 'Go',
    description:
      'Compiled language by Google with built-in concurrency, simplicity, and fast compilation',
    icon: si('go'),
    url: 'https://go.dev',
    frameworks: [
      {
        id: 'gin',
        name: 'Gin',
        description:
          'High-performance HTTP framework with martini-like API and fast radix tree routing',
        icon: si('gin'),
        url: 'https://gin-gonic.com',
      },
      {
        id: 'echo',
        name: 'Echo',
        description: 'Minimalist Go framework with optimized HTTP router and middleware support',
        icon: si('go'),
        url: 'https://echo.labstack.com',
      },
      {
        id: 'fiber',
        name: 'Fiber',
        description: 'Express.js-inspired framework built on Fasthttp for zero memory allocation',
        icon: fiberIcon,
        url: 'https://gofiber.io',
      },
      {
        id: 'chi',
        name: 'Chi',
        description: 'Composable, idiomatic HTTP router with standard library compatibility',
        icon: si('go'),
        url: 'https://go-chi.io',
      },
    ],
    orms: [
      {
        id: 'gorm',
        name: 'GORM',
        description:
          'Full-featured ORM for Go with associations, hooks, preloading, and auto-migrations',
        icon: si('go'),
        url: 'https://gorm.io',
      },
      {
        id: 'sqlx',
        name: 'sqlx',
        description:
          'General-purpose extensions to database/sql with named queries and struct scanning',
        icon: si('go'),
        url: 'https://github.com/jmoiron/sqlx',
      },
      {
        id: 'ent',
        name: 'Ent',
        description:
          'Graph-based entity framework by Facebook with code generation and type safety',
        icon: si('go'),
        url: 'https://entgo.io',
      },
      {
        id: 'sqlc',
        name: 'sqlc',
        description:
          'Compile-time SQL-to-Go code generator with full type safety and no runtime reflection',
        icon: si('go'),
        url: 'https://sqlc.dev',
      },
    ],
    testing: [
      {
        id: 'go-test',
        name: 'go test',
        description:
          "Go's standard testing tool with benchmarking, coverage, and parallel execution",
        icon: si('go'),
        url: 'https://pkg.go.dev/testing',
      },
      {
        id: 'testify',
        name: 'Testify',
        description: 'Popular toolkit with assertions, mocking, and suite support for Go tests',
        icon: si('go'),
        url: 'https://github.com/stretchr/testify',
      },
    ],
  },
  {
    id: 'rust',
    name: 'Rust',
    language: 'Rust',
    description:
      'Memory-safe systems language with zero-cost abstractions and fearless concurrency',
    icon: si('rust'),
    url: 'https://www.rust-lang.org',
    frameworks: [
      {
        id: 'axum',
        name: 'Axum',
        description: 'Ergonomic async web framework by Tokio team with type-safe extractors',
        icon: si('rust'),
        url: 'https://github.com/tokio-rs/axum',
      },
      {
        id: 'actix-web',
        name: 'Actix Web',
        description: 'Blazingly fast actor-based framework consistently topping benchmarks',
        icon: si('actix'),
        url: 'https://actix.rs',
      },
      {
        id: 'rocket',
        name: 'Rocket',
        description: 'Type-safe, boilerplate-free framework with focus on developer experience',
        icon: si('rust'),
        url: 'https://rocket.rs',
      },
      {
        id: 'warp',
        name: 'Warp',
        description: 'Filter-based composable web framework built on hyper with WebSocket support',
        icon: si('rust'),
        url: 'https://github.com/seanmonstar/warp',
      },
    ],
    orms: [
      {
        id: 'sqlx-rust',
        name: 'SQLx',
        description: 'Compile-time checked async SQL with pure Rust drivers',
        icon: si('rust'),
        url: 'https://github.com/launchbadge/sqlx',
      },
      {
        id: 'diesel',
        name: 'Diesel',
        description: 'Safe, composable ORM with compile-time query validation and migrations',
        icon: dieselIcon,
        url: 'https://diesel.rs',
      },
      {
        id: 'seaorm',
        name: 'SeaORM',
        description: 'Async ORM with ActiveRecord pattern, migrations, and dynamic queries',
        icon: si('rust'),
        url: 'https://www.sea-ql.org/SeaORM',
      },
    ],
    testing: [
      {
        id: 'rust-test',
        name: 'cargo test',
        description:
          "Rust's integrated test runner with doc tests, unit tests, and integration tests",
        icon: si('rust'),
        url: 'https://doc.rust-lang.org/book/ch11-00-testing.html',
      },
      {
        id: 'nextest',
        name: 'nextest',
        description: 'Fast, parallel test runner with better output and flaky test detection',
        icon: si('rust'),
        url: 'https://nexte.st',
      },
    ],
  },
  {
    id: 'dotnet',
    name: '.NET',
    language: 'C#',
    description:
      "Microsoft's cross-platform framework for building web, cloud, and desktop applications",
    icon: si('dotnet'),
    url: 'https://dotnet.microsoft.com',
    frameworks: [
      {
        id: 'aspnet-core',
        name: 'ASP.NET Core',
        description:
          'High-performance, cross-platform framework for building modern web APIs and applications',
        icon: si('dotnet'),
        url: 'https://dotnet.microsoft.com/apps/aspnet',
      },
      {
        id: 'minimal-api',
        name: 'Minimal APIs',
        description: 'Streamlined approach for building APIs with minimal code and dependencies',
        icon: si('dotnet'),
        url: 'https://learn.microsoft.com/aspnet/core/fundamentals/minimal-apis',
      },
      {
        id: 'blazor',
        name: 'Blazor',
        description: 'Build interactive web UIs with C# using WebAssembly or server-side rendering',
        icon: si('blazor'),
        url: 'https://dotnet.microsoft.com/apps/aspnet/web-apps/blazor',
      },
    ],
    orms: [
      {
        id: 'ef-core',
        name: 'Entity Framework Core',
        description:
          'Modern ORM with LINQ queries, change tracking, migrations, and multiple database providers',
        icon: si('dotnet'),
        url: 'https://learn.microsoft.com/ef/core',
      },
      {
        id: 'dapper',
        name: 'Dapper',
        description: 'Lightning-fast micro ORM by Stack Overflow with simple object mapping',
        icon: si('dotnet'),
        url: 'https://github.com/DapperLib/Dapper',
      },
      {
        id: 'linq2db',
        name: 'linq2db',
        description: 'Fast, lightweight LINQ to SQL provider for type-safe database access',
        icon: si('dotnet'),
        url: 'https://linq2db.github.io',
      },
    ],
    testing: [
      {
        id: 'xunit',
        name: 'xUnit',
        description: 'Modern .NET testing framework with extensibility and parallel test execution',
        icon: si('dotnet'),
        url: 'https://xunit.net',
      },
      {
        id: 'nunit',
        name: 'NUnit',
        description: 'Popular .NET testing framework with rich assertions and attributes',
        icon: si('dotnet'),
        url: 'https://nunit.org',
      },
      {
        id: 'mstest',
        name: 'MSTest',
        description: "Microsoft's official test framework integrated with Visual Studio",
        icon: si('dotnet'),
        url: 'https://learn.microsoft.com/dotnet/core/testing/unit-testing-with-mstest',
      },
    ],
  },
  {
    id: 'java',
    name: 'Java/Kotlin',
    language: 'Java/Kotlin',
    description: 'Mature JVM platform powering enterprise systems with strong typing and tooling',
    icon: si('openjdk'),
    url: 'https://www.java.com',
    frameworks: [
      {
        id: 'spring-boot',
        name: 'Spring Boot',
        description:
          'Opinionated framework for production-ready Spring applications with auto-configuration',
        icon: si('springboot'),
        url: 'https://spring.io/projects/spring-boot',
      },
      {
        id: 'quarkus',
        name: 'Quarkus',
        description: 'Supersonic Kubernetes-native framework with fast startup and low memory',
        icon: si('quarkus'),
        url: 'https://quarkus.io',
      },
      {
        id: 'micronaut',
        name: 'Micronaut',
        description: 'Lightweight JVM framework with compile-time DI and ahead-of-time compilation',
        icon: micronautIcon,
        url: 'https://micronaut.io',
      },
      {
        id: 'ktor',
        name: 'Ktor',
        description:
          'Kotlin-native async framework by JetBrains for building connected applications',
        icon: si('ktor'),
        url: 'https://ktor.io',
      },
    ],
    orms: [
      {
        id: 'hibernate',
        name: 'Hibernate',
        description: 'Industry-standard ORM implementing JPA with caching and lazy loading',
        icon: si('hibernate'),
        url: 'https://hibernate.org',
      },
      {
        id: 'jooq',
        name: 'jOOQ',
        description: 'Fluent API for type-safe SQL query construction with code generation',
        icon: si('openjdk'),
        url: 'https://www.jooq.org',
      },
      {
        id: 'exposed',
        name: 'Exposed',
        description: 'Kotlin SQL library with typesafe DSL and DAO support by JetBrains',
        icon: si('kotlin'),
        url: 'https://github.com/JetBrains/Exposed',
      },
      {
        id: 'spring-data',
        name: 'Spring Data JPA',
        description:
          'Repository abstraction layer with automatic query generation from method names',
        icon: si('spring'),
        url: 'https://spring.io/projects/spring-data-jpa',
      },
    ],
    testing: [
      {
        id: 'junit5',
        name: 'JUnit 5',
        description: 'Modern Java testing platform with parameterized tests and extension model',
        icon: si('junit5'),
        url: 'https://junit.org/junit5',
      },
      {
        id: 'mockito',
        name: 'Mockito',
        description: 'Popular mocking framework for unit tests with intuitive API and verification',
        icon: si('openjdk'),
        url: 'https://site.mockito.org',
      },
      {
        id: 'kotest',
        name: 'Kotest',
        description:
          'Flexible Kotlin testing framework with data-driven tests and property testing',
        icon: si('kotlin'),
        url: 'https://kotest.io',
      },
    ],
  },
  {
    id: 'php',
    name: 'PHP',
    language: 'PHP',
    description:
      'Widely-deployed server-side language powering WordPress, Laravel, and much of the web',
    icon: si('php'),
    url: 'https://www.php.net',
    frameworks: [
      {
        id: 'laravel',
        name: 'Laravel',
        description:
          'Expressive PHP framework with elegant syntax, Eloquent ORM, and rich ecosystem',
        icon: si('laravel'),
        url: 'https://laravel.com',
      },
      {
        id: 'symfony',
        name: 'Symfony',
        description: 'Enterprise PHP framework with reusable components and long-term support',
        icon: si('symfony'),
        url: 'https://symfony.com',
      },
      {
        id: 'slim',
        name: 'Slim',
        description: 'Lightweight PHP micro-framework ideal for APIs and small applications',
        icon: si('php'),
        url: 'https://www.slimframework.com',
      },
    ],
    orms: [
      {
        id: 'eloquent',
        name: 'Eloquent',
        description: "Laravel's expressive Active Record ORM with relationships and eager loading",
        icon: si('laravel'),
        url: 'https://laravel.com/docs/eloquent',
      },
      {
        id: 'doctrine',
        name: 'Doctrine',
        description: 'Powerful Data Mapper ORM with migrations, DBAL, and entity management',
        icon: si('doctrine'),
        url: 'https://www.doctrine-project.org',
      },
    ],
    testing: [
      {
        id: 'phpunit',
        name: 'PHPUnit',
        description: 'Standard PHP testing framework with code coverage and test isolation',
        icon: si('php'),
        url: 'https://phpunit.de',
      },
      {
        id: 'pest-php',
        name: 'Pest',
        description: 'Elegant, minimal testing framework with expressive syntax built on PHPUnit',
        icon: si('php'),
        url: 'https://pestphp.com',
      },
    ],
  },
];

export const universalOptions: UniversalOptions = {
  auth: [
    {
      id: 'nextauth',
      name: 'NextAuth.js / Auth.js',
      description: 'Flexible authentication library with OAuth, email, and credentials providers',
      icon: si('auth0'),
      url: 'https://authjs.dev',
    },
    {
      id: 'clerk',
      name: 'Clerk',
      description: 'Complete user management with pre-built UI components and social SSO',
      icon: si('clerk'),
      url: 'https://clerk.com',
    },
    {
      id: 'auth0',
      name: 'Auth0',
      description:
        'Enterprise identity platform with universal login, MFA, and extensive integrations',
      icon: si('auth0'),
      url: 'https://auth0.com',
    },
    {
      id: 'firebase-auth',
      name: 'Firebase Auth',
      description: "Google's drop-in auth with phone, email, and social providers",
      icon: si('firebase'),
      url: 'https://firebase.google.com/products/auth',
    },
    {
      id: 'supabase-auth',
      name: 'Supabase Auth',
      description: 'Open-source auth solution with row-level security and OAuth providers',
      icon: si('supabase'),
      url: 'https://supabase.com/auth',
    },
    {
      id: 'lucia',
      name: 'Lucia',
      description: 'Lightweight, session-based auth library that works anywhere JavaScript runs',
      icon: si('lucia'),
      url: 'https://lucia-auth.com',
    },
    {
      id: 'kinde',
      name: 'Kinde',
      description: 'Modern auth platform with feature flags, user management, and billing',
      icon: kindeIcon,
      url: 'https://kinde.com',
    },
    {
      id: 'keycloak',
      name: 'Keycloak',
      description: 'Open-source IAM solution by Red Hat with SSO, LDAP, and SAML support',
      icon: si('keycloak'),
      url: 'https://www.keycloak.org',
    },
    {
      id: 'custom-jwt',
      name: 'Custom JWT',
      description: 'Build your own stateless authentication using JSON Web Tokens',
      icon: si('jsonwebtokens'),
      url: 'https://jwt.io',
    },
    {
      id: 'devise',
      name: 'Devise',
      description: 'Flexible Rails authentication with Warden and modular configuration',
      icon: si('ruby'),
      url: 'https://github.com/heartcombo/devise',
    },
    {
      id: 'django-auth',
      name: 'Django Auth',
      description: "Django's built-in user authentication with permissions and groups",
      icon: si('django'),
      url: 'https://docs.djangoproject.com/en/stable/topics/auth',
    },
  ],
  databases: [
    {
      id: 'postgresql',
      name: 'PostgreSQL',
      description: 'Feature-rich open-source RDBMS with JSONB, full-text search, and extensions',
      icon: si('postgresql'),
      url: 'https://www.postgresql.org',
    },
    {
      id: 'mysql',
      name: 'MySQL',
      description: 'Widely-used open-source RDBMS known for reliability and ease of use',
      icon: si('mysql'),
      url: 'https://www.mysql.com',
    },
    {
      id: 'sqlite',
      name: 'SQLite',
      description: 'Self-contained, serverless SQL database engine perfect for embedded use',
      icon: si('sqlite'),
      url: 'https://www.sqlite.org',
    },
    {
      id: 'mongodb',
      name: 'MongoDB',
      description: 'Flexible document database with rich queries, indexing, and horizontal scaling',
      icon: si('mongodb'),
      url: 'https://www.mongodb.com',
    },
    {
      id: 'cosmosdb',
      name: 'Azure Cosmos DB',
      description:
        'Globally distributed, multi-model database with guaranteed low latency and SLAs',
      icon: azureCosmosDBIcon,
      url: 'https://azure.microsoft.com/products/cosmos-db',
    },
    {
      id: 'redis',
      name: 'Redis',
      description: 'Blazingly fast in-memory data store for caching, sessions, and pub/sub',
      icon: si('redis'),
      url: 'https://redis.io',
    },
    {
      id: 'supabase-db',
      name: 'Supabase (Postgres)',
      description: 'Managed Postgres with real-time subscriptions, auth, and auto-generated APIs',
      icon: si('supabase'),
      url: 'https://supabase.com',
    },
    {
      id: 'planetscale',
      name: 'PlanetScale',
      description: 'Serverless MySQL platform with branching, deploy requests, and instant scaling',
      icon: si('planetscale'),
      url: 'https://planetscale.com',
    },
    {
      id: 'neon',
      name: 'Neon',
      description: 'Serverless Postgres with branching, auto-scaling, and bottomless storage',
      icon: neonIcon,
      url: 'https://neon.tech',
    },
    {
      id: 'turso',
      name: 'Turso',
      description: 'Edge-native SQLite-compatible database with global replication',
      icon: si('turso'),
      url: 'https://turso.tech',
    },
    {
      id: 'cockroachdb',
      name: 'CockroachDB',
      description: 'Distributed SQL database with automatic sharding and multi-region resilience',
      icon: si('cockroachlabs'),
      url: 'https://www.cockroachlabs.com',
    },
  ],
  hosting: [
    {
      id: 'vercel',
      name: 'Vercel',
      description:
        'Frontend cloud with edge functions, instant deployments, and Next.js optimization',
      icon: si('vercel'),
      url: 'https://vercel.com',
    },
    {
      id: 'netlify',
      name: 'Netlify',
      description: 'Web platform with serverless functions, forms, and continuous deployment',
      icon: si('netlify'),
      url: 'https://www.netlify.com',
    },
    {
      id: 'aws',
      name: 'AWS',
      description: 'Comprehensive cloud platform with 200+ services for any workload',
      icon: awsIcon,
      url: 'https://aws.amazon.com',
    },
    {
      id: 'azure',
      name: 'Azure',
      description:
        "Microsoft's cloud with hybrid capabilities, enterprise features, and global reach",
      icon: azureIcon,
      url: 'https://azure.microsoft.com',
    },
    {
      id: 'gcp',
      name: 'Google Cloud',
      description: "Google's cloud platform excelling in data analytics, ML, and Kubernetes",
      icon: si('googlecloud'),
      url: 'https://cloud.google.com',
    },
    {
      id: 'railway',
      name: 'Railway',
      description: 'Modern PaaS for deploying apps with databases and services in minutes',
      icon: si('railway'),
      url: 'https://railway.app',
    },
    {
      id: 'fly-io',
      name: 'Fly.io',
      description: 'Deploy apps globally with automatic geo-distribution and low latency',
      icon: si('flydotio'),
      url: 'https://fly.io',
    },
    {
      id: 'render',
      name: 'Render',
      description: 'Unified cloud for web services, databases, and cron jobs with free SSL',
      icon: si('render'),
      url: 'https://render.com',
    },
    {
      id: 'digital-ocean',
      name: 'DigitalOcean',
      description: 'Developer-friendly cloud with droplets, Kubernetes, and app platform',
      icon: si('digitalocean'),
      url: 'https://www.digitalocean.com',
    },
    {
      id: 'cloudflare',
      name: 'Cloudflare Workers',
      description: 'Serverless edge computing with global CDN and zero cold starts',
      icon: si('cloudflare'),
      url: 'https://workers.cloudflare.com',
    },
    {
      id: 'self-hosted',
      name: 'Self-hosted',
      description: 'Full control on your own infrastructure using Docker, VMs, or bare metal',
      icon: si('docker'),
      url: 'https://www.docker.com',
    },
  ],
  storage: [
    {
      id: 's3',
      name: 'Amazon S3',
      description:
        'Industry-standard object storage with versioning, lifecycle policies, and 99.999% durability',
      icon: awsS3Icon,
      url: 'https://aws.amazon.com/s3',
    },
    {
      id: 'azure-blob',
      name: 'Azure Blob Storage',
      description:
        "Microsoft's massively scalable object storage with hot, cool, and archive tiers",
      icon: azureIcon,
      url: 'https://azure.microsoft.com/products/storage/blobs',
    },
    {
      id: 'gcs',
      name: 'Google Cloud Storage',
      description: 'Unified object storage with global edge caching and ML integration',
      icon: si('googlecloud'),
      url: 'https://cloud.google.com/storage',
    },
    {
      id: 'cloudflare-r2',
      name: 'Cloudflare R2',
      description: 'S3-compatible object storage with zero egress fees and global distribution',
      icon: si('cloudflare'),
      url: 'https://www.cloudflare.com/products/r2',
    },
    {
      id: 'backblaze-b2',
      name: 'Backblaze B2',
      description: 'Low-cost S3-compatible storage with free egress to partner CDNs',
      icon: si('backblaze'),
      url: 'https://www.backblaze.com/b2/cloud-storage.html',
    },
    {
      id: 'supabase-storage',
      name: 'Supabase Storage',
      description: 'File storage with row-level security, image transformations, and CDN',
      icon: si('supabase'),
      url: 'https://supabase.com/storage',
    },
    {
      id: 'firebase-storage',
      name: 'Firebase Storage',
      description: "Google's file storage with security rules integration and client SDKs",
      icon: si('firebase'),
      url: 'https://firebase.google.com/products/storage',
    },
    {
      id: 'cloudinary',
      name: 'Cloudinary',
      description: 'End-to-end media platform with AI-powered transformations and optimization',
      icon: si('cloudinary'),
      url: 'https://cloudinary.com',
    },
    {
      id: 'vercel-blob',
      name: 'Vercel Blob',
      description: 'Edge-optimized file storage with simple API and automatic CDN distribution',
      icon: si('vercel'),
      url: 'https://vercel.com/docs/storage/vercel-blob',
    },
    {
      id: 'uploadthing',
      name: 'UploadThing',
      description: 'TypeScript-first file uploads with built-in components and type safety',
      icon: uploadthingIcon,
      url: 'https://uploadthing.com',
    },
    {
      id: 'uploadcare',
      name: 'Uploadcare',
      description: 'File handling platform with adaptive delivery, CDN, and image processing',
      icon: uploadcareIcon,
      url: 'https://uploadcare.com',
    },
    {
      id: 'minio',
      name: 'MinIO',
      description: 'High-performance self-hosted object storage compatible with S3 API',
      icon: si('minio'),
      url: 'https://min.io',
    },
    {
      id: 'wasabi',
      name: 'Wasabi',
      description: 'S3-compatible hot storage with predictable pricing and no egress fees',
      icon: si('wasabi'),
      url: 'https://wasabi.com',
    },
    {
      id: 'bunny-net',
      name: 'Bunny.net Storage',
      description: 'Global edge storage with integrated CDN and real-time replication',
      icon: bunnyNetIcon,
      url: 'https://bunny.net/storage',
    },
    {
      id: 'tigris',
      name: 'Tigris',
      description: 'Globally distributed S3-compatible storage with automatic caching at edge',
      icon: tigrisIcon,
      url: 'https://www.tigrisdata.com',
    },
    {
      id: 'local-filesystem',
      name: 'Local Filesystem',
      description: 'Direct disk storage for simple deployments without external dependencies',
      icon: si('files'),
      url: 'https://nodejs.org/api/fs.html',
    },
  ],
};
