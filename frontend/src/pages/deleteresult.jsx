import React, { useState } from 'react';
import NTUNHS from '../../test/ntunhs.jpeg';
import { useNavigate } from "react-router-dom";

const DeleteResult = () => {
    const navigate = useNavigate(); // 用來進行導航

    // 使用 useState 來管理表單數據
    const [formData, setFormData] = useState({
        department: '',
        course: '',
        teacher: '',
        date: '',
        semester: '',
        scores: '',
        comments: '',
        additional: ''
    });

    // 處理輸入變更
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // 處理表單提交
    const handleSubmit = (event) => {
        event.preventDefault(); // 防止頁面重新加載
        console.log("提交的日期:", formData.date); // 輸出選擇的日期
        // 在這裡可以進行其他處理，例如發送請求到伺服器
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-start" style={{ backgroundImage: `url(${NTUNHS})` }}>
            <header className="bg-[rgb(33,94,135)] w-full text-center p-4 flex justify-between items-center">
                <h1 className="text-3xl font-semibold text-white">填寫課程評價</h1>
                <button className="bg-[rgb(33,94,135)] border-2 border-white hover:bg-white hover:text-gray-800 transition-all text-white font-medium text-lg w-40 h-12 mr-10 rounded-full" onClick={() => navigate("/success")}>
                    回到首頁
                </button>
            </header>
            <div className="info-container w-4/5 max-w-2xl bg-white bg-opacity-90 rounded-lg p-6 shadow-lg mt-10 mb-10 flex flex-wrap justify-between">
                <form onSubmit={handleSubmit} className="w-full">
                    {/* 將科系、課程和老師名稱改為輸入框 */}
                    <label htmlFor="department" className="text-lg"><strong>系所:</strong></label>
                    <input type="text" id="department" name="department" placeholder="請輸入科系" value={formData.department} onChange={handleChange} className="mt-1 p-2 w-full border rounded" />

                    <label htmlFor="course" className="text-lg mt-4"><strong>課程:</strong></label>
                    <input type="text" id="course" name="course" placeholder="請輸入課程名稱" value={formData.course} onChange={handleChange} className="mt-1 p-2 w-full border rounded" />

                    <label htmlFor="teacher" className="text-lg mt-4"><strong>老師名稱:</strong></label>
                    <input type="text" id="teacher" name="teacher" placeholder="請輸入老師名稱" value={formData.teacher} onChange={handleChange} className="mt-1 p-2 w-full border rounded" />

                    <label htmlFor="date" className="text-lg mt-4"><strong>填寫日期:</strong></label>
                    <input type="date" id="date" name="date" value={formData.date} onChange={handleChange} className="mt-1 p-2 w-full border rounded" />

                    <label htmlFor="semester" className="text-lg mt-4"><strong>修課學期:</strong></label>
                    <input type="text" id="semester" name="semester" placeholder="請輸入修課學期" value={formData.semester} onChange={handleChange} className="mt-1 p-2 w-full border rounded" />

                    <label htmlFor="scores" className="text-lg mt-4"><strong>評分方式:</strong></label>
                    <input type="text" id="scores" name="scores" placeholder="請輸入考試/評分方式" value={formData.scores} onChange={handleChange} className="mt-1 p-2 w-full border rounded" />

                    <label htmlFor="comments" className="text-lg mt-4"><strong>報告/考試:</strong></label>
                    <textarea id="comments" name="comments" placeholder="請輸入報告/考試" value={formData.comments} onChange={handleChange} className="mt-1 p-2 w-full border rounded"></textarea>

                    <label htmlFor="additional" className="text-lg mt-4"><strong>其他補充:</strong></label>
                    <textarea id="additional" name="additional" rows="4" cols="50" placeholder="請輸入其他補充意見或建議" value={formData.additional} onChange={handleChange} className="mt-1 p-2 w-full border rounded"></textarea>

                    <button type="submit" className="w-full h-12 bg-[rgb(33,94,135)] border rounded-full text-white font-semibold mt-6 hover:bg-white hover:text-gray-800 transition duration-300">提交</button>
                </form>
            </div>
        </div>
    );
};

export default DeleteResult;
