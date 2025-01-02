import { DataTypes } from "sequelize";
import sequelize from "../configs/database.js";
import Business from "./Business.js";

const Owner = sequelize.define("owner", {
    bussinessowner_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    bo_first_name: {
        type: DataTypes.STRING,
        allowNull: true
    },
    bo_last_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    bo_birth_of_date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    bo_phone_number: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    bo_email: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    npwp: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: true   
    },
    
},
{
    tableName: "bussiness_owner",
    timestamps: true,
},
);



export default Owner;