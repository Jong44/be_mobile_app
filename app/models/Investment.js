import sequelize from "../configs/database.js";
import { DataTypes } from "sequelize";

const Investment = sequelize.define("investment", {
    investment_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    investment_user_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    bussinessowner_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    business_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    investment_name: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    amount: {
        type: DataTypes.DOUBLE,
        allowNull: false,
    },
    contract: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
    },
},{
    tableName: "investment",
    timestamps: true,
});

export default Investment;

