module.exports = {
  apps : [
    {
      name: "dev",
      script: "npm",
      args: "run dev"
    },
    {
      name: "prod",
      script: "npm",
      args: "run start"
    }
  ]
}