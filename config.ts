import type { SocialObjects } from "@/lib/types";

export const SITE = {
  website: "https://pulsy.js.org",
  author: "ngdream",
  desc: "Don't let state management stress you out. Let Pulsy take the pulse of your React app and keep things running smoothly.",
  title: "Pulsy",
  ogImage: "og-image.jpg",
  repo: "https://github.com/ngdream/pulsy-docs",
};

export const LOCALE = {
  lang: "en", // html lang code. Set this empty and default will be "en"
  langTag: ["en-EN"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const menu_items: { title: string; href: string }[] = [
  // {
  //   title: "Home",
  //   href: "/",
  // },
];

// Just works with top-level folders and files. For files, don't add extension as it looks for the slug, and not the file name.
export const side_nav_menu_order: string[] = [
  "getting-started",
  "core-concepts",
  "api-references",
  "example",
];

// Don't delete anything. You can use 'true' or 'false'.
// These are global settings
export const docconfig = {
  hide_table_of_contents: false,
  hide_breadcrumbs: false,
  hide_side_navigations: false,
  hide_datetime: false,
  hide_time: true,
  hide_search: false,
  hide_repo_button: false,
  hide_author: true,
};

// Set your social. It will appear in footer. Don't change the `name` value.
export const Socials: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/ngdream/",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },

  {
    name: "Mail",
    href: "mailto:ngdream1953@gmail.com",
    linkTitle: `Send an email to ${SITE.title}`,
    active: true,
  },
];
