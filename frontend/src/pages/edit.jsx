import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Edit() {
  const navigate = useNavigate(); // 用來進行導航
  const location = useLocation();
  
  // 獲取傳遞過來的課程資料
  const courseData = location.state || {};
  
  // 使用 useState 設置表單數據
  const [formData, setFormData] = useState({
    semester: '',
    program: '',
    courseType: '',
    session: '',
    teacher: '',
    department: '',
    grade: '',
    weekday: '',
    courseName: '',
    courseCode: '',
    num: ''
  });

  // 當 courseData 改變時更新表單數據
  useEffect(() => {
    if (courseData) {
      setFormData({
        semester: courseData.semester || '',
        program: courseData.program || '',
        courseType: courseData.list || '',
        session: courseData.time || '',
        teacher: courseData.course_teacher || '',
        department: courseData.department || '',
        grade: courseData.grade || '',
        weekday: courseData.day || '',
        courseName: courseData.course_name || '',
        courseCode: courseData.course_id || '',
        num: courseData.num || ''
      });
    }
  }, [courseData]);

  return (
    <>
      <div className="bg-gray-200 min-h-screen">
        <header className="bg-[rgb(46,46,46)] h-[100px] flex items-center justify-between px-20">
          <h1 className="text-white text-3xl font-semibold">編輯</h1>
          <button
            className="bg-[rgb(46,46,46)] border-2 border-white text-white font-medium text-sm px-6 py-2 rounded-full hover:bg-white hover:text-gray-800"
            onClick={() => navigate("/search")}
          >
            回到查詢
          </button>
        </header>
        <main className="flex justify-center items-center py-20">
          <div className="bg-[rgb(46,46,46)] max-w-[1100px] h-[450px] rounded-lg p-10 flex">
            <div className="flex flex-col w-[350px] space-y-6">
              {/* 學期 */}
              <div className="flex items-center space-x-4 ml-[40px]">
                <label htmlFor="semester" className="text-white w-14">學期</label>
                <input
                  id="semester"
                  type="text"
                  placeholder="輸入學期"
                  value={formData.semester}
                  onChange={(e) => setFormData({ ...formData, semester: e.target.value })}
                  className="w-[250px] h-10 rounded-lg px-4 text-sm"
                  required
                />
              </div>
              {/* 學制 */}
              <div className="flex items-center space-x-4 ml-[40px]">
                <label htmlFor="program" className="text-white w-14">學制</label>
                <input
                  id="program"
                  type="text"
                  placeholder="輸入學制"
                  value={formData.program}
                  onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                  className="w-[250px] h-10 rounded-lg px-4 text-sm"
                  required
                />
              </div>
              {/* 課別 */}
              <div className="flex items-center space-x-4 ml-[40px]">
                <label htmlFor="courseType" className="text-white w-14">課別</label>
                <input
                  id="courseType"
                  type="text"
                  placeholder="輸入課別"
                  value={formData.courseType}
                  onChange={(e) => setFormData({ ...formData, courseType: e.target.value })}
                  className="w-[250px] h-10 rounded-lg px-4 text-sm"
                  required
                />
              </div>
              {/* 節次 */}
              <div className="flex items-center space-x-4 ml-[40px]">
                <label htmlFor="session" className="text-white w-14">節次</label>
                <input
                  id="session"
                  type="text"
                  placeholder="輸入節次"
                  value={formData.session}
                  onChange={(e) => setFormData({ ...formData, session: e.target.value })}
                  className="w-[250px] h-10 rounded-lg px-4 text-sm"
                  required
                />
              </div>
              {/* 教師 */}
              <div className="flex items-center space-x-4 ml-[40px]">
                <label htmlFor="teacher" className="text-white w-14">教師</label>
                <input
                  id="teacher"
                  type="text"
                  placeholder="輸入教師名稱"
                  value={formData.teacher}
                  onChange={(e) => setFormData({ ...formData, teacher: e.target.value })}
                  className="w-[250px] h-10 rounded-lg px-4 text-sm"
                  required
                />
              </div>
            </div>

            {/* 右側欄位 */}
            <div className="ml-10 flex flex-col space-y-6 ml-[100px]">
              {/* 系所 */}
              <div className="flex items-center space-x-4">
                <label htmlFor="department" className="text-white w-14">系所</label>
                <input
                  id="department"
                  type="text"
                  placeholder="輸入系所名稱"
                  value={formData.department}
                  onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                  className="w-[250px] h-10 rounded-lg px-4 text-sm"
                  required
                />
              </div>
              {/* 年級 */}
              <div className="flex items-center space-x-4">
                <label htmlFor="grade" className="text-white w-14">年級</label>
                <input
                  id="grade"
                  type="text"
                  placeholder="輸入年級"
                  value={formData.grade}
                  onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                  className="w-[250px] h-10 rounded-lg px-4 text-sm"
                  required
                />
              </div>
              {/* 星期 */}
              <div className="flex items-center space-x-4">
                <label htmlFor="weekday" className="text-white w-14">星期</label>
                <input
                  id="weekday"
                  type="text"
                  placeholder="輸入星期"
                  value={formData.weekday}
                  onChange={(e) => setFormData({ ...formData, weekday: e.target.value })}
                  className="w-[250px] h-10 rounded-lg px-4 text-sm"
                  required
                />
              </div>

              {/* 課程名稱和代碼 */}
              <div className="flex flex-col w-[350px] space-y-6">
                {/* 課程名稱 */}
                <div className="flex items-center space-x-4">
                    <label htmlFor="courseName" className="text-white w-14">課程</label>
                    <input
                      id="courseName"
                      type="text"
                      placeholder="輸入課程名稱"
                      value={formData.courseName}
                      onChange={(e) => setFormData({ ...formData, courseName: e.target.value })}
                      className="w-[250px] h-10 rounded-lg px-4 text-sm"
                      required
                    />
                </div>

                {/* 科目代碼 */}
                <div className={`flex items-center space-x-4`}>
                    <label htmlFor={`courseCode`} 
                    className={`text-white w-[80px] ml-[-30px] mr-[10px]`}>
                        科目代碼</label>
                    <input 
                    id={`courseCode`} 
                    type={`text`} 
                    placeholder={`輸入課程代碼`} 
                    value={formData.courseCode} 
                    onChange={(e) => setFormData({ ...formData, courseCode: e.target.value })} 
                    className={`w-[250px] h-10 rounded-lg px-4 text-sm`} 
                    required />
                 </div>

                 {/* 學分數 */}
                 <div className={`flex items-center space-x-4`}>
                     <label htmlFor={`num`} 
                     className={`text-white w-14`}>
                         學分數</label>
                     <input 
                     id={`num`} 
                     type={`text`} 
                     placeholder={`輸入學分數`} 
                     value={formData.num} 
                     onChange={(e) => setFormData({ ...formData, num: e.target.value })} 
                     className={`w-[250px] h-10 rounded-lg px-4 text-sm`} 
                     required />
                 </div>
             </div>

            </div>

            {/* 按鈕區域 */}
            <div className={`ml-10 flex flex-col items-center space-y-6 mt-10`}>
               {/* 修改按鈕 */}
               <button 
               className={`border-2 border-white w-[100px] h-[50px] bg-[rgb(46,46,46)] text-white font-medium text-sm rounded-full hover:bg-white hover:text-gray-800`}>
                   修改</button>

               {/* 刪除按鈕 */}
               <button 
               className={`border-2 border-white w-[100px] h-[50px] bg-[rgb(46,46,46)] text-white font-medium text-sm rounded-full hover:bg-white hover:text-gray-800`}>
                   刪除</button>

            </div>

          </div>        
        </main>        
      </div>      
    </>
  );
}
