module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'dee6689d8e3c5a4be65b133572f4839e'),
  },
});
