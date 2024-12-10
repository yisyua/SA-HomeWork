import React from "react";

export default function Result() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-300">
      <div className="flex flex-col items-center w-3/4 h-[550px] rounded-3xl">
        {/* Title */}
        <div className="flex items-center justify-start w-[960px] h-[50px] bg-[rgb(46,46,46)] text-white rounded-xl mt-6 px-4">
          <div className="w-[70px] h-[40px] mx-[30px] flex items-center justify-center">科目代號</div>
          <div className="w-[70px] h-[40px] ml-[40px] mr-[40px] flex items-center justify-center">課程名稱</div>
          <div className="w-[70px] h-[40px] mx-[20px] flex items-center justify-center">教師姓名</div>
          <div className="w-[60px] h-[40px] mx-[15px] flex items-center justify-center">學分數</div>
          <div className="w-[100px] h-[40px] mx-[25px] flex items-center justify-center">課別</div>
          <div className="w-[60px] h-[40px] ml-[-5px] mr-[10px] flex items-center justify-center">地點</div>
          <div className="w-[70px] h-[40px]  ml-[10px] mr-[15px] flex items-center justify-center">星期</div>
          <div className="w-[60px] h-[40px] flex items-center justify-center">節次</div>
        </div>

        <div className="flex flex-col items-center w-[1000px] h-[400px] bg-[rgb(46,46,46)] rounded-lg mt-4 overflow-y-auto scrollbar-thin scrollbar-track-gray-600 scrollbar-thumb-gray-600">

              <div className="flex items-center justify-start w-[890px] text-white my-2"
              >
                <div className="w-[50px] h-[40px] mx-[15px] flex items-center justify-center" >0133</div>
                <div className="w-[200px] h-[40px] mr-[-7px] ml-[10px] flex items-center justify-center">資料庫管理系統</div>
                <div className="w-[70px] h-[40px] mr-[-7px] ml-[0px] flex items-center justify-center">連中岳</div>
                <div className="w-[20px] h-[40px] mr-[-7px] ml-[60px] flex items-center justify-center">3</div>
                <div className="w-[100px] h-[40px] mr-[-7px] ml-[70px] flex items-center justify-center">
                  專業必修
                </div>
                <div className="w-[50px] h-[40px] mr-[0px] ml-[30px] flex items-center justify-center">B210</div>
                <div className="w-[60px] h-[40px] mr-[0px] ml-[30px] flex items-center justify-center">星期五</div>
                <div className="w-[40px] h-[40px] mr-[0px] ml-[30px] flex items-center justify-center">2~4</div>
                <button className="w-[60px] h-[35px] border-2 border-white mr-[0px] ml-[10px] bg-[rgb(46,46,46)] text-white rounded-full hover:bg-white hover:text-[rgb(46,46,46)] font-semibold transition-all">
                  選取
                </button>
              </div>
              <div className="flex items-center justify-start w-[890px] text-white my-2"
              >
                <div className="w-[50px] h-[40px] mx-[15px] flex items-center justify-center" >0035</div>
                <div className="w-[200px] h-[40px] mr-[-7px] ml-[10px] flex items-center justify-center">組織行為學</div>
                <div className="w-[70px] h-[40px] mr-[-7px] ml-[0px] flex items-center justify-center">杜清敏</div>
                <div className="w-[20px] h-[40px] mr-[-7px] ml-[60px] flex items-center justify-center">3</div>
                <div className="w-[100px] h-[40px] mr-[-7px] ml-[70px] flex items-center justify-center">
                  專業選修
                </div>
                <div className="w-[50px] h-[40px] mr-[0px] ml-[30px] flex items-center justify-center">F402</div>
                <div className="w-[60px] h-[40px] mr-[0px] ml-[30px] flex items-center justify-center">星期四</div>
                <div className="w-[40px] h-[40px] mr-[0px] ml-[30px] flex items-center justify-center">6~8</div>
                <button className="w-[60px] h-[35px] border-2 border-white mr-[0px] ml-[10px] bg-[rgb(46,46,46)] text-white rounded-full hover:bg-white hover:text-[rgb(46,46,46)] font-semibold transition-all">
                  選取
                </button>
              </div>
              <div className="flex items-center justify-start w-[890px] text-white my-2"
              >
                <div className="w-[50px] h-[40px] mx-[15px] flex items-center justify-center" >0036</div>
                <div className="w-[200px] h-[40px] mr-[-7px] ml-[10px] flex items-center justify-center">健康經濟學</div>
                <div className="w-[70px] h-[40px] mr-[-7px] ml-[0px] flex items-center justify-center">陳亮均</div>
                <div className="w-[20px] h-[40px] mr-[-7px] ml-[60px] flex items-center justify-center">2</div>
                <div className="w-[100px] h-[40px] mr-[-7px] ml-[70px] flex items-center justify-center">
                  專業選修
                </div>
                <div className="w-[50px] h-[40px] mr-[0px] ml-[30px] flex items-center justify-center">G201</div>
                <div className="w-[60px] h-[40px] mr-[0px] ml-[30px] flex items-center justify-center">星期三</div>
                <div className="w-[40px] h-[40px] mr-[0px] ml-[30px] flex items-center justify-center">6~7</div>
                <button className="w-[60px] h-[35px] border-2 border-white mr-[0px] ml-[10px] bg-[rgb(46,46,46)] text-white rounded-full hover:bg-white hover:text-[rgb(46,46,46)] font-semibold transition-all">
                  選取
                </button>
              </div>
              <div className="flex items-center justify-start w-[890px] text-white my-2"
              >
                <div className="w-[50px] h-[40px] mx-[15px] flex items-center justify-center" >0131</div>
                <div className="w-[200px] h-[40px] mr-[-7px] ml-[10px] flex items-center justify-center">網路程式設計</div>
                <div className="w-[70px] h-[40px] mr-[-7px] ml-[0px] flex items-center justify-center">蔡坤孝</div>
                <div className="w-[20px] h-[40px] mr-[-7px] ml-[60px] flex items-center justify-center">3</div>
                <div className="w-[100px] h-[40px] mr-[-7px] ml-[70px] flex items-center justify-center">
                  專業選修
                </div>
                <div className="w-[50px] h-[40px] mr-[0px] ml-[30px] flex items-center justify-center">F602</div>
                <div className="w-[60px] h-[40px] mr-[0px] ml-[30px] flex items-center justify-center">星期一</div>
                <div className="w-[40px] h-[40px] mr-[0px] ml-[30px] flex items-center justify-center">5~7</div>
                <button className="w-[60px] h-[35px] border-2 border-white mr-[0px] ml-[10px] bg-[rgb(46,46,46)] text-white rounded-full hover:bg-white hover:text-[rgb(46,46,46)] font-semibold transition-all">
                  選取
                </button>
              </div>
              <div className="flex items-center justify-start w-[890px] text-white my-2"
              >
                <div className="w-[50px] h-[40px] mx-[15px] flex items-center justify-center" >1459</div>
                <div className="w-[200px] h-[40px] mr-[-7px] ml-[10px] flex items-center justify-center">商業智慧</div>
                <div className="w-[70px] h-[40px] mr-[-7px] ml-[0px] flex items-center justify-center">杜清敏</div>
                <div className="w-[20px] h-[40px] mr-[-7px] ml-[60px] flex items-center justify-center">3</div>
                <div className="w-[100px] h-[40px] mr-[-7px] ml-[70px] flex items-center justify-center">
                  專業選修
                </div>
                <div className="w-[50px] h-[40px] mr-[0px] ml-[30px] flex items-center justify-center">F602</div>
                <div className="w-[60px] h-[40px] mr-[0px] ml-[30px] flex items-center justify-center">星期二</div>
                <div className="w-[40px] h-[40px] mr-[0px] ml-[30px] flex items-center justify-center">2~4</div>
                <button className="w-[60px] h-[35px] border-2 border-white mr-[0px] ml-[10px] bg-[rgb(46,46,46)] text-white rounded-full hover:bg-white hover:text-[rgb(46,46,46)] font-semibold transition-all">
                  選取
                </button>
              </div>
              <div className="flex items-center justify-start w-[890px] text-white my-2"
              >
                <div className="w-[50px] h-[40px] mx-[15px] flex items-center justify-center" >1568</div>
                <div className="w-[200px] h-[40px] mr-[-7px] ml-[10px] flex items-center justify-center">健康照護物聯網導論</div>
                <div className="w-[70px] h-[40px] mr-[-7px] ml-[0px] flex items-center justify-center">洪論評</div>
                <div className="w-[20px] h-[40px] mr-[-7px] ml-[60px] flex items-center justify-center">3</div>
                <div className="w-[100px] h-[40px] mr-[-7px] ml-[70px] flex items-center justify-center">
                  專業選修
                </div>
                <div className="w-[50px] h-[40px] mr-[0px] ml-[30px] flex items-center justify-center">F602</div>
                <div className="w-[60px] h-[40px] mr-[0px] ml-[30px] flex items-center justify-center">星期一</div>
                <div className="w-[40px] h-[40px] mr-[0px] ml-[30px] flex items-center justify-center">2~4</div>
                <button className="w-[60px] h-[35px] border-2 border-white mr-[0px] ml-[10px] bg-[rgb(46,46,46)] text-white rounded-full hover:bg-white hover:text-[rgb(46,46,46)] font-semibold transition-all">
                  選取
                </button>
              </div>
              <div className="flex items-center justify-start w-[890px] text-white my-2"
              >
                <div className="w-[50px] h-[40px] mx-[15px] flex items-center justify-center" >1765</div>
                <div className="w-[200px] h-[40px] mr-[-7px] ml-[10px] flex items-center justify-center">機器學習程式設計</div>
                <div className="w-[70px] h-[40px] mr-[-7px] ml-[0px] flex items-center justify-center">陳彥宏</div>
                <div className="w-[20px] h-[40px] mr-[-7px] ml-[60px] flex items-center justify-center">3</div>
                <div className="w-[100px] h-[40px] mr-[-7px] ml-[70px] flex items-center justify-center">
                  專業選修
                </div>
                <div className="w-[50px] h-[40px] mr-[0px] ml-[30px] flex items-center justify-center">F602</div>
                <div className="w-[60px] h-[40px] mr-[0px] ml-[30px] flex items-center justify-center">星期三</div>
                <div className="w-[40px] h-[40px] mr-[0px] ml-[30px] flex items-center justify-center">2~4</div>
                <button className="w-[60px] h-[35px] border-2 border-white mr-[0px] ml-[10px] bg-[rgb(46,46,46)] text-white rounded-full hover:bg-white hover:text-[rgb(46,46,46)] font-semibold transition-all">
                  選取
                </button>
              </div>
              <div className="flex items-center justify-start w-[890px] text-white my-2"
              >
                <div className="w-[50px] h-[40px] mx-[15px] flex items-center justify-center" >0080</div>
                <div className="w-[200px] h-[40px] mr-[-7px] ml-[10px] flex items-center justify-center">作業系統</div>
                <div className="w-[70px] h-[40px] mr-[-7px] ml-[0px] flex items-center justify-center">吳承翰</div>
                <div className="w-[20px] h-[40px] mr-[-7px] ml-[60px] flex items-center justify-center">3</div>
                <div className="w-[100px] h-[40px] mr-[-7px] ml-[70px] flex items-center justify-center">
                  專業必修
                </div>
                <div className="w-[50px] h-[40px] mr-[0px] ml-[30px] flex items-center justify-center">B210</div>
                <div className="w-[60px] h-[40px] mr-[0px] ml-[30px] flex items-center justify-center">星期二</div>
                <div className="w-[40px] h-[40px] mr-[0px] ml-[30px] flex items-center justify-center">8~10</div>
                <button className="w-[60px] h-[35px] border-2 border-white mr-[0px] ml-[10px] bg-[rgb(46,46,46)] text-white rounded-full hover:bg-white hover:text-[rgb(46,46,46)] font-semibold transition-all">
                  選取
                </button>
              </div>

        </div>
      </div>
    </div>
  );
}
