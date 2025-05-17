const { DataTypes } = require('sequelize');
module.exports = (sequelize) =>
  sequelize.define('Project', {
    name: { type: DataTypes.STRING, allowNull: false },
    target: { type: DataTypes.STRING, allowNull: false },
    scanResults: { type: DataTypes.JSON },
    status: { type: DataTypes.STRING, defaultValue: 'pending' }
  });