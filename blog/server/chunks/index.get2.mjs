import { defineEventHandler } from 'h3';

const index_get = defineEventHandler(async (event) => {
  return {
    data: "hello world"
  };
});

export { index_get as default };
//# sourceMappingURL=index.get2.mjs.map
