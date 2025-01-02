import { DataTypes } from "sequelize";
import sequelize from "../configs/database.js";
import Owner from "./Owner.js";

const Business = sequelize.define("business", {
    business_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    business_owner_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    business_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    business_description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    nib: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    industry: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    business_logo: {
        type: DataTypes.BLOB,
        allowNull: true,
    },
    video_pitch_deck: {
        type: DataTypes.BLOB,
        allowNull: true,
    },
    business_proposal: {
        type: DataTypes.BLOB,
        allowNull: true,
    },
    funding_propose:{
        type: DataTypes.STRING,
        allowNull: true,
    },
    funding_needed: {
        type: DataTypes.DOUBLE,
        allowNull: true,
    },
    funding_current: {
        type: DataTypes.DOUBLE,
        allowNull: true,
    },
    invest_status: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
},{
    tableName: "business",
    timestamps: true,
});

Business.belongsTo(Owner, {
    foreignKey: 'business_owner_id',
    as: 'owner',
});




export default Business;
