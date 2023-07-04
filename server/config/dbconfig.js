module.exports = {
  host: process.env.DATABASE_URI,
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  db: process.env.DATABASE_NAME,
  dialect: "mysql",
};
