import { defineEventHandler, useQuery } from 'h3';
import { g as getPosts, p as postTransformer } from './post.mjs';
import '@prisma/client';

const index_get = defineEventHandler(async (event) => {
  const query = useQuery(event);
  const keyword = query == null ? void 0 : query.keyword;
  const posts = await getPosts(
    {
      include: {
        author: true,
        type: true
      },
      orderBy: [
        {
          createdAt: "desc"
        }
      ]
    },
    keyword
  );
  return {
    data: posts.map(postTransformer)
  };
});

export { index_get as default };
//# sourceMappingURL=index.get.mjs.map
