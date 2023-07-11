// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'CA 4 Wiki',
  tagline: '💜 Ein Jahr Craftattack 💜',
  favicon: 'img/logo.png',

  // Set the production url of your site here
  url: 'https://wiki.craftattack.tk',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',
  
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'craftattack', // Usually your GitHub org/user name.
  projectName: 'craftattack', // Usually your repo name.

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
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/xdalul/ca-wiki/tree/master/',
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
        title: 'CA 4 Wiki',
        logo: {
          alt: 'CA Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'zum Wiki',
          },
          {to: '/blog', label: 'Blogs & Changes', position: 'left'},
          {
            href: 'https://github.com/xdalul/ca-wiki',
            label: 'GitHub',
            position: 'right',
          },
          {
            href: 'https://craftattack.statuspage.io/',
            label: 'Statusseite',
            position: 'right',
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
                label: 'Statussseite',
                href: 'https://craftattack.statuspage.io/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Craftattack. Built with Docusaurus.`,
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
          '🚨 Achtung! Dieses Wiki ist noch in der Alpha, bei Fehlern usw. bitte im <a target="_blank" rel="noopener noreferrer" href="https://discord.gg/TMNUqyKz5T">Discord</a> melden. 🚨',
        backgroundColor: '#eb4242',
        textColor: '#ffffff',
        isCloseable: true,
      },  
    }),
  };

module.exports = config;