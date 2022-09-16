import { v as vue_cjs_prod, _ as __nuxt_component_0, c as _sfc_main$4, d as _sfc_main$3, e as __nuxt_component_3 } from '../server.mjs';
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
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    const post = vue_cjs_prod.ref({});
    const loading = vue_cjs_prod.ref(true);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0;
      const _component_header_detail = _sfc_main$4;
      const _component_post_details = _sfc_main$3;
      const _component_comments = __nuxt_component_3;
      _push(serverRenderer.exports.ssrRenderComponent(_component_NuxtLayout, _attrs, vue_cjs_prod.createSlots({
        default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (!loading.value) {
              _push2(`<div${_scopeId}>`);
              _push2(serverRenderer.exports.ssrRenderComponent(_component_post_details, { post: post.value }, null, _parent2, _scopeId));
              _push2(serverRenderer.exports.ssrRenderComponent(_component_comments, null, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<div${_scopeId}>\u52A0\u8F7D\u4E2D\u3002\u3002\u3002</div>`);
            }
          } else {
            return [
              !loading.value ? (vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock("div", { key: 0 }, [
                vue_cjs_prod.createVNode(_component_post_details, { post: post.value }, null, 8, ["post"]),
                vue_cjs_prod.createVNode(_component_comments)
              ])) : (vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock("div", { key: 1 }, "\u52A0\u8F7D\u4E2D\u3002\u3002\u3002"))
            ];
          }
        }),
        _: 2
      }, [
        !loading.value ? {
          name: "header",
          fn: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(serverRenderer.exports.ssrRenderComponent(_component_header_detail, {
                "media-file": post.value.mediaFile,
                author: post.value.author,
                title: post.value.title,
                createdAt: post.value.createdAt,
                type: post.value.type
              }, null, _parent2, _scopeId));
            } else {
              return [
                vue_cjs_prod.createVNode(_component_header_detail, {
                  "media-file": post.value.mediaFile,
                  author: post.value.author,
                  title: post.value.title,
                  createdAt: post.value.createdAt,
                  type: post.value.type
                }, null, 8, ["media-file", "author", "title", "createdAt", "type"])
              ];
            }
          })
        } : void 0
      ]), _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/post/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_id_.d63a9829.mjs.map
