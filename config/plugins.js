module.exports = () => ({
  "drag-drop-content-types": {
    enabled: true,
  },
  redirects: {
    enabled: true,
  },
  "react-icons": true,
  transformer: {
    enabled: true,
    config: {
      responseTransforms: {
        removeAttributesKey: true,
        removeDataKey: true,
      },
      requestTransforms: {
        wrapBodyWithDataKey: true,
      },
      contentTypeFilter: {
        mode: "allow",
        uids: {
          "api::article.article": true,
          "api::category.category": {
            GET: true,
          },
        },
      },
      plugins: {
        ids: {
          slugify: true,
        },
      },
    },
  },
});
