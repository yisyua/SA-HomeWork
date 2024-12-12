import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { courseResult } from "../consts/course";

export default function SearchResult() {
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

  const [isModalOpen, setIsModalOpen] = useState(false); // 控制提醒視窗狀態

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

  return (
    <div
      className="flex flex-col items-center justify-center h-screen"
      style={{
        backgroundColor: isModalOpen ? "rgba(0, 0, 0, 0.8)" : "white", // 當視窗開啟時，背景變暗
      }}
    >
      <header className="w-full h-28 flex items-center justify-between px-8">
        <h1 className="text-black text-5xl font-bold ml-[50px]">查詢結果</h1>
        <div className="flex space-x-6">
          <button
            className="bg-[rgb(46,46,46)] hover:bg-white hover:text-gray-800 transition-all text-white font-medium text-lg w-40 h-12 mr-[50px] rounded-full"
            onClick={() => navigate("/search")}
          >
            回到查詢頁面
          </button>
        </div>
      </header>
      <main className="flex justify-center items-center py-10">
        <div className="flex flex-col items-center w-[1050px] h-[520px] rounded-3xl bg-gray-400 mb-[60px]">
          {/* Title */}
          <div className="flex items-center justify-start w-[960px] h-[50px] bg-[rgb(46,46,46)] text-white rounded-xl mt-6 px-4">
            <div className="w-[70px] h-[40px] ml-[50px] mr-[40px] flex items-center justify-center">
              科目代號
            </div>
            <div className="w-[70px] h-[40px] ml-[40px] mr-[70px] flex items-center justify-center">
              課程名稱
            </div>
            <div className="w-[70px] h-[40px] mx-[20px] flex items-center justify-center">
              教師姓名
            </div>
            <div className="w-[60px] h-[40px] ml-[-2px] mr-[-25px] flex items-center justify-center">
              學分數
            </div>
            <div className="w-[100px] h-[40px] mx-[25px] flex items-center justify-center">
              課別
            </div>
            <div className="w-[60px] h-[40px] ml-[-5px] mr-[10px] flex items-center justify-center">
              地點
            </div>
            <div className="w-[70px] h-[40px]  ml-[10px] mr-[15px] flex items-center justify-center">
              星期
            </div>
            <div className="w-[60px] h-[40px] ml-[-21px] mr-[0px] flex items-center justify-center">
              節次
            </div>
          </div>

          <div className="flex flex-col items-center w-[960px] h-[400px] bg-[rgb(46,46,46)] rounded-lg mt-4 overflow-y-auto scrollbar-thin scrollbar-track-gray-600 scrollbar-thumb-gray-600">
            {filteredCourses.length > 0 ? (
              filteredCourses.map((course) => (
                <div
                  key={course.course_id}
                  className="flex items-center justify-between w-[890px] text-white my-2 px-4"
                >
                  <div className="w-[100px] flex items-center justify-center">
                    {course.course_id}
                  </div>
                  <div className="w-[200px] flex items-center justify-center">
                    {course.course_name}
                  </div>
                  <div className="w-[100px] flex items-center justify-center">
                    {course.course_teacher}
                  </div>
                  <div className="w-[50px] flex items-center justify-center">
                    {course.num}
                  </div>
                  <div className="w-[100px] flex items-center justify-center">
                    {course.list}
                  </div>
                  <div className="w-[100px] flex items-center justify-center">
                    {course.classroom}
                  </div>
                  <div className="w-[50px] flex items-center justify-center">
                    星期{course.day}
                  </div>
                  <div className="w-[50px] flex items-center justify-center">
                    {course.time}
                  </div>
                  <button
                    className="w-[60px] h-[35px] border-2 border-white bg-[rgb(46,46,46)] text-white rounded-full hover:bg-white hover:text-[rgb(46,46,46)] font-semibold transition-all"
                    onClick={() => setIsModalOpen(true)} // 開啟提醒視窗
                  >
                    查看
                  </button>
                </div>
              ))
            ) : (
              <div className="text-white mt-4">沒有符合的課程</div>
            )}
          </div>
        </div>
      </main>

      {/* 提醒視窗 */}
      {isModalOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }} // 背景半透明黑
        >
          <div className="bg-gray-800 text-white p-6 rounded-lg w-[300px]">
            <p className="text-lg font-bold mb-4">不要選這堂啦淦！</p>
            <button
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700 transition"
              onClick={() => setIsModalOpen(false)} // 關閉提醒視窗
            >
              關閉
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
