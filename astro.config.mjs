import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightObsidian, { obsidianSidebarGroup } from 'starlight-obsidian';

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  integrations: [starlight({
    title: 'My Docs',
    social: {
      github: 'https://github.com/withastro/starlight'
    },
    plugins: [
    // Generate the Obsidian vault pages.
    starlightObsidian({
      vault: 'TEST_PUBLISH'
    })],
    sidebar: [{
      label: 'Guides',
      items: [
      // Each item here is one entry in the navigation menu.
      {
        label: 'Example Guide',
        slug: 'guides/example'
      }]
    },
    // Add the generated sidebar group to the sidebar.
    obsidianSidebarGroup, {
      label: 'Reference',
      autogenerate: {
        directory: 'reference'
      }
    }]
  })],
  output: "server",
  adapter: node({
    mode: "standalone"
  })
});