const { Sequelize } = require('sequelize');
const UserModel = require('./user');
const ProjectModel = require('./project');

const sequelize = new Sequelize('pentestdb', 'user', 'password', {
  dialect: 'sqlite',
  storage: './pentestdb.sqlite',
  logging: false,
});

const User = UserModel(sequelize);
const Project = ProjectModel(sequelize);

User.hasMany(Project);
Project.belongsTo(User);

module.exports = { sequelize, User, Project };