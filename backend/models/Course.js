const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Course', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    semester: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    education_system: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    course_type: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    session: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    department: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    grade: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    course_code: {
      type: DataTypes.STRING(20),
      allowNull: false,
      unique: "course_code"
    },
    instructor_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    classroom: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    capacity: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Course',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "course_code",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "course_code" },
        ]
      },
    ]
  });
};
