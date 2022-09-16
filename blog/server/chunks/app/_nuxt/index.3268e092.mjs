import { v as vue_cjs_prod, _ as __nuxt_component_0, a as __nuxt_component_1, b as __nuxt_component_2 } from '../server.mjs';
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
      const _component_NuxtLayout = __nuxt_component_0;
      const _component_nuxt_img = __nuxt_component_1;
      const _component_Post = __nuxt_component_2;
      _push(serverRenderer.exports.ssrRenderComponent(_component_NuxtLayout, _attrs, {
        header: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="xs:flex hidden h-96 rounded-lg items-center justify-center backdrop-saturate-150 backdrop-blur overflow-hidden relative"${_scopeId}>`);
            _push2(serverRenderer.exports.ssrRenderComponent(_component_nuxt_img, {
              provider: "cloudinary",
              src: "v1660662530/cld-sample-2.jpg",
              class: "blur-md object-cover absolute w-full",
              format: "webp",
              alt: "\u9996\u9875\u80CC\u666F",
              title: "\u9996\u9875\u80CC\u666F"
            }, null, _parent2, _scopeId));
            _push2(`<div class="absolute h-full"${_scopeId}>`);
            _push2(serverRenderer.exports.ssrRenderComponent(_component_nuxt_img, {
              provider: "cloudinary",
              src: "v1660662530/cld-sample-2.jpg",
              format: "webp",
              class: "h-full",
              alt: "\u9996\u9875\u80CC\u666F",
              title: "\u9996\u9875\u80CC\u666F"
            }, null, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              vue_cjs_prod.createVNode("div", { class: "xs:flex hidden h-96 rounded-lg items-center justify-center backdrop-saturate-150 backdrop-blur overflow-hidden relative" }, [
                vue_cjs_prod.createVNode(_component_nuxt_img, {
                  provider: "cloudinary",
                  src: "v1660662530/cld-sample-2.jpg",
                  class: "blur-md object-cover absolute w-full",
                  format: "webp",
                  alt: "\u9996\u9875\u80CC\u666F",
                  title: "\u9996\u9875\u80CC\u666F"
                }),
                vue_cjs_prod.createVNode("div", { class: "absolute h-full" }, [
                  vue_cjs_prod.createVNode(_component_nuxt_img, {
                    provider: "cloudinary",
                    src: "v1660662530/cld-sample-2.jpg",
                    format: "webp",
                    class: "h-full",
                    alt: "\u9996\u9875\u80CC\u666F",
                    title: "\u9996\u9875\u80CC\u666F"
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
//# sourceMappingURL=index.3268e092.mjs.map