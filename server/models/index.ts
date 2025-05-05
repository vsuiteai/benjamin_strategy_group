import { Sequelize } from "sequelize";
import { useRuntimeConfig } from "#imports";

// Import models
import { AdminModel } from "./admins";
import { ClientModel } from "./clients";
import { ClientFilesUploadModel } from "./client_files_upload";

// Get config
const config = useRuntimeConfig();

// console.log(config.mysql);

// Initialize Sequelize
export const sequelize = new Sequelize(
  config.mysql.database,
  config.mysql.user,
  config.mysql.password,
  {
    host: config.mysql.host,
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
  foreignKey: "client_id",
  as: "owner",
});

export default {
  sequelize,
  Admins,
  Clients,
};
