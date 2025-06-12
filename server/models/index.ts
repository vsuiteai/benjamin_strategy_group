import "dotenv/config";

import { Sequelize } from "sequelize";

// Import models
import { AdminModel } from "./admins";
import { ClientModel } from "./clients";
import { ClientFilesUploadModel } from "./client_files_upload";

// Get config
const MYSQL = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
};

// console.log(MYSQL);

// Initialize Sequelize
export const sequelize = new Sequelize(
  MYSQL.database!,
  MYSQL.user!,
  MYSQL.password!,
  {
    host: MYSQL.host!,
    dialect: "mysql",
    logging: false,
  }
);

// Define models
export const Admins = AdminModel(sequelize);
export const Clients = ClientModel(sequelize);
export const ClientFiles = ClientFilesUploadModel(sequelize);

// Define associations (example)
// Admins.hasMany(Clients, { foreignKey: "userId" });
// Clients.belongsTo(Admins, { foreignKey: "userId" });

ClientFiles.belongsTo(Clients, {
  foreignKey: "file_owner",
  as: "owner",
});

export default {
  sequelize,
  Admins,
  Clients,
};
