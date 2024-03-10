// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const {themes} = require('prism-react-renderer');
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;


/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'C-CA IV Wiki',
  tagline: 'Community Cratattack 4',
  favicon: 'img/logo.png',

  // Set the production url of your site here
  url: 'https://wiki.craftattack.tk',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'xdalul', // Usually your GitHub org/user name.
  projectName: 'community-craftattack', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'de',
    locales: ['de'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
              'https://github.com/xdalul/ca-wiki/tree/master/',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
              'https://github.com/xdalul/ca-wiki/tree/master/',
          blogSidebarCount: 15,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
      ({
        // Replace with your project's social card
        image: 'img/banner.png',
        navbar: {
          title: 'C-CA IV Wiki',
          logo: {
            alt: 'CA Logo',
            src: 'img/logo.png',
          },
          items: [
            {
              type: 'docSidebar',
              sidebarId: 'tutorialSidebar',
              position: 'left',
              label: 'Wiki',
            },
            {to: '/blog', label: 'Blogs', position: 'left'},
            {to: '/community-guidelines', label: 'CA 4 Richtlinien', position: 'left'},
            {to: '/rp-gesetze', label: 'RP Gesetze', position: 'left'},
            {
              href: 'https://craftattack.instatus.com/',
              label: 'Statusseite',
              position: 'right',
            },
            {
              href: 'https://github.com/xdalul/ca-wiki',
              position: 'right',
              className: 'header-github-link',
              'aria-label': 'GitHub repository',
            },
          ],
        },
        footer: {
          style: 'dark',
          links: [
            {
              title: 'Docs',
              items: [
                {
                  label: 'Wiki',
                  to: '/docs/intro',
                },
              ],
            },
            {
              title: 'Community',
              items: [
                {
                  label: 'Discord',
                  href: 'https://discord.gg/TMNUqyKz5T',
                }
              ],
            },
            {
              title: '& Mehr',
              items: [
                {
                  label: 'Blogs & Changes',
                  to: '/blog',
                },
                {
                  label: 'GitHub',
                  href: 'https://github.com/xdalul/ca-wiki',
                },
                {
                  label: 'Statusseite',
                  href: 'https://craftattack.statuspage.io/',
                },
              ],
            },
          ],
          copyright: `Copyright © 2022-2024 Community Craftattack. Built with Docusaurus.`,
        },
        prism: {
          theme: lightCodeTheme,
          darkTheme: darkCodeTheme,
        },
        algolia: {
          // The application ID provided by Algolia
          appId: 'K6KQWQITJ3',

          // Public API key: it is safe to commit it
          apiKey: '13e374665649da08fb519392ecac2b61',

          indexName: 'craftattack',

          // Optional: see doc section below
          contextualSearch: true,

          // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
          replaceSearchResultPathname: {
            from: '/docs/', // or as RegExp: /\/docs\//
            to: '/',
          },

          // Optional: Algolia search parameters
          searchParameters: {},

          // Optional: path for search page that enabled by default (`false` to disable it)
          searchPagePath: 'search',

          //... other Algolia params
        },
        announcementBar: {
          id: 'achtung',
          content:
              '🚨 Du befindest dich auf der Development Seite des Wiki\'s 🚨',
          backgroundColor: '#eb4242',
          textColor: '#ffffff',
          isCloseable: true,
        },
      }),
};

module.exports = config;