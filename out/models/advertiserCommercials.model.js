"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.AdvertiserCommercials=void 0;const sequelize_1=require("sequelize"),database_1=require("../database");exports.AdvertiserCommercials=database_1.sequelize.define("advertiserCommercials",{id:{type:sequelize_1.DataTypes.INTEGER,autoIncrement:!0,primaryKey:!0,allowNull:!1},name:{type:sequelize_1.DataTypes.STRING(100),allowNull:!1},color:{type:sequelize_1.DataTypes.STRING(100),allowNull:!1},userId:{type:sequelize_1.DataTypes.INTEGER,allowNull:!1,references:{model:"users",key:"id"}},createdAt:{allowNull:!1,type:sequelize_1.DataTypes.DATE},updatedAt:{allowNull:!1,type:sequelize_1.DataTypes.DATE},deletedAt:{allowNull:!0,type:sequelize_1.DataTypes.DATE}},{tableName:"advertiserCommercials",paranoid:!0});