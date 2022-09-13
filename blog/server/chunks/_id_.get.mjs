import { defineEventHandler } from 'h3';
import { a as getPostById, p as postTransformer } from './post.mjs';
import '@prisma/client';

const _id__get = defineEventHandler(async (event) => {
  const { id } = event.context.params;
  const post = await getPostById(id, {
    include: {
      author: true,
      type: true
    }
  });
  return {
    data: postTransformer(post, true)
  };
});

export { _id__get as default };
//# sourceMappingURL=_id_.get.mjs.map
