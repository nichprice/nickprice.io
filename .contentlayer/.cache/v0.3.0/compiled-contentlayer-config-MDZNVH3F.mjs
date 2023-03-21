// contentlayer.config.js
import { defineDocumentType, makeSource } from "contentlayer/source-files";
var computedFields = {
  // url: {
  //   type: "string",
  //   resolve: (doc) => `blog/${doc._raw.flattenedPath}`,
  // },
  slug: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath
  }
};
var Blog = defineDocumentType(() => ({
  name: "Blog",
  filePathPattern: `**/*.md`,
  fields: {
    title: {
      type: "string",
      description: "The title of the post",
      required: true
    },
    date: {
      type: "date",
      description: "The date of the post",
      required: true
    }
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
  computedFields
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "content",
  documentTypes: [Blog]
});
export {
  Blog,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-MDZNVH3F.mjs.map
