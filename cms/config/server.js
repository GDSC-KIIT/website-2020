module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 9000),
  admin: {
    auth: {
      secret: env("ADMIN_JWT_SECRET", "b6611ecdc5ebf668cc72deb8c8f45eb3"),
    },
  },
});
