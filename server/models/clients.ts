import { Sequelize, DataTypes } from "sequelize";

export const ClientModel = (sequelize: Sequelize) => {
  return sequelize.define(
    "Client",
    {
      client_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      client_uid: {
        type: DataTypes.CHAR(36),
        allowNull: false,
        unique: true,
      },
      client_company_name: {
        type: DataTypes.STRING(255),
        allowNull: false,
        unique: true,
      },
      client_contact_fullname: {
        type: DataTypes.STRING(255),
        allowNull: false,
        unique: true,
      },
      client_contact_phone: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      client_contact_role: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      client_contact_work_email: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      client_created_at: {
        type: DataTypes.DATE,
      },
      client_updated_at: {
        type: DataTypes.DATE,
      },
    },
    {
      tableName: "clients",
      timestamps: true,
      createdAt: "client_created_at",
      updatedAt: "client_updated_at",
    }
  );
};
