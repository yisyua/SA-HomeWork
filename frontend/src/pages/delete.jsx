import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Delete() {
  const navigate = useNavigate(); // 用來進行導航

  // 狀態來存儲輸入的資料
  const [semester, setSemester] = useState("");
  const [program, setProgram] = useState("");
  const [courseType, setCourseType] = useState("");
  const [session, setSession] = useState("");
  const [teacher, setTeacher] = useState("");
  const [classname, setClassname] = useState("");
  const [classCode, setClassCode] = useState("");
  const [department, setDepartment] = useState("");
  const [grade, setGrade] = useState("");
  const [weekday, setWeekday] = useState("");
  const [courseName, setCourseName] = useState("");
  const [courseCode, setCourseCode] = useState("");

  const [isEmpty, setIsEmpty] = useState(false); // 用來檢查是否有空值

  const handleSubmit = () => {
    // 判斷是否所有欄位皆為空
    const allFieldsEmpty =
      !semester &&
      !program &&
      !courseType &&
      !session &&
      !teacher &&
      !classname &&
      !classCode &&
      !department &&
      !grade &&
      !weekday &&
      !courseName &&
      !courseCode;

    if (allFieldsEmpty) {
      // 提示使用者至少填寫一項條件
      alert("沒有符合的課程，請填寫查詢條件！");
    } else {
      // 資料不為空，進行導航並傳遞資料
      navigate("/revise", {
        state: {
          semester,
          program,
          courseType,
          session,
          teacher,
          classname,
          classCode,
          department,
          grade,
          weekday,
          courseName,
          courseCode,
        },
      });
    }
  };


        return (
          <>
            <div className="bg-gray-200 min-h-screen">
              <header className="bg-[rgb(33,94,135)] h-[100px] flex items-center justify-between px-20">
                <h1 className="text-white text-3xl font-semibold">預排課程</h1>
                <button className="bg-[rgb(33,94,135)] border-2 border-white text-white font-medium text-sm px-6 py-2 rounded-full hover:bg-white hover:text-gray-800" onClick={() => navigate("/success")}>
                  回到首頁
                </button>
              </header>
              <main className="flex justify-center items-center py-20">
                <div className="bg-[rgb(33,94,135)] max-w-[1100px] h-[400px] rounded-lg p-10 flex">
                  <div className="flex flex-col w-[350px] space-y-6">
                    <div className="flex items-center space-x-4 ml-[40px]">
                      <label htmlFor="semester" className="text-white w-14">學期</label>
                      <input
                        id="semester"
                        type="text"
                        placeholder="輸入學期"
                        className="w-[250px] h-10 rounded-lg px-4 text-sm"
                        value={semester}
                        onChange={(e) => setSemester(e.target.value)}
                        required
                      />
                    </div>
                    <div className="flex items-center space-x-4 ml-[40px]">
                      <label htmlFor="program" className="text-white w-14">學制</label>
                      <input
                        id="program"
                        type="text"
                        placeholder="輸入學制"
                        className="w-[250px] h-10 rounded-lg px-4 text-sm"
                        value={program}
                        onChange={(e) => setProgram(e.target.value)}
                        required
                      />
                    </div>
                    <div className="flex items-center space-x-4 ml-[40px]">
                      <label htmlFor="courseType" className="text-white w-14">課別</label>
                      <input
                        id="courseType"
                        type="text"
                        placeholder="輸入課別"
                        className="w-[250px] h-10 rounded-lg px-4 text-sm"
                        value={courseType}
                        onChange={(e) => setCourseType(e.target.value)}
                        required
                      />
                    </div>
                    <div className="flex items-center space-x-4 ml-[40px]">
                      <label htmlFor="session" className="text-white w-14">節次</label>
                      <input
                        id="session"
                        type="text"
                        placeholder="輸入節次"
                        className="w-[250px] h-10 rounded-lg px-4 text-sm"
                        value={session}
                        onChange={(e) => setSession(e.target.value)}
                        required
                      />
                    </div>
                    <div className="flex items-center space-x-4 ml-[40px]">
                      <label htmlFor="teacher" className="text-white w-14">教師</label>
                      <input
                        id="teacher"
                        type="text"
                        placeholder="輸入教師名稱"
                        className="w-[250px] h-10 rounded-lg px-4 text-sm"
                        value={teacher}
                        onChange={(e) => setTeacher(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="ml-10 flex flex-col space-y-6 ml-[100px]">
                    <div className="flex items-center space-x-4">
                      <label htmlFor="department" className="text-white w-[80px] ml-[30px] mr-[-30px]">系所</label>
                      <select
                        id="department"
                        className="w-[250px] h-10 rounded-lg px-4 text-sm"
                        value={department}
                        onChange={(e) => setDepartment(e.target.value)}
                        defaultValue=""
                      >
                        <option value="" disabled>
                          選擇系所
                        </option>
                        <option value="護理系">護理系</option>
                        <option value="高齡健康照護系">高齡健康照護系</option>
                        <option value="護理助產及婦女健康系">護理助產及婦女健康系</option>
                        <option value="醫護教育暨數位學習系">醫護教育暨數位學習系</option>
                        <option value="中西醫結合護理研究所">中西醫結合護理研究所</option>
                        <option value="中西醫結合護理研究所(舊)">中西醫結合護理研究所(舊)</option>
                        <option value="健康科技學院(不分系)">健康科技學院(不分系)</option>
                        <option value="健康事業管理系">健康事業管理系</option>
                        <option value="資訊管理系">資訊管理系</option>
                        <option value="休閒產業休閒產業與健康促進系">休閒產業休閒產業與健康促進系</option>
                        <option value="長期照護系">長期照護系</option>
                        <option value="健康科技學院(不分系)">健康科技學院(不分系)</option>
                        <option value="語言治療與聽力學系">語言治療與聽力學系</option>
                        <option value="國際健康科技碩士學位學程">國際健康科技碩士學位學程</option>
                        <option value="人類發展與健康學院(不分系)">人類發展與健康學院(不分系)</option>
                        <option value="嬰幼兒保育系">嬰幼兒保育系</option>
                        <option value="運動保健系">運動保健系</option>
                        <option value="生死與健康心理諮商系">生死與健康心理諮商系</option>
                        <option value="高齡進康暨運動保健技優專班">高齡進康暨運動保健技優專班</option>
                        <option value="智慧健康科技技優專班">智慧健康科技技優專班</option>
                        <option value="人工智慧與健康大數據研究所">人工智慧與健康大數據研究所</option>
                      </select>
                    </div>
                    <div className="flex items-center space-x-4">
                      <label htmlFor="grade" className="text-white w-[80px] ml-[30px] mr-[-30px]">年級</label>
                      <select
                        id="grade"
                        className="w-[250px] h-10 rounded-lg px-4 text-sm"
                        value={grade}
                        onChange={(e) => setGrade(e.target.value)}
                        defaultValue=""
                      >
                        <option value="" disabled>
                          選擇年級
                        </option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                      </select>
                    </div>
                    <div className="flex items-center space-x-4">
                      <label htmlFor="weekday" className="text-white w-[80px] ml-[30px] mr-[-30px]">星期</label>
                      <select
                        id="weekday"
                        className="w-[250px] h-10 rounded-lg px-4 text-sm"
                        value={weekday}
                        onChange={(e) => setWeekday(e.target.value)}
                        defaultValue=""
                      >
                        <option value="" disabled>
                          選擇星期
                        </option>
                        <option value="星期1">星期1</option>
                        <option value="星期2">星期2</option>
                        <option value="星期3">星期3</option>
                        <option value="星期4">星期4</option>
                        <option value="星期5">星期5</option>
                        <option value="星期6">星期6</option>
                        <option value="星期日">星期日</option>
                      </select>
                    </div>
                    <div className="space-y-6">
                      <div className="flex items-center space-x-4">
                        <label htmlFor="courseName" className="text-white w-[80px] ml-[30px] mr-[-30px]">
                          課程
                        </label>
                        <input
                          id="courseName"
                          type="text"
                          placeholder="輸入課程名稱"
                          className="w-[250px] h-10 rounded-lg px-4 text-sm"
                          value={courseName}
                          onChange={(e) => setCourseName(e.target.value)}
                          required
                        />
                      </div>
                      <div className="flex items-center space-x-4">
                        <label htmlFor="courseCode" className="text-white w-[80px]">
                          科目代碼
                        </label>
                        <input
                          id="courseCode"
                          type="text"
                          placeholder="輸入課程代碼"
                          className="w-[250px] h-10 rounded-lg px-4 text-sm"
                          value={courseCode}
                          onChange={(e) => setCourseCode(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="ml-10 flex justify-start mt-[150px]">
                    <button className="border-2 border-white w-[100px] h-[50px] bg-[rgb(33,94,135)] text-white font-medium text-sm px-6 py-2 rounded-full hover:bg-white hover:text-gray-800" onClick={handleSubmit}>
                      查詢
                    </button>
                  </div>
                </div>
              </main>
            </div>
          </>
        );
      }
           