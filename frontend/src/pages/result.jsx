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
    const [isTeacherModalOpen, setIsTeacherModalOpen] = useState(false); // 控制教師相關視窗
    const [selectedClassroomKey, setSelectedClassroomKey] = useState(null); // 儲存選擇的 classroom_key

    // 定義一個圖片映射對應表
    const classroomImages = {
        B: "/test/map_B.png",
        F: "/test/map_F.png",
        G: "/test/map_G.png",
        S: "/test/map_S.png",
        // 可以繼續添加其他教室的對應圖片
    };

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
            className="flex flex-col h-screen"
            style={{
                backgroundColor:
                    isModalOpen || isTeacherModalOpen
                        ? "rgba(0, 0, 0, 0.8)"
                        : "white",
            }}
        >
            <header className="bg-[rgb(33,94,135)] h-[100px] flex items-center justify-between px-20">
                <h1 className="text-white text-3xl font-semibold">查詢結果</h1>
                <button
                    className="bg-[rgb(33,94,135)] border-2 border-white text-white font-medium text-sm px-6 py-2 rounded-full hover:bg-white hover:text-gray-800"
                    onClick={() => navigate("/jojo")}
                >
                    回到查詢
                </button>
            </header>
            <main className="flex justify-center items-center py-10">
                <div className="flex flex-col items-center w-[1300px] h-[520px] rounded-3xl bg-gray-400 mb-[60px]">
                    {/* Title */}
                    <div className="flex items-center justify-start w-[1200px] h-[50px] bg-[rgb(46,46,46)] text-white rounded-xl mt-6 px-4">
                        {/* 各欄位 */}
                        <div className="ml-[55px] mr-[40px] flex items-center justify-center">
                            學期
                        </div>
                        <div className="ml-[25px] mr-[40px] flex items-center justify-center">
                            學制
                        </div>
                        <div className="ml-[30px] mr-[40px] flex items-center justify-center">
                            年級
                        </div>
                        <div className="ml-[0px] mr-[40px] flex items-center justify-center">
                            系所
                        </div>
                        <div className="ml-[-20px] mr-[40px] flex items-center justify-center">
                            科目代號
                        </div>
                        <div className="ml-[35px] mr-[90px] flex items-center justify-center">
                            課程名稱
                        </div>
                        <div className="ml-[35px] mr-[70px] flex items-center justify-center">
                            教師
                        </div>
                        <div className="ml-[-35px] mr-[-20px] flex items-center justify-center">
                            學分數
                        </div>
                        <div className="ml-[45px] mr-[70px] flex items-center justify-center">
                            課別
                        </div>
                        <div className="ml-[-15px] mr-[10px] flex items-center justify-center">
                            地點
                        </div>
                        <div className="ml-[30px] mr-[15px] flex items-center justify-center">
                            星期
                        </div>
                        <div className="ml-[30px] mr-[0px] flex items-center justify-center">
                            節次
                        </div>
                    </div>

                    <div className="flex flex-col items-center w-[1200px] h-[400px] bg-[rgb(46,46,46)] rounded-lg mt-4 overflow-y-auto scrollbar-thin scrollbar-track-gray-600 scrollbar-thumb-gray-600">
                        {filteredCourses.length > 0 ? (
                            filteredCourses.map((course) => (
                                <div
                                    key={course.course_id}
                                    className="flex items-center justify-between w-[1100px] text-white my-2 px-4"
                                >
                                    <div className="w-[40px] flex items-center justify-center">
                                        {course.semester}
                                    </div>
                                    <div className="w-[120px] flex items-center justify-center">
                                        {course.program}
                                    </div>
                                    <div className="w-[10px] flex items-center justify-center">
                                        {course.grade}
                                    </div>
                                    <div className="w-[80px] flex items-center justify-center">
                                        {course.department}
                                    </div>
                                    <div className="w-[20px] flex items-center justify-center">
                                        {course.course_id}
                                    </div>
                                    <div className="w-[200px] flex items-center justify-center">
                                        {course.course_name}
                                    </div>
                                    <button
                                        className="w-[90px] h-[35px] border-2 border-white bg-[rgb(46,46,46)] text-white rounded-full hover:bg-white hover:text-[rgb(46,46,46)] font-semibold transition-all"
                                        onClick={() =>
                                            (window.location.href =
                                                "https://im.ntunhs.edu.tw/p/412-1054-147.php?Lang=zh-tw")
                                        }
                                    >
                                        {course.course_teacher}
                                    </button>
                                    <div className="w-[10px] flex items-center justify-center">
                                        {course.num}
                                    </div>
                                    <div className="w-[70px] flex items-center justify-center">
                                        {course.list}
                                    </div>
                                    <button
                                        className="w-[50px] h-[35px] border-2 border-white bg-[rgb(46,46,46)] text-white rounded-full hover:bg-white hover:text-[rgb(46,46,46)] font-semibold transition-all"
                                        onClick={() => {
                                            setSelectedClassroomKey(
                                                course.classroom_key
                                            ); // 儲存當前 classroom_key
                                            setIsModalOpen(true); // 開啟提醒視窗
                                        }}
                                    >
                                        {course.classroom_key}
                                        {course.classroom}
                                    </button>
                                    <div className="w-[50px] flex items-center justify-center">
                                        {course.day}
                                    </div>
                                    <div className="w-[40px] flex items-center justify-center">
                                        {course.time}
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="text-white mt-4">
                                沒有符合的課程
                            </div>
                        )}
                    </div>
                </div>
            </main>

            {/* 提醒視窗 */}
            {isModalOpen && (
                <div
                    className="fixed inset-0 flex items-center justify-center z-50"
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
                >
                    <div className="bg-gray-800 text-white p-6 rounded-lg w-[800px] h-[680px]">
                        <img
                            src={
                                classroomImages[selectedClassroomKey] ||
                                "/test/map.png"
                            } // 根據選中的 classroom_key 顯示圖片
                            alt="教室地圖"
                            className="w-[750px] h-[570px] object-cover mb-4"
                        />
                        <button
                            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700 transition"
                            onClick={() => setIsModalOpen(false)} // 關閉提醒視窗
                        >
                            關閉
                        </button>
                    </div>
                </div>
            )}

            {/* 教師提醒視窗 */}
            {isTeacherModalOpen && (
                <div
                    className="fixed inset-0 flex items-center justify-center z-50"
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
                >
                    <div className="bg-gray-800 text-white p-6 rounded-lg w-[300px]">
                        <p className="text-lg font-bold mb-4">
                            不要選這堂啦淦！
                        </p>
                        <button
                            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700 transition"
                            onClick={() => setIsTeacherModalOpen(false)}
                        >
                            關閉
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
