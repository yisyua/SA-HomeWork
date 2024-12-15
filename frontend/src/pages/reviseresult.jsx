import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const ReviseResult = () => {
    const location = useLocation();
    const trackedCourses = location.state?.trackedCourses || [];

    // 初始化課表
    const [schedule, setSchedule] = useState(() => {
        const emptySchedule = {};
        for (let day = 1; day <= 7; day++) {
            emptySchedule[day] = Array(14).fill(null); // 每天14節
        }
        return emptySchedule;
    });

    const parseDay = (day) => parseInt(day.replace("星期", ""), 10);
    const parseTime = (time) => {
        // 使用 split 方法將字串以逗號分割，然後轉換為整數陣列
        return time.split(",").map((t) => parseInt(t, 10));
    };

    // 填充課表（使用 useEffect，保證 trackedCourses 變化時更新課表）
    React.useEffect(() => {
        const updatedSchedule = {};
        for (let day = 1; day <= 7; day++) {
            updatedSchedule[day] = Array(14).fill(null);
        }

        trackedCourses.forEach((course) => {
            const day = parseDay(course.day);
            const times = parseTime(course.time);

            times.forEach((time) => {
                const timeIndex = time - 1;
                if (updatedSchedule[day]) {
                    updatedSchedule[day][timeIndex] = course.course_name;
                }
            });
        });

        setSchedule(updatedSchedule);
    }, [trackedCourses]); // trackedCourses 改變時觸發

    // 清空課表
    const handleClean = () => {
        setSchedule(() => {
            const resetSchedule = {};
            for (let day = 1; day <= 7; day++) {
                resetSchedule[day] = Array(14).fill(null);
            }
            return resetSchedule;
        });
    };

    return (
        <div className="w-11/12 max-w-6xl mx-auto bg-white rounded-lg shadow-md p-4">
            <header className="flex justify-between items-center p-4 bg-gray-100 border-b-2 border-gray-200">
                <h1 className="text-lg font-medium">預排課表</h1>
                <button
                    className="bg-[rgb(46,46,46)] hover:bg-white hover:text-gray-800 transition-all text-white font-medium text-lg w-20 h-12 mr-[20px] rounded-full"
                    onClick={handleClean}
                >
                    Clean
                </button>
            </header>
            <table className="w-full border-collapse text-center mt-4">
                <thead>
                    <tr>
                        <th className="border border-gray-300 p-4 bg-gray-200">
                            節次
                        </th>
                        {Array.from({ length: 7 }, (_, i) => (
                            <th
                                key={i}
                                className="border border-gray-300 p-4 bg-gray-200"
                            >{`星期${i + 1}`}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {Array.from({ length: 14 }, (_, index) => (
                        <tr key={index}>
                            <td className="border border-gray-300 p-4 bg-white">
                                {index + 1}
                            </td>
                            {Array.from({ length: 7 }, (_, dayIndex) => (
                                <td
                                    key={dayIndex}
                                    className="border border-gray-300 p-4 bg-gray-50"
                                >
                                    {schedule[dayIndex + 1][index] || ""}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ReviseResult;
