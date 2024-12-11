import React from "react";
import { useNavigate } from "react-router-dom";

export default function Revise() {

  const navigate = useNavigate(); // 用來進行導航

        return (
          <>
            <div className="bg-gray-200 min-h-screen">
              <header className="bg-[rgb(46,46,46)] h-[100px] flex items-center justify-between px-20">
                <h1 className="text-white text-3xl font-semibold">修改課程</h1>
                <button className="bg-[rgb(46,46,46)] border-2 border-white text-white font-medium text-sm px-6 py-2 rounded-full hover:bg-white hover:text-gray-800" onClick={() => navigate("/adminhome")}>
                  回到首頁
                </button>
              </header>
              <main className="flex justify-center items-center py-10">
                <div className="bg-[rgb(46,46,46)] max-w-[1100px] h-[520px] rounded-lg p-10 flex">
                  <div className="flex flex-col w-[350px] space-y-6">
                    <div className="flex items-center space-x-4 ml-[40px]">
                      <label htmlFor="semester" className="text-white w-14">學期</label>
                      <input
                        id="semester"
                        type="text"
                        placeholder="輸入學期"
                        className="w-[250px] h-10 rounded-lg px-4 text-sm"
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
                        required
                      />
                    </div>
                    <div className="flex items-center space-x-4 ml-[40px]">
                      <label htmlFor="class" className="text-white w-14">班級</label>
                      <input
                        id="class"
                        type="text"
                        placeholder="輸入班級"
                        className="w-[250px] h-10 rounded-lg px-4 text-sm"
                        required
                      />
                    </div>
                    <div className="flex items-center space-x-4 ml-[15px]">
                      <label htmlFor="classCode" className="text-white w-[80px]">班級代碼</label>
                      <input
                        id="classCode"
                        type="text"
                        placeholder="輸入班級代碼"
                        className="w-[240px] h-10 rounded-lg px-4 text-sm"
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
                        defaultValue=""
                      >
                        <option value="" disabled>
                          選擇系所
                        </option>
                        <option value="1">護理系</option>
                        <option value="2">高齡健康照護系</option>
                        <option value="3">護理助產及婦女健康系</option>
                        <option value="4">醫護教育暨數位學習系</option>
                        <option value="5">中西醫結合護理研究所</option>
                        <option value="6">中西醫結合護理研究所(舊)</option>
                        <option value="7">健康科技學院(不分系)</option>
                        <option value="8">健康事業管理系</option>
                        <option value="9">資訊管理系</option>
                        <option value="10">休閒產業休閒產業與健康促進系</option>
                        <option value="11">長期照護系</option>
                        <option value="13p">健康科技學院(不分系)</option>
                        <option value="12">語言治療與聽力學系</option>
                        <option value="13">國際健康科技碩士學位學程</option>
                        <option value="14">人類發展與健康學院(不分系)</option>
                        <option value="15">嬰幼兒保育系</option>
                        <option value="16">運動保健系</option>
                        <option value="17">生死與健康心理諮商系</option>
                        <option value="18">高齡進康暨運動保健技優專班</option>
                        <option value="19">智慧健康科技技優專班</option>
                        <option value="20">人工智慧與健康大數據研究所</option>
                      </select>
                    </div>
                    <div className="flex items-center space-x-4">
                      <label htmlFor="grade" className="text-white w-[80px] ml-[30px] mr-[-30px]">年級</label>
                      <select
                        id="grade"
                        className="w-[250px] h-10 rounded-lg px-4 text-sm"
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
                        defaultValue=""
                      >
                        <option value="" disabled>
                          選擇星期
                        </option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
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
                          required
                        />
                      </div>
                      <div className="flex items-center space-x-4">
                        <label htmlFor="courseCode" className="text-white w-[80px] ml-[15px] mr-[-15px]">
                          學分數
                        </label>
                        <input
                          id="courseCode"
                          type="text"
                          placeholder="輸入學分數"
                          className="w-[250px] h-10 rounded-lg px-4 text-sm"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="ml-10 flex justify-start mt-[200px]">
                    <button className="border-2 border-white w-[100px] h-[50px] bg-[rgb(46,46,46)] text-white font-medium text-sm px-6 py-2 rounded-full hover:bg-white hover:text-gray-800" onClick={() => navigate("/reviseresult")}>
                      查詢
                    </button>
                  </div>
                </div>
              </main>
            </div>
          </>
        );
      }
           