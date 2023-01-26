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
      label: '文學與創新，創意實踐',
      link: {
        type: 'doc',
      },
      collapsed: false,
      items: [
        'all/文學與創新-創意實踐/files',
        'all/文學與創新-創意實踐/文學'
      ],
    },
    'all/dc'
  ],
  chsc: [
    {
      type: 'category',
      label: 'chsc',
      link: {
        type: 'doc',
        id: 'chsc/intro',
      },
      collapsed: false,
      items: [
        'chsc/sum',
        'chsc/life',
        'chsc/官方資料',
        'chsc/epfo',
        'chsc/官方資料'
      ],
    },
  ],
};

module.exports = sidebars;