module.exports = {
  env: {
    DATABASE_URI: "mongodb+srv://raiyanpharon:_Password123@cluster0.pdw8e.mongodb.net/myStoreAppV2?retryWrites=true&w=majority",
    DOMAIN_NAME: "http://localhost:3000"
  },
  reactStrictMode: true,
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
}
