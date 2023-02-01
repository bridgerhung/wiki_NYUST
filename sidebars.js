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
      label: '歐美音樂音樂翻譯',
      link: {
        type: 'generated-index',
        title: '歐美音樂音樂翻譯',
        description:
          "興趣使然，已經翻譯歐美音樂6年了，累積了上百首作品，緩慢釋出",
    },
      items: [
        {
          type: 'autogenerated',
          dirName: 'translate',
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
        'chsc/官方資料'
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