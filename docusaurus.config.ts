import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

require("dotenv").config();

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "xspool",
  tagline: "Dinosaurs are cool",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://xspool.com/",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "xperiments", // Usually your GitHub org/user name.
  projectName: "xspool", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  trailingSlash: false, // Optional: Remove trailing slashes
  scripts: [
    {
      src: "/js/cookie.js",
      async: false,
    },
    {
      src: "/js/cookie-consent.js",
      async: false,
    },
  ],
  stylesheets: [
    "https://cdn.jsdelivr.net/gh/orestbida/cookieconsent@3.0.1/dist/cookieconsent.css",
    "https://fonts.googleapis.com/css2?family=Text+Me+One&display=swap",
  ],
  presets: [
    [
      "classic",
      {
        // docs: {
        //   sidebarPath: "./sidebars.ts",
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        // },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: "dark",
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },

    // Replace with your project's social card
    image: "img/xtouch-social-card.png",
    navbar: {
      style: "dark",
      title: "",
      logo: {
        alt: "xtouch",
        src: "img/logo.svg",
      },
      items: [
        {
          href: "/docs/installation",
          label: "Installation",
          position: "left",
        },
        {
          href: "https://github.com/xperiments/xspool-source",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",

      links: [
        {
          title: "Community",
          items: [
            {
              label: "Discord",
              href: "https://discord.gg/Jdvp5CShnt",
            },
            {
              label: "X",
              href: "https://x.com/xps3riments",
            },
            {
              label: "GitHub",
              href: "https://github.com/xperiments/xspool-source",
            },
          ],
        },
        {
          title: "Legal",
          items: [
            {
              label: "Privacy Policy",
              href: "/docs/privacy",
            },
            {
              label: "Terms of Service",
              href: "/docs/terms",
            },
            {
              html: '<button type="button" data-cc="show-preferencesModal">Cookie Preferences</button>',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Pedro Casaubon.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    customFields: {
      privateKey: process.env.PRIVATE_KEY, // Access the key from the environment
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
