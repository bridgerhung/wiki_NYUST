// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Bridger's Wiki",
  tagline: "課程、學習歷程、翻譯、閱讀心得",
  url: "https://wiki.brid.gq",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/me.webp",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "bridgerhung", // Usually your GitHub org/user name.
  projectName: "wiki_NYUST", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "zh-Hant",
    locales: ["zh-Hant"],
  },
  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],
  

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
        blog: false,
        // Please change this to your repo.
        // Remove this to remove the "edit this page" links.

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
        logo: {
          alt: "My Site Logo",
          src: "img/me.webp",
        },
        items: [
          {
            type: "doc",
            docId: "/category/文學與創新-創意實踐",
            position: "left",
            label: "課程檔案",
          },
          {
            type: "doc",
            docId: "chsc/intro",
            position: "left",
            label: "二階歷程檔案",
          },
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
        ],
      },

      footer: {
        style: "dark",

        copyright: `© ${new Date().getFullYear()} Bridger Hung`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      announcementBar: {
        id: "announcementBar-1", // Increment on change
        content:
          '<b><a href="/category/文學與創新-創意實踐">3/17 文學與創新資料更新</a></b>',
        //content: '<b><a href="/category/周末研討會">3/12 研討會</a></b>',
        isCloseable: true,
      },
      algolia: {
        appId: "5S4I7NT90Z",
        apiKey: "b5ddefaca62917d1e710774fdab76ded",
        indexName: "brid",
        contextualSearch: true,
      },
    }),
};

module.exports = config;
