// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";
import { SpeedInsights } from "@vercel/speed-insights/next";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Bridger's Wiki",
  tagline: "課程、翻譯、閱讀心得",
  favicon: "img/me.webp",
  future: {
    experimental_faster: true,
  },

  // Set the production url of your site here
  url: "https://wiki.brid.pw",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "bridgerhung", // Usually your GitHub org/user name.
  projectName: "wiki_NYUST", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "zh-Hant",
    locales: ["zh-Hant"],
  },
  markdown: {
    mermaid: true,
  },
  themes: ["@docusaurus/theme-mermaid"],

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        blog: {
          // routeBasePath: '/',
          path: "blog",
          postsPerPage: "ALL",
          feedOptions: {
            type: "all",
            copyright: `Copyright © ${new Date().getFullYear()} Bridger`,
          },
          blogSidebarCount: "ALL",
          blogSidebarTitle: "日記",
        },

        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        gtag: {
          trackingID: "G-7P0XZ2SGPX",
          anonymizeIP: false,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */

    ({
      navbar: {
        title: `Bridger's wiki `,
        hideOnScroll: true,
        logo: {
          alt: "My Site Logo",
          src: "img/me.webp",
        },
        items: [
          {
            type: "doc",
            docId: "/category/書籍介紹",
            position: "left",
            label: "書籍介紹",
          },
          {
            type: "doc",
            docId: "/category/歐美歌曲翻譯",
            position: "left",
            label: "歐美歌曲翻譯",
          },
          {
            type: "doc",
            docId: "translate/love",
            position: "left",
            label: "最喜愛的歌曲",
          },
          {
            type: "doc",
            docId: "/category/天長地久散文集",
            position: "left",
            label: "天長地久",
          },

          {
            type: "doc",
            docId: "/category/真誠相待",
            position: "left",
            label: "真誠相待",
          },

          // { to: "blog", label: "舊版-天長地久", position: "left" }, // or position: 'right'
        ],
      },

      footer: {
        style: "dark",
        links: [
          {
            title: "其他平台",
            items: [
              // {
              //   label: "Youtube",
              //   to: "https://www.youtube.com/@bridger.h",
              // },
              // {
              //   label: "odysee",
              //   to: "https://odysee.com/@BridgerH:8",
              // },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} Bridger Hung`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      /*
      announcementBar: {
        id: "announcementBar-1", // Increment on change
        content:
          '<b><a href="/category/文學與創新-創意實踐">3/17 文學與創新資料更新</a></b>',
        //content: '<b><a href="/category/周末研討會">3/12 研討會</a></b>',
        isCloseable: true,
      },
      */
      algolia: {
        appId: "7GZON05YVA",
        apiKey: "3b7bd88438fa84cbd7e36dd76ee50d97",
        indexName: "wiki",
        contextualSearch: true,
      },
    }),
};

export default config;
