import React from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { courseEvaluation } from "./evaluation";

export default function Result() {

  const navigate = useNavigate();
  const location = useLocation();
  const filters = location.state || {};

  // 篩選符合條件的課程
  const matchedCourses = courseEvaluation.filter((course) => {
    return (
      (!filters.department || course.department.includes(filters.department)) &&
      (!filters.courseName || course.course_name.includes(filters.courseName)) &&
      (!filters.teacher || course.course_teacher.includes(filters.teacher))
    );
  });

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      <header className="bg-[rgb(46,46,46)] h-[100px] flex items-center justify-between px-20">
        <h1 className="text-white text-3xl font-semibold">課程評價結果</h1>
        <button className="bg-[rgb(46,46,46)] border-2 border-white text-white font-medium text-sm px-6 py-2 rounded-full hover:bg-white hover:text-gray-800" onClick={() => navigate("/look")}>
                  回到查詢
                </button>
      </header>

      {/* Main Content */}
      <main className="py-20 px-10">
        {matchedCourses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {matchedCourses.map((course, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <h2 className="text-lg font-semibold text-gray-800 mb-2">
                  {course.course_name}
                </h2>
                <p className="text-sm text-gray-600">
                  <strong>系所：</strong>
                  {course.department}
                </p>
                <p className="text-sm text-gray-600">
                  <strong>教師：</strong>
                  {course.course_teacher}
                </p>
                <p className="text-sm text-gray-600">
                  <strong>學期：</strong>
                  {course.semester}
                </p>
                <p className="text-sm text-gray-600">
                  <strong>日期：</strong>
                  {course.day}
                </p>
                <p className="text-sm text-gray-600">
                  <strong>出席：</strong>
                  {course.jojo}
                </p>
                <p className="text-sm text-gray-600">
                  <strong>考試：</strong>
                  {course.exam}
                </p>
                <p className="text-sm text-gray-600">
                  <strong>其他：</strong>
                  {course.any}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center bg-white shadow-md rounded-lg p-6 max-w-xl mx-auto">
            <p className="text-gray-800 text-lg font-semibold">
              沒有符合條件的課程評價。
            </p>
          </div>
        )}
      </main>
    </div>
  );
}
