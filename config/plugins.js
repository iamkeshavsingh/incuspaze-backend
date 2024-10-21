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
    },
  },
  // email: {
  //   config: {
  //     provider: "strapi-provider-email-smtp",
  //     providerOptions: {
  //       host: "smtp.gmail.com", //SMTP Host
  //       port: 465, //SMTP Port
  //       secure: true,
  //       username: "my.username@gmail.com",
  //       password: "my.password",
  //       rejectUnauthorized: true,
  //       requireTLS: true,
  //       connectionTimeout: 1,
  //     },
  //   },
  //   settings: {
  //     defaultFrom: "my.username@gmail.com",
  //     defaultReplyTo: "my.username@gmail.com",
  //   },
  // },
});
