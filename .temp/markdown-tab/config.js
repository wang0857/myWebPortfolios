import { CodeTabs } from "/home/runner/work/mtm6407-static-site-wang0857/mtm6407-static-site-wang0857/node_modules/@vuepress/plugin-markdown-tab/dist/client/components/CodeTabs.js";
import { Tabs } from "/home/runner/work/mtm6407-static-site-wang0857/mtm6407-static-site-wang0857/node_modules/@vuepress/plugin-markdown-tab/dist/client/components/Tabs.js";

export default {
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("Tabs", Tabs);
  },
};
