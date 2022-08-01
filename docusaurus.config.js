// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/vsLight");
const darkCodeTheme = require("prism-react-renderer/themes/vsDark");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Server Manager",
  tagline:
    "Imagine a simple customizable multipurpose bot",
  url: "https://servermanagerbot.ml",
  baseUrl: "/",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  trailingSlash: false,
  deploymentBranch:"main",
  organizationName: "Server-Manager-Dev-Team", // Usually your GitHub org/user name.
  projectName: "Server-Manager-Bot.github.io", // Usually your repo name.
  plugins: ["docusaurus-plugin-sass"],
  presets: [ 
    [
      "classic",
      {
        docs: {
          editUrl:
            "https://github.com/Server-Manager-Dev-Team/Server-Manager-Bot.github.io/tree/main",
          routeBasePath: "/",
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        theme: {
          customCss: require.resolve("./src/scss/main.scss"),
        },
      },
    ],
  ],

  themeConfig: {
    docs: {
      sidebar: {
        autoCollapseCategories: true,
      },
    },
    colorMode: {
      defaultMode: "dark",
      disableSwitch: true,
    },
    navbar: {
      title: "Server Manager",
      hideOnScroll: true,
      items: [
        {
          href: 'https://discord.com/api/oauth2/authorize?client_id=999132132754600016&permissions=1497736146166&scope=bot%20applications.commands&redirect_uri=https://servermanagerbot.ml/docs&response_type=code',
          position: 'right',
          label: 'Invite',
        },
        {
          href: 'https://discord.gg/6bCKvP24kb',
          position: 'right',
          label: 'Support',
        },
        {
          href: 'https://server-manager.instatus.com',
          position: 'right',
          label: 'Status',
        },
      ],
    },
    footer: {
      style: "dark",
      copyright: `Copyright © ${new Date().getFullYear()} Server Manager Development, All rights reserved.`,
    },
    prism: {
      defaultLanguage: "python",
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
};

module.exports = config;
