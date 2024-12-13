import React from 'react';
import { useNavigate } from "react-router-dom";


const New = () => {

    const navigate = useNavigate(); // 用來進行導航

    return (
        <div className="bg-gray-200 min-h-screen">
            <header className="bg-[rgb(33,94,135)] h-[100px] flex items-center justify-between px-20">
                <h1 className="text-white text-3xl font-semibold">學生學習進度查詢</h1>
                <button className="bg-[rgb(33,94,135)] border-2 border-white text-white font-medium text-sm px-6 py-2 rounded-full hover:bg-white hover:text-gray-800" onClick={() => navigate("/success")}>
                  回到首頁
                </button>
            </header>

            <main className="p-8">
                {/* 表格容器 */}
                <div className="table-container overflow-y-auto max-h-96 mx-auto rounded-md p-2">
                    <table className="w-3/4 mx-auto border-collapse">
                        <thead className="bg-[rgb(33,94,135)] text-white font-bold">
                            <tr>
                                <th className="border border-gray-300 p-4">ID</th>
                                <th className="border border-gray-300 p-4">Name</th>
                                <th className="border border-gray-300 p-4">Age</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="odd:bg-gray-100 even:bg-white">
                                <td className="border border-gray-300 p-4">1</td>
                                <td className="border border-gray-300 p-4">John Doe</td>
                                <td className="border border-gray-300 p-4">25</td>
                            </tr>
                            <tr className="odd:bg-gray-100 even:bg-white">
                                <td className="border border-gray-300 p-4">2</td>
                                <td className="border border-gray-300 p-4">Jane Smith</td>
                                <td className="border border-gray-300 p-4">30</td>
                            </tr>
                            <tr className="odd:bg-gray-100 even:bg-white">
                                <td className="border border-gray-300 p-4">3</td>
                                <td className="border border-gray-300 p-4">Emily Johnson</td>
                                <td className="border border-gray-300 p-4">22</td>
                            </tr>
                            <tr className="odd:bg-gray-100 even:bg-white">
                                <td className="border border-gray-300 p-4">1</td>
                                <td className="border border-gray-300 p-4">John Doe</td>
                                <td className="border border-gray-300 p-4">25</td>
                            </tr>
                            <tr className="odd:bg-gray-100 even:bg-white">
                                <td className="border border-gray-300 p-4">2</td>
                                <td className="border border-gray-300 p-4">Jane Smith</td>
                                <td className="border border-gray-300 p-4">30</td>
                            </tr>
                            <tr className="odd:bg-gray-100 even:bg-white">
                                <td className="border border-gray-300 p-4">3</td>
                                <td className="border border-gray-300 p-4">Emily Johnson</td>
                                <td className="border border-gray-300 p-4">22</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* 各區塊 */}
                <div className="flex flex-wrap justify-start mt-10">
                    <div className="mr-40 mb-6">
                        <h3 className="text-xl font-semibold">專業必修：</h3>
                    </div>
                    <div className="mr-40 mb-6">
                        <h3 className="text-xl font-semibold">專業選修：</h3>
                    </div>
                    <div className="mr-40 mb-6">
                        <h3 className="text-xl font-semibold">通識必修：</h3>
                    </div>
                </div>

                {/* 畢業學分與模組區域 */}
                <div className="flex flex-wrap justify-start mt-10">
                    <div className="mr-40 mb-6">
                        <h2 className="text-2xl font-bold">畢業學分：</h2>
                    </div>
                    <div className="mr-40 mb-6">
                        <h2 className="text-2xl font-bold">模組：</h2>
                    </div>
                </div>

                {/* 按鈕區域 */}
                <div className="flex flex-col items-end">
                    <button className="bg-[rgb(33,94,135)] text-white font-medium text-lg py-3 px-6 rounded-full mb-4 hover:bg-gray-300 hover:text-black transition" onClick={() => window.location.href = "https://system10.ntunhs.edu.tw/AcadInfoSystem/Modules/QueryCourse/CourseList.aspx"}>學分規則</button>
                    <button className="bg-[rgb(33,94,135)] text-white font-medium text-lg py-3 px-6 rounded-full mb-4 hover:bg-gray-300 hover:text-black transition" onClick={() => navigate("/deleteresult")}>課程評價</button>
                    <button className="bg-[rgb(33,94,135)] text-white font-medium text-lg py-3 px-6 rounded-full hover:bg-gray-300 hover:text-black transition">修課建議&其他畢業門檻</button>
                </div>
            </main>
        </div>
    );
};

export default New;