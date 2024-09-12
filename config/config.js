import dotenv from 'dotenv';

dotenv.config();

module.exports = {
  dialect: process.env.POSTGRES_DIALECT,
  host: process.env.POSTGRES_HOST,
  database: process.env.POSTGRES_DB,
  password: String(process.env.POSTGRES_PASSWORD),
  username: process.env.POSTGRES_USER,
  port: Number(process.env.POSTGRES_PORT),
};
