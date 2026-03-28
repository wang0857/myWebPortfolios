import { GitContributors } from "/home/runner/work/mtm6407-static-site-wang0857/mtm6407-static-site-wang0857/node_modules/@vuepress/plugin-git/dist/client/components/GitContributors.js";
import { GitChangelog } from "/home/runner/work/mtm6407-static-site-wang0857/mtm6407-static-site-wang0857/node_modules/@vuepress/plugin-git/dist/client/components/GitChangelog.js";

export default {
  enhance: ({ app }) => {
    app.component("GitContributors", GitContributors);
    app.component("GitChangelog", GitChangelog);
  },
};
