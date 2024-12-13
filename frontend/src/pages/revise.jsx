import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { courseResult } from "./course";

export default function Revise() {
  const navigate = useNavigate();
  const location = useLocation();
  const {
    semester,
    program,
    courseType,
    session,
    teacher,
    classCode,
    department,
    grade,
    weekday,
    courseName,
    courseCode,
    num,
  } = location.state || {};

  const [trackedCourses, setTrackedCourses] = useState([]);

  // 過濾符合條件的課程
  const filteredCourses = courseResult.filter((course) => {
    return (
      (semester ? course.semester === semester : true) &&
      (program ? course.program === program : true) &&
      (courseType ? course.list === courseType : true) &&
      (session ? course.time === session : true) &&
      (teacher ? course.course_teacher === teacher : true) &&
      (classCode ? course.course_id.includes(classCode) : true) &&
      (department ? course.department === department : true) &&
      (grade ? course.grade === grade : true) &&
      (weekday ? course.day === weekday : true) &&
      (courseName ? course.course_name === courseName : true) &&
      (courseCode ? course.course_id === courseCode : true) &&
      (num ? course.num === num : true)
    );
  });

  const handleTrack = (course) => {
    if (!trackedCourses.some((tracked) => tracked.course_id === course.course_id)) {
      alert("已加入課表！");
      setTrackedCourses([...trackedCourses, course]);
    }
  };
  
  return (
    <div className="flex flex-col h-screen">
      <header className="bg-[rgb(33,94,135)] h-[100px] flex items-center justify-between px-20">
        <h1 className="text-white text-3xl font-semibold">查詢結果</h1>
        <div className="flex space-x-6">
          <button
            className="bg-[rgb(33,94,135)] border-2 border-white text-white font-medium text-sm px-6 py-2 rounded-full hover:bg-white hover:text-gray-800"
            onClick={() => navigate("/delete")}
          >
            回到查詢頁面
          </button>
          <button
            className="bg-[rgb(33,94,135)] border-2 border-white text-white font-medium text-sm px-6 py-2 rounded-full hover:bg-white hover:text-gray-800"
            onClick={() =>
              navigate("/reviseresult", {
                state: { trackedCourses },
              })
            }
          >
            預排課表
          </button>
        </div>
      </header>
      <main className="flex justify-center items-center py-10">
        <div className="flex flex-col items-center w-[1300px] h-[520px] rounded-3xl bg-gray-400 mb-[60px]">
          <div className="flex items-center justify-start w-[1200px] h-[50px] bg-[rgb(46,46,46)] text-white rounded-xl mt-6 px-4">
            {/* Title */}
            <div className="ml-[55px] mr-[40px] flex items-center justify-center">學期</div>
            <div className="ml-[30px] mr-[40px] flex items-center justify-center">學制</div>
            <div className="ml-[20px] mr-[40px] flex items-center justify-center">年級</div>
            <div className="ml-[-5px] mr-[40px] flex items-center justify-center">系所</div>
            <div className="ml-[-15px] mr-[40px] flex items-center justify-center">科目代號</div>
            <div className="ml-[35px] mr-[70px] flex items-center justify-center">課程名稱</div>
            <div className="ml-[25px] mr-[70px] flex items-center justify-center">教師</div>
            <div className="ml-[-50px] mr-[-25px] flex items-center justify-center">學分數</div>
            <div className="ml-[50px] mr-[70px] flex items-center justify-center">課別</div>
            <div className="ml-[-40px] mr-[10px] flex items-center justify-center">地點</div>
            <div className="ml-[30px] mr-[15px] flex items-center justify-center">星期</div>
            <div className="ml-[20px] mr-[0px] flex items-center justify-center">節次</div>
          </div>

          <div className="flex flex-col items-center w-[1200px] h-[400px] bg-[rgb(46,46,46)] rounded-lg mt-4 overflow-y-auto scrollbar-thin scrollbar-track-gray-600 scrollbar-thumb-gray-600">
            {filteredCourses.length > 0 ? (
              filteredCourses.map((course) => (
                <div
                  key={course.course_id}
                  className="flex items-center justify-between w-[1100px] text-white my-2 px-4"
                >
                  <div className="w-[40px] flex items-center justify-center">{course.semester}</div>
                  <div className="w-[120px] flex items-center justify-center">{course.program}</div>
                  <div className="w-[10px] flex items-center justify-center">{course.grade}</div>
                  <div className="w-[80px] flex items-center justify-center">{course.department}</div>
                  <div className="w-[20px] flex items-center justify-center">{course.course_id}</div>
                  <div className="w-[200px] flex items-center justify-center">{course.course_name}</div>
                  <div className="w-[50px] flex items-center justify-center">{course.course_teacher}</div>
                  <div className="w-[10px] flex items-center justify-center">{course.num}</div>
                  <div className="w-[70px] flex items-center justify-center">{course.list}</div>
                  <div className="w-[30px] flex items-center justify-center">{course.classroom_key}{course.classroom}</div>
                  <div className="w-[50px] flex items-center justify-center">{course.day}</div>
                  <div className="w-[40px] flex items-center justify-center">{course.time}</div>
                  <button
                    className="w-[60px] h-[35px] border-2 border-white bg-[rgb(46,46,46)] text-white rounded-full hover:bg-white hover:text-[rgb(46,46,46)] font-semibold transition-all"
                    onClick={() => handleTrack(course)}
                  >
                    追蹤
                  </button>
                </div>
              ))
            ) : (
              <div className="text-white mt-4">沒有符合的課程</div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
