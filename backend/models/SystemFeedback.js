const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SystemFeedback', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    issue_description: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'SystemFeedback',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__SystemFe__3213E83F9715B461",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
