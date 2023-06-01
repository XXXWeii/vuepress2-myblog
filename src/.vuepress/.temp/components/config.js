import { defineClientConfig } from "@vuepress/client";
import { hasGlobalComponent } from "D:/项目/BlogSource-hope/node_modules/vuepress-plugin-components/lib/client/shared.js";
import { h } from "vue";

import { useStyleTag } from "D:/项目/BlogSource-hope/node_modules/vuepress-plugin-components/lib/client/vueuse.js";
import FontIcon from "D:/项目/BlogSource-hope/node_modules/vuepress-plugin-components/lib/client/components/FontIcon.js";
import BiliBili from "D:/项目/BlogSource-hope/node_modules/vuepress-plugin-components/lib/client/components/BiliBili.js";
import BackToTop from "D:/项目/BlogSource-hope/node_modules/vuepress-plugin-components/lib/client/components/BackToTop.js";

import "D:/项目/BlogSource-hope/node_modules/vuepress-plugin-components/lib/client/styles/sr-only.scss";

export default defineClientConfig({
  enhance: ({ app }) => {
    if(!hasGlobalComponent("FontIcon")) app.component("FontIcon", FontIcon);
    if(!hasGlobalComponent("BiliBili")) app.component("BiliBili", BiliBili);
    
  },
  setup: () => {
      useStyleTag(`\
  @import url("//at.alicdn.com/t/c/font_2410206_5vb9zlyghj.css");
  `);
  },
  rootComponents: [
    () => h(BackToTop, { threshold: 300 }),
  ],
});
