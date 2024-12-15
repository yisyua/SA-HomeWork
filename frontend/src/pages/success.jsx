import NTUNHS from "../assets/ntunhs.jpeg";
import { useLocation, useNavigate } from "react-router-dom";

export default function Success() {
    const navigate = useNavigate(); // 用來進行導航
    const location = useLocation(); // 獲取路由位置

    // 從 location.state 中獲取用戶資料
    const user = location.state?.user; // 使用可選鏈接以防止錯誤

    return (
        <div
            className="bg-cover h-screen bg-center overflow-hidden"
            style={{ backgroundImage: `url(${NTUNHS})` }}
        >
            <header className="bg-[rgb(33,94,135)] w-full h-28 flex items-center justify-between px-8">
                <h1 className="text-white text-5xl font-bold">功能選擇</h1>
                <div className="flex space-x-6">
                    {/* 顯示用戶信息 */}
                    {user && (
                        <div className="bg-white bg-opacity-80 border border-gray-300 rounded-lg shadow-md p-4 text-black text-lg">
                            歡迎，<span className="font-bold">{user.name}</span>
                        </div>
                    )}
                    <button
                        className="bg-[rgb(33,94,135)] hover:bg-white border-2 border-white hover:text-gray-800 transition-all text-white font-medium text-lg mt-2 w-24 h-12 rounded-full"
                        onClick={() => navigate("/")} // 使用登出處理函數
                    >
                        登出
                    </button>
                </div>
            </header>
            <main className="flex justify-center items-center mt-24">
                <div className="flex flex-col items-center w-[420px] bg-white bg-opacity-40 backdrop-blur-lg shadow-lg text-gray-800 rounded-2xl px-10 py-12">
                    <button
                        className="w-[320px] h-12 bg-[rgb(33,94,135)] text-white font-semibold text-lg rounded-full mt-6 hover:bg-white hover:text-gray-800 transition-all"
                        onClick={() => navigate("/new")}
                    >
                        學習進度查詢
                    </button>
                    <button
                        className="w-[320px] h-12 bg-[rgb(33,94,135)] text-white font-semibold text-lg rounded-full mt-6 hover:bg-white hover:text-gray-800 transition-all"
                        onClick={() => navigate("/jojo")}
                    >
                        一般課程查詢
                    </button>
                    <button
                        className="w-[320px] h-12 bg-[rgb(33,94,135)] text-white font-semibold text-lg rounded-full mt-6 hover:bg-white hover:text-gray-800 transition-all"
                        onClick={() => navigate("/deleteresult")}
                    >
                        課程評價
                    </button>
                    <button
                        className="w-[320px] h-12 bg-[rgb(33,94,135)] text-white font-semibold text-lg rounded-full mt-6 hover:bg-white hover:text-gray-800 transition-all"
                        onClick={() => navigate("/delete")}
                    >
                        預排課表
                    </button>
                </div>
            </main>
        </div>
    );
}
