// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Bridger's Wiki",
  tagline: '這是我的維基',
  url: 'https://wiki.brid.gq',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/me.webp',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'bridgerhung', // Usually your GitHub org/user name.
  projectName: 'wiki_NYUST', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hant',
    locales: ['zh-Hant'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        blog: false,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.

        theme: {
          customCss: require.resolve('./src/css/custom.css'),
          
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
          alt: 'My Site Logo',
          src: 'img/me.webp',
        },
        items: [
          {
            type: 'doc',
            docId: 'all/文學與創新-創意實踐/文學',
            position: 'left',
            label: '課程檔案',
          },
          {
            type: 'doc',
            docId: 'chsc/intro',
            position: 'left',
            label: '彰商返校演講',
          }
          
        ],
      },
      
      footer: {
        style: 'dark',

        copyright: `Copyright © ${new Date().getFullYear()} Bridger`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      
    }),
};

module.exports = config;
