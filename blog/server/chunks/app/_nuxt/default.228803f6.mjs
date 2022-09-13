import { v as vue_cjs_prod, u as useStyle, g as useAdv, e as _export_sfc, f as useState } from '../server.mjs';
import { s as serverRenderer } from '../../handlers/renderer.mjs';
import 'unenv/runtime/mock/proxy';
import 'ohmyfetch';
import 'ufo';
import 'hookable';
import 'unctx';
import 'h3';
import 'defu';
import '@bytemd/plugin-highlight-ssr';
import '@bytemd/plugin-gfm';
import '@bytemd/plugin-frontmatter';
import '@bytemd/plugin-medium-zoom';
import '@bytemd/vue-next';
import '../../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'http';
import 'https';
import 'destr';
import 'radix3';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'ohash';
import 'unstorage';
import 'fs';
import 'pathe';
import 'url';
import 'node:url';
import 'ipx';
import 'stream';

const _sfc_main$5 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<svg${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    class: "w-6 h-6"
  }, _attrs))}><path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"></path></svg>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Icon/moon.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$4 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<svg${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    class: "w-6 h-6"
  }, _attrs))}><path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"></path></svg>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Icon/sun.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$3 = /* @__PURE__ */ vue_cjs_prod.defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  props: {
    title: {
      type: String,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const { twitterBorderColor } = useStyle();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({
        class: ["border rounded-md bg-zinc-50 dark:bg-dim-500 overflow-hidden p-5 mb-10", vue_cjs_prod.unref(twitterBorderColor)]
      }, _attrs))}><h5 class="${serverRenderer.exports.ssrRenderClass([vue_cjs_prod.unref(twitterBorderColor), "pb-3 text-xl font-bold text-him-200 dark:text-dim-300 text-center mb-5"])}">${serverRenderer.exports.ssrInterpolate(props.title)}</h5>`);
      serverRenderer.exports.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sidebar/PreviewCard/index.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {
  __name: "Item",
  __ssrInlineRender: true,
  props: {
    categroy: {
      type: String,
      required: true
    },
    count: {
      type: Number,
      default: 0
    }
  },
  setup(__props) {
    const props = __props;
    const { defaultHoverText, defaultTransition, twitterBorderColor } = useStyle();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({
        class: ["flex items-center justify-between p-2 h-100 text-him-100 border-b last:border-b-0 font-semibold text-base dark:text-dim-200", [vue_cjs_prod.unref(defaultHoverText), vue_cjs_prod.unref(twitterBorderColor)]]
      }, _attrs))}><h6 class="${serverRenderer.exports.ssrRenderClass(vue_cjs_prod.unref(defaultTransition))}">${serverRenderer.exports.ssrInterpolate(props.categroy)}</h6><span class="${serverRenderer.exports.ssrRenderClass(vue_cjs_prod.unref(defaultTransition))}">${serverRenderer.exports.ssrInterpolate(props.count)}</span></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sidebar/PreviewCard/Item.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "right",
  __ssrInlineRender: true,
  setup(__props) {
    const categroy_map = vue_cjs_prod.ref([
      {
        categroy: "JavaScript",
        count: 10
      },
      {
        categroy: "Node",
        count: 2
      },
      {
        categroy: "Css",
        count: 20
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_sidebar_preview_card = _sfc_main$3;
      const _component_sidebar_preview_card_item = _sfc_main$2;
      _push(`<aside${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({ class: "text-stone-100" }, _attrs))}>`);
      _push(serverRenderer.exports.ssrRenderComponent(_component_sidebar_preview_card, { title: "\u5173\u4E8E\u6211" }, {
        default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="text-base dark:text-dim-200 text-him-100 text-center"${_scopeId}> \u4E00\u4E2A\u4E13\u6CE8\u4E8E\u6446\u70C24\u5E74\u4E4B\u4E45\u7684\u524D\u7AEF\u5F00\u53D1\uFF0C\u4F1A\u4F7F\u7528 <code${_scopeId}>node</code>\u3001<code${_scopeId}>flutter</code>\u3001<code${_scopeId}>express</code>\u3001<code${_scopeId}>nest</code>\u3001<code${_scopeId}>electron</code>\u3001<code${_scopeId}>Vue</code>\u3001<code${_scopeId}>React</code>\u3001<code${_scopeId}>mongodb</code>\u3001<code${_scopeId}>Nginx</code>\u3001<code${_scopeId}>MySql</code>\uFF0C\u4F46\u66F4\u7CBE\u901A\u5982\u4F55\u6446\uFF0C\u4E00\u76F4\u6446\u70C2\uFF0C\u4E00\u76F4\u723D </div>`);
          } else {
            return [
              vue_cjs_prod.createVNode("div", { class: "text-base dark:text-dim-200 text-him-100 text-center" }, [
                vue_cjs_prod.createTextVNode(" \u4E00\u4E2A\u4E13\u6CE8\u4E8E\u6446\u70C24\u5E74\u4E4B\u4E45\u7684\u524D\u7AEF\u5F00\u53D1\uFF0C\u4F1A\u4F7F\u7528 "),
                vue_cjs_prod.createVNode("code", null, "node"),
                vue_cjs_prod.createTextVNode("\u3001"),
                vue_cjs_prod.createVNode("code", null, "flutter"),
                vue_cjs_prod.createTextVNode("\u3001"),
                vue_cjs_prod.createVNode("code", null, "express"),
                vue_cjs_prod.createTextVNode("\u3001"),
                vue_cjs_prod.createVNode("code", null, "nest"),
                vue_cjs_prod.createTextVNode("\u3001"),
                vue_cjs_prod.createVNode("code", null, "electron"),
                vue_cjs_prod.createTextVNode("\u3001"),
                vue_cjs_prod.createVNode("code", null, "Vue"),
                vue_cjs_prod.createTextVNode("\u3001"),
                vue_cjs_prod.createVNode("code", null, "React"),
                vue_cjs_prod.createTextVNode("\u3001"),
                vue_cjs_prod.createVNode("code", null, "mongodb"),
                vue_cjs_prod.createTextVNode("\u3001"),
                vue_cjs_prod.createVNode("code", null, "Nginx"),
                vue_cjs_prod.createTextVNode("\u3001"),
                vue_cjs_prod.createVNode("code", null, "MySql"),
                vue_cjs_prod.createTextVNode("\uFF0C\u4F46\u66F4\u7CBE\u901A\u5982\u4F55\u6446\uFF0C\u4E00\u76F4\u6446\u70C2\uFF0C\u4E00\u76F4\u723D ")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(serverRenderer.exports.ssrRenderComponent(_component_sidebar_preview_card, { title: "\u6587\u7AE0\u4E3B\u9898" }, {
        default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            serverRenderer.exports.ssrRenderList(categroy_map.value, (categroy) => {
              _push2(serverRenderer.exports.ssrRenderComponent(_component_sidebar_preview_card_item, categroy, null, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (vue_cjs_prod.openBlock(true), vue_cjs_prod.createBlock(vue_cjs_prod.Fragment, null, vue_cjs_prod.renderList(categroy_map.value, (categroy) => {
                return vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock(_component_sidebar_preview_card_item, categroy, null, 16);
              }), 256))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</aside>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sidebar/right.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const useTheme = () => {
  const useDarkMode = () => useState("darkMode", "$iVuEs3qFbA");
  const setDarkMode = (mode) => {
    const darkMode = useDarkMode();
    darkMode.value = mode;
  };
  const getDarkMode = () => {
    setDarkMode(false);
  };
  return {
    getDarkMode,
    useDarkMode,
    setDarkMode
  };
};
const _sfc_main = {
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    const { defaultTransition, defaultHoverText } = useStyle();
    const { useDarkMode, getDarkMode, setDarkMode } = useTheme();
    const { useAdvicon } = useAdv();
    useAdvicon();
    const darkMode = useDarkMode();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_icon_moon = __nuxt_component_0;
      const _component_icon_sun = __nuxt_component_1;
      const _component_sidebar_right = _sfc_main$1;
      _push(`<div${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({
        class: [{ dark: vue_cjs_prod.unref(darkMode) }, vue_cjs_prod.unref(defaultTransition)]
      }, _attrs))}><div class="bg-white dark:bg-dim-100 font-sans select-none"><div class="grid grid-cols-12 mx-auto sm:px-6 lg:gap-8 gap-6 lg:max-w-7xl lg:px-6 md:px-4 px-2 xs:px-8"><header class="text-center text-him-100 dark:text-dim-200 text-base font-extralight pb-4 border-b col-span-12 border-him-300 dark:border-dim-400 sticky top-0 flex justify-between items-center backdrop-saturate-150 backdrop-blur z-30 pt-2"><div class="hidden sm:flex"><i class="${serverRenderer.exports.ssrRenderClass([[vue_cjs_prod.unref(defaultTransition), vue_cjs_prod.unref(defaultHoverText)], "cursor-pointer"])}">`);
      if (!vue_cjs_prod.unref(darkMode)) {
        _push(serverRenderer.exports.ssrRenderComponent(_component_icon_moon, { title: "\u6697\u591C\u6A21\u5F0F" }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (vue_cjs_prod.unref(darkMode)) {
        _push(serverRenderer.exports.ssrRenderComponent(_component_icon_sun, { title: "\u660E\u4EAE\u6A21\u5F0F" }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</i><i class="${serverRenderer.exports.ssrRenderClass([[vue_cjs_prod.unref(defaultTransition), vue_cjs_prod.unref(defaultHoverText)], "cursor-pointer ml-3"])}"></i></div><div class="text-center text-4xl font-bold">hi - blog</div><div class="${serverRenderer.exports.ssrRenderClass([vue_cjs_prod.unref(defaultHoverText), vue_cjs_prod.unref(defaultTransition)])}"></div></header><section class="col-span-12 rounded-md lg:mb-0 mb-8">`);
      serverRenderer.exports.ssrRenderSlot(_ctx.$slots, "header", {}, null, _push, _parent);
      _push(`</section><div class="col-span-12 sm:col-span-8 lg:col-span-9">`);
      serverRenderer.exports.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div><div class="${serverRenderer.exports.ssrRenderClass([vue_cjs_prod.unref(defaultTransition), "hidden sm:col-span-4 sm:block lg:col-span-3 w-full"])}">`);
      _push(serverRenderer.exports.ssrRenderComponent(_component_sidebar_right, null, null, _parent));
      _push(`</div><div class="text-center text-him-100 dark:text-dim-200 text-base font-extralight pt-4 border-t col-span-12 border-him-300 dark:border-dim-400"> \xA9 2022 hi - blog <br>\u4EACICP\u59072022015573\u53F7-1 </div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=default.228803f6.mjs.map
