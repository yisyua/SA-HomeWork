import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { validUsers } from "./data";

export default function AdminAccount() {
  const [inputValue, setInputValue] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSearch = () => {
    const foundUser = validUsers.find((user) => user.username === inputValue);
    if (foundUser) {
      setSelectedUser(foundUser);
    } else {
      setSelectedUser(null);
      console.log("使用者不存在！");
    }
  };

  return (
    <div className="font-poppins bg-[#c1d1da] min-h-screen overflow-hidden flex flex-col">
      <header className="bg-[rgb(46,46,46)]  w-full h-[100px] flex items-center justify-between px-20">
                <h1 className="text-white text-3xl font-semibold">帳號管理</h1>
                <button className="bg-[rgb(46,46,46)] border-2 border-white text-white font-medium text-sm px-6 py-2 rounded-full hover:bg-white hover:text-gray-800" onClick={() => navigate("/adminhome")}>
                  回到首頁
                </button>
              </header>
      <main className="flex justify-center items-center">
        <div className="flex flex-col items-center bg-[rgba(80,77,77,0.4)] backdrop-blur-lg shadow-lg w-[960px] h-[520px] mt-[30px] rounded-2xl font-semibold">
          <div className="flex justify-center items-center w-[500px] h-[50px] mt-[40px]">
            <label htmlFor="accountInput" className="text-[20px] mr-[15px]">帳號</label>
            <input
              type="text"
              id="accountInput"
              placeholder="輸入帳號"
              value={inputValue}
              onChange={handleInputChange}
              className="w-[250px] h-[40px] rounded-[20px] px-4 border-2 border-white focus:outline-none focus:border-[#55a2cf] transition duration-500"
              required
            />
            <button
              className="w-[80px] h-[40px] rounded-[20px] bg-[#2e2e2e] text-white ml-[15px] hover:bg-white hover:text-[#2e2e2e] transition duration-800"
              onClick={handleSearch}
            >
              查詢
            </button>
          </div>
          <div className="flex flex-col items-center rounded-[20px] bg-[#2e2e2e] w-[900px] h-[340px] overflow-y-auto p-[20px] mt-[30px]">
            {selectedUser ? (
              <div
                className="flex justify-start items-center text-white w-[800px] h-[40px] my-[10px]"
              >
                <div className="text-center w-[90px] mx-[30px]">{selectedUser.username}</div>
                <div className="text-center w-[60px] mx-[30px]">{selectedUser.role}</div>
                <div className="text-center w-[90px] mx-[30px]">{selectedUser.name}</div>
                <div className="text-center w-[140px] mx-[30px]">{selectedUser.department}</div>
                <div className="text-center w-[30px] mx-[20px]">{selectedUser.grade}</div>
                <button
                  className="flex justify-center items-center w-[60px] h-[30px] rounded-full bg-[#868686] text-white hover:bg-white ml-[20px] hover:text-[#2e2e2e] transition duration-800"
                  onClick={() => navigate("/account", { state: { user: selectedUser } })}
                >
                  編輯
                </button>
              </div>
            ) : (
              <p className="text-white">尚未找到使用者，請輸入有效的帳號。</p>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
