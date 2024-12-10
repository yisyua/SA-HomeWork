import React from "react";
import { useNavigate } from "react-router-dom";

export default function ReviseResult() {

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
                        className="w-[250px] h-10 rounded-lg px-4 text-sm"
                        required
                      />
                    </div>
                    <div className="flex items-center space-x-4 ml-[40px]">
                      <label htmlFor="program" className="text-white w-14">學制</label>
                      <input
                        id="program"
                        type="text"
                        className="w-[250px] h-10 rounded-lg px-4 text-sm"
                        required
                      />
                    </div>
                    <div className="flex items-center space-x-4 ml-[40px]">
                      <label htmlFor="courseType" className="text-white w-14">課別</label>
                      <input
                        id="courseType"
                        type="text"
                        className="w-[250px] h-10 rounded-lg px-4 text-sm"
                        required
                      />
                    </div>
                    <div className="flex items-center space-x-4 ml-[40px]">
                      <label htmlFor="session" className="text-white w-14">節次</label>
                      <input
                        id="session"
                        type="text"
                        className="w-[250px] h-10 rounded-lg px-4 text-sm"
                        required
                      />
                    </div>
                    <div className="flex items-center space-x-4 ml-[40px]">
                      <label htmlFor="teacher" className="text-white w-14">教師</label>
                      <input
                        id="teacher"
                        type="text"
                        className="w-[250px] h-10 rounded-lg px-4 text-sm"
                        required
                      />
                    </div>
                    <div className="flex items-center space-x-4 ml-[40px]">
                      <label htmlFor="class" className="text-white w-14">班級</label>
                      <input
                        id="class"
                        type="text"
                        className="w-[250px] h-10 rounded-lg px-4 text-sm"
                        required
                      />
                    </div>
                    <div className="flex items-center space-x-4 ml-[15px]">
                      <label htmlFor="classCode" className="text-white w-[80px]">班級代碼</label>
                      <input
                        id="classCode"
                        type="text"
                        className="w-[240px] h-10 rounded-lg px-4 text-sm"
                        required
                      />
                    </div>
                  </div>
                  <div className="ml-10 flex flex-col space-y-6 ml-[100px]">
                    <div className="flex items-center space-x-4">
                    <label htmlFor="courseName" className="text-white w-[80px] ml-[30px] mr-[-30px]">
                          系所
                        </label>
                        <input
                          id="courseName"
                          type="text"
                          className="w-[250px] h-10 rounded-lg px-4 text-sm"
                          required
                        />
                    </div>
                    <div className="flex items-center space-x-4">
                    <label htmlFor="courseName" className="text-white w-[80px] ml-[30px] mr-[-30px]">
                          年級
                        </label>
                        <input
                          id="courseName"
                          type="text"
                          className="w-[250px] h-10 rounded-lg px-4 text-sm"
                          required
                        />
                    </div>
                    <div className="flex items-center space-x-4">
                    <label htmlFor="courseName" className="text-white w-[80px] ml-[30px] mr-[-30px]">
                          星期
                        </label>
                        <input
                          id="courseName"
                          type="text"
                          className="w-[250px] h-10 rounded-lg px-4 text-sm"
                          required
                        />
                    </div>
                    <div className="space-y-6">
                      <div className="flex items-center space-x-4">
                        <label htmlFor="courseName" className="text-white w-[80px] ml-[30px] mr-[-30px]">
                          課程
                        </label>
                        <input
                          id="courseName"
                          type="text"
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
                          className="w-[250px] h-10 rounded-lg px-4 text-sm"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="ml-10 flex justify-start mt-[200px]">
                    <button className="border-2 border-white w-[100px] h-[50px] bg-[rgb(46,46,46)] text-white font-medium text-sm px-6 py-2 rounded-full hover:bg-white hover:text-gray-800">
                      修改
                    </button>
                  </div>
                </div>
              </main>
            </div>
          </>
        );
      }