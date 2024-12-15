const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CourseEvaluation', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    course_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Course',
        key: 'id'
      }
    },
    semester: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    evaluation_content: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    grading_method: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    additional_notes: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    submission_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    submitter_name: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'CourseEvaluation',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__CourseEv__3213E83FE79AFE2E",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
