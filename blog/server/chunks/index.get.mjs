import { defineEventHandler } from 'h3';
import { g as getPosts, p as postTransformer } from './post.mjs';
import '@prisma/client';

const index_get = defineEventHandler(async (event) => {
  const posts = await getPosts({
    include: {
      author: true,
      type: true
    },
    orderBy: [
      {
        createdAt: "desc"
      }
    ]
  });
  return {
    data: posts.map(postTransformer)
  };
});

export { index_get as default };
//# sourceMappingURL=index.get.mjs.map
