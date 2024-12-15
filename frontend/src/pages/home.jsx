import { useState } from "react";
import Login from "./login.jsx";
import Success from "./success.jsx";
import AdminHome from "./adminhome.jsx";
import { useNavigate } from "react-router-dom"; // 引入 useNavigate
import { validUsers } from "../consts/data.js";

export default function Home() {
    const navigate = useNavigate(); // 用來進行導航

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [role, setRole] = useState("");

    const handleLogin = (username, password) => {
        const user = validUsers.find(
            (user) => user.username === username && user.password === password
        );
        if (user) {
            setIsLoggedIn(true);
            setRole(user.role);

            // 根據角色導航到對應的路徑
            if (user.role === "管理員") {
                navigate("/adminhome"); // 管理員跳轉到 /adminhome
            } else if (user.role === "學生") {
                navigate("/success"); // 學生跳轉到 /success
            }
        } else {
            alert("帳號或密碼錯誤！");
        }
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        setRole(""); // 清空狀態
        navigate("/"); // 返回首頁
    };

    return (
        <>
            <div
                className={
                    isLoggedIn
                        ? role === "admin"
                            ? "AdminHome-container"
                            : "success-container"
                        : "login-container"
                }
            >
                {!isLoggedIn && <Login onLogin={handleLogin} />}
                {isLoggedIn && role === "admin" && (
                    <AdminHome onLogout={handleLogout} />
                )}
                {isLoggedIn && role === "student" && (
                    <Success onLogout={handleLogout} />
                )}
            </div>
        </>
    );
}
