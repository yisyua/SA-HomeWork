const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Account', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    username: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: "UQ__Account__F3DBC57243861BA3"
    },
    password: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    role: {
      type: DataTypes.STRING(10),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'Account',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__Account__3213E83FB99111D7",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "PRIMARY",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "UQ__Account__F3DBC57243861BA3",
        unique: true,
        fields: [
          { name: "username" },
        ]
      },
      {
        name: "username",
        unique: true,
        fields: [
          { name: "username" },
        ]
      },
    ]
  });
};
