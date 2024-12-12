import React, { useState } from "react";

export default function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onLogin(username, password);
  };

  return (
    <div className="flex justify-center flex-col items-center h-screen bg-gradient-to-r from-[#236b92] via-[#5d158d] to-[#8d1f3a]">
      <h1 className="text-center text-3xl text-white font-bold mb-4">課程查詢系統</h1>
      <div className="flex flex-col justify-center items-center w-[420px] bg-white/20 backdrop-blur-lg shadow-md text-white rounded-[30px] p-[50px]">
        <h1 className="text-center text-3xl font-bold mb-4">Login</h1>
        <form onSubmit={handleSubmit} className="w-full">
          <div className="flex flex-col items-center mb-4">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="w-full h-[50px] mb-4 rounded-full p-4 text-lg bg-transparent border-2 border-white text-white placeholder-gray-300 focus:outline-none focus:border-blue-400 transition duration-500"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full h-[50px] rounded-full p-4 text-lg bg-transparent border-2 border-white text-white placeholder-gray-300 focus:outline-none focus:border-blue-400 transition duration-500"
            />
          </div>
          <button
            type="submit"
            className="w-full h-[50px] bg-gray-700 rounded-full text-lg font-semibold border-2 border-gray-700 text-white hover:bg-white hover:text-gray-700 transition duration-500"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}


