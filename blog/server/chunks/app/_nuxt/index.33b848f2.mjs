import { v as vue_cjs_prod, _ as __nuxt_component_0$1, a as __nuxt_component_1 } from '../server.mjs';
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

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const homePosts = vue_cjs_prod.ref([]);
    vue_cjs_prod.ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0$1;
      const _component_Post = __nuxt_component_1;
      _push(serverRenderer.exports.ssrRenderComponent(_component_NuxtLayout, _attrs, {
        header: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="xs:flex hidden h-96 rounded-lg items-center justify-center backdrop-saturate-150 backdrop-blur overflow-hidden relative"${_scopeId}><img src="https://images.unsplash.com/photo-1610462257803-064c1273c681?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2670&amp;q=80" alt="" class="blur-md object-cover absolute"${_scopeId}><div class="absolute h-full"${_scopeId}><img src="https://images.unsplash.com/photo-1610462257803-064c1273c681?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2670&amp;q=80" alt="" class="h-full"${_scopeId}></div></div>`);
          } else {
            return [
              vue_cjs_prod.createVNode("div", { class: "xs:flex hidden h-96 rounded-lg items-center justify-center backdrop-saturate-150 backdrop-blur overflow-hidden relative" }, [
                vue_cjs_prod.createVNode("img", {
                  src: "https://images.unsplash.com/photo-1610462257803-064c1273c681?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
                  alt: "",
                  class: "blur-md object-cover absolute"
                }),
                vue_cjs_prod.createVNode("div", { class: "absolute h-full" }, [
                  vue_cjs_prod.createVNode("img", {
                    src: "https://images.unsplash.com/photo-1610462257803-064c1273c681?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
                    alt: "",
                    class: "h-full"
                  })
                ])
              ])
            ];
          }
        }),
        default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(serverRenderer.exports.ssrRenderComponent(_component_Post, { homePosts: homePosts.value }, null, _parent2, _scopeId));
          } else {
            return [
              vue_cjs_prod.createVNode(_component_Post, { homePosts: homePosts.value }, null, 8, ["homePosts"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index.33b848f2.mjs.map
