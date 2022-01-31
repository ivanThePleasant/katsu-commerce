module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '60680fb79148c973f7b424aa729f543d'),
  },
});
