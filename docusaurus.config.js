const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'Sequence',
  tagline: '',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'horizon', // Usually your GitHub org/user name.
  projectName: 'sequence-documentation', // Usually your repo name.
  
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          routeBasePath: '/',
          editUrl: 'https://github.com/0xsequence/docs/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.scss'),
        },
      }),
    ],
  ],
  plugins: [
    [require.resolve("@easyops-cn/docusaurus-search-local"), {
      indexDocs: true,
      docsRouteBasePath: '/',
    }],
   'docusaurus-plugin-sass'
  ],

  
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    (
      {
        announcementBar: {
          id: 'announcementBar', // Increment on change
          content: `❤️ If you like Sequence, follow us on <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/0xsequence" >Twitter</a>`,
        },
        navbar: {
          title: 'Sequence',
          logo: {
            alt: 'logo',
            src: 'img/logo.svg',
          },
         
          items: [
            {
              type: 'doc',
              docId: 'introduction',
              position: 'left',
              label: 'Docs',
            },
            {
              href: 'https://github.com/0xsequence',
              label: 'GitHub',
              position: 'right',
            },
          ],
        },
        footer: {
          logo: {
            alt: "Horizon Blockchain Games Logo",
            src: "/img/horizon-light-mode.svg",
            href: "https://horizon.io",
            srcDark: "/img/horizon-dark-mode.svg",
          },
          style: 'dark',
          links: [
            {
              title: 'Docs',
              items: [
                {
                  label: 'Intro',
                  to: '/',
                },
                {
                  label: "Getting Started",
                  to: '/getting-started/using_sequence',
                }
              ],
            },
            {
              title: 'Socials',
              items: [ 
                {
                  label: 'Discord',
                  href: 'https://chat.sequence.build',
                },
                {
                  label: 'Twitter',
                  href: 'https://twitter.com/0xsequence',
                },
                {
                  label: 'GitHub',
                  href: 'https://github.com/0xsequence',
                },
              ],
            },
            {
              title: 'Contact',
              items: [
                {
                  label: 'Email',
                  href: 'mailto: hello@sequence.build',
                },
                {
                  label: 'Support',
                  href: 'https://sequence.build/#contact'
                }
              ],
            }
          ],

          copyright: `Copyright © ${new Date().getFullYear()} Horizon Blockchain Games Inc`,
        },
        prism: {
          theme: lightCodeTheme,
          darkTheme: darkCodeTheme,
          additionalLanguages: ['typescript','go'],
        },
        colorMode: {
          defaultMode: 'dark',
        },
      }
    ),
});