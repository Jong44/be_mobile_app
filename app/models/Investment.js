import sequelize from "../configs/database.js";
import { DataTypes } from "sequelize";
import Business from "./Business.js";
import Owner from "./Owner.js";

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

Business.hasMany(Investment, {
    foreignKey: "business_id",
    as: "investments",
});

Investment.belongsTo(Business, {
    foreignKey: "business_id",
    as: "business",
});

Owner.hasMany(Investment, {
    foreignKey: "bussinessowner_id",
    as: "investments",
});

Investment.belongsTo(Owner, {
    foreignKey: "bussinessowner_id",
    as: "owner",
});



export default Investment;

