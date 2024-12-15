If DB_ID('Class')IS NULL
	create database Class
ELSE
	drop database Class
GO

use Class

create table Teacher(
	name varchar(10),
	gmail varchar(50),
	http char(200),
)
--老師資訊
Insert  into Teacher(name,gmail,http)
values
	  ('杜清敏','chingmiin@ntunhs.edu.tw','https://im.ntunhs.edu.tw/p/412-1054-147.php?Lang=zh-tw'),
	  ('蔡坤孝','derek2023@mail.ntunhs.org','https://im.ntunhs.edu.tw/p/412-1054-147.php?Lang=zh-tw'),
	  ('陳亮均','liangchun@ntunhs.edu.tw','https://im.ntunhs.edu.tw/p/412-1054-147.php?Lang=zh-tw'),
	  ('蔡維河','tsaiweiher@gmail.com','https://im.ntunhs.edu.tw/p/412-1054-147.php?Lang=zh-tw'),
	  ('林劍秋','swordlin58@gmail.com','https://im.ntunhs.edu.tw/p/412-1054-147.php?Lang=zh-tw'),
      ('連中岳','chungyueh@ntunhs.edu.tw','https://im.ntunhs.edu.tw/p/412-1054-147.php?Lang=zh-tw'),
	  ('楊岳','jamesyang0811@gmail.com','https://im.ntunhs.edu.tw/p/412-1054-147.php?Lang=zh-tw'),
	  ('梁昭玉','chaoyu1010@gmail.com','https://im.ntunhs.edu.tw/p/412-1054-147.php?Lang=zh-tw'),
	  ('蘇博玄','pohsuan@ntunhs.edu.tw','https://im.ntunhs.edu.tw/p/412-1054-147.php?Lang=zh-tw');

--------------------------------------------------------------------------------------------------------------
--課程查詢結果
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
----------------------------------------------------------------------------------------------------------------
--系統回報
CREATE TABLE 系統回報 (
   日期 datetime,
   問題描述 char(100),
)
----------------------------------------------------------------------------------------------------------------
--課程評價
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
------------------------------------------------------------------------------------------------------
--學生帳號管理
Create table account
(
	Class Char(10),
	Name varchar(10),
	Account int,
	Password char(10)
)

Insert into account(Class,Name,Account,Password)
Values('22143A','王小明',' 8566','dddd'),
  ('22143A','陳小花',' 3596','aaaa'),
     ('22143A','野獸先輩',' 114514','bbbb'),
  ('22143A','張大強','5233','cccc');

select* from Teacher
select* from 課程查詢結果
select* from 系統回報
select* from 課程評價
select* from account

