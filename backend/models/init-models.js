var DataTypes = require("sequelize").DataTypes;
var _Account = require("./Account");
var _Course = require("./Course");
var _CourseEvaluation = require("./CourseEvaluation");
var _SystemFeedback = require("./SystemFeedback");

function initModels(sequelize) {
  var Account = _Account(sequelize, DataTypes);
  var Course = _Course(sequelize, DataTypes);
  var CourseEvaluation = _CourseEvaluation(sequelize, DataTypes);
  var SystemFeedback = _SystemFeedback(sequelize, DataTypes);

  CourseEvaluation.belongsTo(Course, { as: "course", foreignKey: "course_id"});
  Course.hasMany(CourseEvaluation, { as: "CourseEvaluations", foreignKey: "course_id"});

  return {
    Account,
    Course,
    CourseEvaluation,
    SystemFeedback,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
