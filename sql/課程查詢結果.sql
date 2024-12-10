CREATE DATABASE 查詢結果;
USE 查詢結果;

CREATE TABLE 課程查詢結果 (
   追蹤 char(1),
   編號 char(5),
   學期 char(5),
   系所 char(15),
   年級 char(2),
   班組 char(3),
   科目代號 char(4),
   課程名稱 char(20),
   教師姓名 char(10),
   上課人數 int,
   學分數 int,
   課別 char(10),
   地點 char(6),
   星期 char(5),
   節次 char(6),
   查看課程評價 char(6),
   
)

CREATE TABLE 系統回報 (
   日期 datetime,
   問題描述 char(100),
)

CREATE TABLE 課程評價 (
   修課學期 char(6),
   課程名稱 char(20),
   上課方式內容規定 char(100),
   考試評分方式 char(50),
   報告考試 char(50),
   其他補充 char(50),
   填寫時間 datetime,
   填寫者 char(10),
   
)


SELECT *
FROM 課程查詢結果

SELECT *
FROM 系統回報

SELECT *
FROM 課程評價

INSERT 課程查詢結果 ( 編號, 員工編號, 書名 )
VALUES ( 64,2, '經濟學')