import NTUNHS from "../assets/ntunhs.jpeg";
import { useNavigate } from "react-router-dom";

export default function AdminHome() {
    const navigate = useNavigate(); // 用來進行導航

    return (
        <>
            <div
                className="bg-cover h-screen bg-center overflow-hidden"
                style={{ backgroundImage: `url(${NTUNHS})` }}
            >
                <header className="bg-[rgb(46,46,46)] w-full h-28 flex items-center justify-between px-8">
                    <h1 className="text-white text-5xl font-bold">
                        管理者首頁
                    </h1>
                    <div className="flex space-x-6">
                        <button
                            className="bg-[rgb(46,46,46)] hover:bg-white border-2 border-white hover:text-gray-800 transition-all text-white font-medium text-lg w-24 h-12 rounded-full"
                            onClick={() => navigate("/")}
                        >
                            登出
                        </button>
                    </div>
                </header>
                <main className="flex justify-center items-center mt-16">
                    <div className="flex flex-col items-center w-[420px] bg-white bg-opacity-40 backdrop-blur-lg shadow-lg text-gray-800 rounded-2xl px-10 py-12">
                        <button
                            className="w-[320px] h-12 bg-[rgb(46,46,46)] text-white font-semibold text-lg rounded-full mt-6 hover:bg-white hover:text-gray-800 transition-all"
                            onClick={() => navigate("/add")}
                        >
                            新增課程
                        </button>
                        <button
                            className="w-[320px] h-12 bg-[rgb(46,46,46)] text-white font-semibold text-lg rounded-full mt-6 hover:bg-white hover:text-gray-800 transition-all"
                            onClick={() => navigate("/search")}
                        >
                            課程編輯
                        </button>
                        <button
                            className="w-[320px] h-12 bg-[rgb(46,46,46)] text-white font-semibold text-lg rounded-full mt-6 hover:bg-white hover:text-gray-800 transition-all"
                            onClick={() => navigate("/adminaccount")}
                        >
                            帳號管理
                        </button>
                        <button className="w-[320px] h-12 bg-[rgb(46,46,46)] text-white font-semibold text-lg rounded-full mt-6 hover:bg-white hover:text-gray-800 transition-all">
                            <a href="#">查看課程評價</a>
                        </button>
                    </div>
                </main>
            </div>
        </>
    );
}
