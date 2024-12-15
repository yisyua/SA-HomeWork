import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Look() {
    const [department, setDepartment] = useState("");
    const [courseName, setCourseName] = useState("");
    const [teacher, setTeacher] = useState("");

    const navigate = useNavigate();

    const handleSubmit = () => {
        // 檢查是否所有欄位都為空
        const allFieldsEmpty = !department && !courseName && !teacher;

        if (allFieldsEmpty) {
            // 如果所有欄位都為空，提示用戶
            alert("沒有符合的課程，請填寫查詢條件！");
        } else {
            // 導航到結果頁面，並傳遞篩選條件
            navigate("/lookresult", {
                state: {
                    department,
                    courseName,
                    teacher,
                },
            });
        }
    };

    return (
        <>
            <div className="bg-gray-200 min-h-screen">
                <header className="bg-[rgb(46,46,46)] h-[100px] flex items-center justify-between px-20">
                    <h1 className="text-white text-3xl font-semibold">
                        查看課程評價
                    </h1>
                    <button
                        className="bg-[rgb(46,46,46)] border-2 border-white text-white font-medium text-sm px-6 py-2 rounded-full hover:bg-white hover:text-gray-800"
                        onClick={() => navigate("/adminhome")}
                    >
                        回到首頁
                    </button>
                </header>
                <main className="flex justify-center items-center py-20">
                    <div className="bg-[rgb(46,46,46)] w-[550px] max-w-[1100px] h-[300px] rounded-lg p-10 flex">
                        <div className="flex flex-col w-[350px] space-y-6 mt-5">
                            <div className="flex items-center space-x-4 ml-[20px]">
                                <label
                                    htmlFor="department"
                                    className="text-white w-14"
                                >
                                    系所
                                </label>
                                <input
                                    id="department"
                                    type="text"
                                    placeholder="輸入系所"
                                    className="w-[250px] h-10 rounded-lg px-4 text-sm"
                                    value={department}
                                    onChange={(e) =>
                                        setDepartment(e.target.value)
                                    }
                                />
                            </div>
                            <div className="flex items-center space-x-4 ml-[20px]">
                                <label
                                    htmlFor="courseName"
                                    className="text-white w-14"
                                >
                                    課程
                                </label>
                                <input
                                    id="courseName"
                                    type="text"
                                    placeholder="輸入課程"
                                    className="w-[250px] h-10 rounded-lg px-4 text-sm"
                                    value={courseName}
                                    onChange={(e) =>
                                        setCourseName(e.target.value)
                                    }
                                />
                            </div>
                            <div className="flex items-center space-x-4 ml-[20px]">
                                <label
                                    htmlFor="teacher"
                                    className="text-white w-14"
                                >
                                    教師
                                </label>
                                <input
                                    id="teacher"
                                    type="text"
                                    placeholder="輸入教師名稱"
                                    className="w-[250px] h-10 rounded-lg px-4 text-sm"
                                    value={teacher}
                                    onChange={(e) => setTeacher(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="ml-[20px] flex justify-start mt-[90px]">
                            <button
                                onClick={handleSubmit}
                                className="border-2 border-white w-[100px] h-[50px] bg-[rgb(46,46,46)] text-white font-medium text-sm px-6 py-2 rounded-full hover:bg-white hover:text-gray-800"
                            >
                                查詢
                            </button>
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
}
