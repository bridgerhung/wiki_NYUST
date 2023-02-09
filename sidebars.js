/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  school: [
  {
      type: 'category',
      label: '課程資料',
      link: {
        type: 'generated-index',
        title: '課程資料',
        description:
          "這是一些課程資料，正在更新中",
    },
    items: [
    {
      type: 'autogenerated',
      dirName: 'class',
      },
    ],
  },
  ],


  translate: [
    {
      type: 'category',
      label: '歐美歌曲翻譯',
      collapsible: true,
      collapsed: true,
      link: {
        type: 'generated-index',
        title: '歐美音樂音樂翻譯',
        description:
          "興趣使然，已經翻譯歐美音樂6年了，累積了上百首作品，全部上架計畫進度100%",
    },
      items: [
        {
          type: 'autogenerated',
          dirName: 'translate',
        },
      ],
    },
  ],

  lovetranslate: [
    {
      type: 'category',
      label: '最近翻譯',
      collapsible: true,
      collapsed: true,
      link: {
        type: 'generated-index',
        title: '最近一年的翻譯',
        description:
          "最近的翻譯",
      },
      items: [
        'translate/Ben Platt/the joke',
        'translate/Taylor Swift/Evermore/its time to go',
        'translate/Ben Platt/vienna',
        'translate/Ben Platt/rain',
        'translate/Ben Platt/Ease My Mind',
        'translate/Ben Platt/Grow as we go',
        'translate/Ben Platt/Honest Man',
        'translate/Ben Platt/Older',
        'translate/Ben Platt/Run Away',
        'translate/Ben Platt/So Will I',
        'translate/Ben Platt/Waving Through a Window',
        'translate/Hamilton/It’s Quiet Uptown',
        'translate/Hamilton/Dear Theodosia'

      ],
    },
    {
      type: 'category',
      label: '最喜愛的歌曲',
      collapsible: true,
      collapsed: true,
      link: {
        type: 'doc',
        id: 'translate/love',
      },
      items: [
        'translate/Taylor Swift/1989/New Romantics',
        'translate/Taylor Swift/Red/All Too Well',
        'translate/Taylor Swift/1989/Out of the woods',
        'translate/Taylor Swift/Lover/Cornelia Street',
        'translate/Adele/Someone Like you',
        'translate/Ben Platt/Ease My Mind',
        'translate/Taylor Swift/Fearless/Fifteen',
        'translate/Taylor Swift/Lover/Death by thousand cuts',
        'translate/Ben Platt/Grow as we go',
        'translate/Ben Platt/Honest Man',
        {
          type: 'link',
          label: 'Getaway Car - Taylor Swift',
          href: 'https://www.youtube.com/watch?v=EW1ncv-jZNk', 
        },
      ],
    },
  ],

  book: [
    {
      type: 'category',
      label: '書籍介紹',
      link: {
        type: 'generated-index',
        title: '書籍介紹',
        description:
          "這是一些書籍心得及介紹",
      },
      items: [
        {
          type: 'autogenerated',
          dirName: 'book',
        },
      ],
    },
  ],
  chsc: [
    {
      type: 'category',
      label: '二階歷程檔案',
      link: {
        type: 'doc',
        id: 'chsc/intro',
      },
      collapsed: true,
      items: [
        'chsc/sum',
        'chsc/life',
        'chsc/epfo',
        'chsc/備審資料示範',
        'chsc/官方資料',
        'chsc/指定項目甄試筆記'
      ],
    },
    {
      type: 'link',
      label: '附錄-成功的反思', // The link label
      href: '/book/suc', // The internal path
    },
    {
      type: 'link',
      label: '附錄-大學分組作業怎麼辦', // The link label
      href: '/book/inspir', // The internal path
    },
  ],
};

module.exports = sidebars;
