module.exports = {
  apps: [
    {
      name: "incuspaze-backend",
      script: "npm",
      args: "run develop",
      cwd: __dirname,
      watch: false,
      env: {
        NODE_ENV: "development",
      },
      env_production: {
        NODE_ENV: "production",
      },
    },
  ],
};
