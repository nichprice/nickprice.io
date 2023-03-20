import { defineDocumentType, makeSource } from "contentlayer/source-files";

/** @type {import('contentlayer/source-files').ComputedFields} */
const computedFields = {
  url: {
    type: "string",
    resolve: (post) => `/posts/${post._raw.flattenedPath}`,
  },
  slug: {
    type: "string",
    resolve: (post) => post._raw.flattenedPath,
  },
};

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `**/*.md`,
  fields: {
    title: {
      type: "string",
      description: "The title of the post",
      required: true,
    },
    date: {
      type: "date",
      description: "The date of the post",
      required: true,
    },
  },
  // computedFields: {
  //   url: {
  //     type: "string",
  //     resolve: (post) => `/posts/${post._raw.flattenedPath}`,
  //   },
  //   slug: {
  //     type: "string",
  //     resolve: (post) => post._raw.flattenedPath,
  //   }
  // },
  computedFields,
}));

export default makeSource({
  contentDirPath: "posts",
  documentTypes: [Post],
});
