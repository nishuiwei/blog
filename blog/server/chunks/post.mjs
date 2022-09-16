import Prisma from '@prisma/client';

const { PrismaClient } = Prisma;
const prisma = new PrismaClient();

const getPosts = (params = {}, keyword = "") => {
  return prisma.articles.findMany({
    ...params,
    where: {
      ...params.where,
      OR: [
        {
          content: {
            contains: keyword || "",
            mode: "insensitive"
          }
        },
        {
          title: {
            contains: keyword || "",
            mode: "insensitive"
          }
        }
      ]
    }
  });
};
const getPostById = (postId, params = {}) => {
  return prisma.articles.findUnique({
    ...params,
    where: {
      ...params.where,
      id: postId
    }
  });
};

const typeTransformer = (type) => {
  return {
    id: type.id,
    label: type.label
  };
};

const userTransformer = (user) => {
  return {
    id: user.id,
    username: user.username,
    profilePic: user.profilePic
  };
};

const postTransformer = (post, isDetail = false) => {
  return {
    id: post.id,
    abstract: post.abstract,
    title: post.title,
    content: isDetail ? post.content : void 0,
    mediaFile: post.article_image,
    createdAt: post.createdAt.split(" ")[0],
    type: !!post.type ? typeTransformer(post.type) : null,
    author: !!post.author ? userTransformer(post.author) : null
  };
};

export { getPostById as a, getPosts as g, postTransformer as p };
//# sourceMappingURL=post.mjs.map
