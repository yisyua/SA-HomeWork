import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function Account() {
    const location = useLocation();
    const user = location.state?.user || {}; // 獲取傳遞的 user 資料

    // 將資料初始化到狀態中
    const [formData, setFormData] = useState({
        username: "",
        password: "",
        role: "",
        department: "",
        grade: "",
    });

    useEffect(() => {
        if (user) {
            setFormData(user);
        }
    }, [user]);

    const handleInputChange = (event) => {
        const { id, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value,
        }));
    };

    return (
        <div className="font-poppins bg-[#c1d1da] min-h-screen flex flex-col">
            <header className="w-full h-[140px] flex items-center">
                <h1 className="text-black text-[50px] relative left-[6vw] font-bold top-[1vw]">
                    編輯帳號
                </h1>
            </header>
            <main className="flex justify-center items-center">
                <div className="flex flex-col items-center bg-[rgba(80,77,77,0.4)] backdrop-blur-lg shadow-lg w-[420px] h-[450px] rounded-2xl font-semibold p-10">
                    <div className="flex flex-col space-y-5 w-full">
                        <div className="flex items-center space-x-2">
                            <label
                                htmlFor="username"
                                className="w-[50px] text-center text-[15px]"
                            >
                                帳號
                            </label>
                            <input
                                type="text"
                                id="username"
                                value={formData.username}
                                onChange={handleInputChange}
                                className="w-[250px] h-[40px] rounded-[15px] px-4 border-2 border-white focus:outline-none focus:border-[#55a2cf] transition duration-500"
                            />
                        </div>
                        <div className="flex items-center space-x-2">
                            <label
                                htmlFor="password"
                                className="w-[50px] text-center text-[15px]"
                            >
                                密碼
                            </label>
                            <input
                                type="text"
                                id="password"
                                value={formData.password}
                                onChange={handleInputChange}
                                className="w-[250px] h-[40px] rounded-[15px] px-4 border-2 border-white focus:outline-none focus:border-[#55a2cf] transition duration-500"
                            />
                        </div>
                        <div className="flex items-center space-x-2">
                            <label
                                htmlFor="role"
                                className="w-[50px] text-center text-[15px]"
                            >
                                身份
                            </label>
                            <input
                                type="text"
                                id="role"
                                value={formData.role}
                                onChange={handleInputChange}
                                className="w-[250px] h-[40px] rounded-[15px] px-4 border-2 border-white focus:outline-none focus:border-[#55a2cf] transition duration-500"
                            />
                        </div>
                        <div className="flex items-center space-x-2">
                            <label
                                htmlFor="department"
                                className="w-[50px] text-center text-[15px]"
                            >
                                系所
                            </label>
                            <input
                                type="text"
                                id="department"
                                value={formData.department}
                                onChange={handleInputChange}
                                className="w-[250px] h-[40px] rounded-[15px] px-4 border-2 border-white focus:outline-none focus:border-[#55a2cf] transition duration-500"
                            />
                        </div>
                        <div className="flex items-center space-x-2">
                            <label
                                htmlFor="grade"
                                className="w-[50px] text-center text-[15px]"
                            >
                                年級
                            </label>
                            <input
                                type="text"
                                id="grade"
                                value={formData.grade}
                                onChange={handleInputChange}
                                className="w-[250px] h-[40px] rounded-[15px] px-4 border-2 border-white focus:outline-none focus:border-[#55a2cf] transition duration-500"
                            />
                        </div>
                    </div>
                    <button className="w-[320px] h-[45px] bg-[#2e2e2e] text-white text-[16px] font-semibold rounded-full mt-8 hover:bg-white hover:text-[#2e2e2e] transition duration-800">
                        修改
                    </button>
                </div>
            </main>
        </div>
    );
}
