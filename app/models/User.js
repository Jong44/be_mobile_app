import { DataTypes } from "sequelize";
import sequelize from "../configs/database.js";


const User = sequelize.define("investment_user", {
    investment_user_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    birth_of_date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    phone_number: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    npwp: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    min_investment: {
        type: DataTypes.DOUBLE,
        allowNull: false,
    },
    max_investment: {
        type: DataTypes.DOUBLE,
        allowNull: false,
    },
    location: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    industry: {
        type: DataTypes.JSON,
        allowNull: false,
    },
    is_representative: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
},{
    tableName: "investment_users",
    timestamps: true,
});

export default User;