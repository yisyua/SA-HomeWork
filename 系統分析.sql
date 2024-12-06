create database React
use React
create table Teacher(
	name varchar(10),
	gmail varchar(50),
	http char(200),
)
--drop table Teacher
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

select* from Teacher


create table student(
	name varchar(10),
	account char(10),
	password char(10),
)
-----------

create table course(
	學期 varchar(10),
	學制 char(10),
	課別 char(10),
	節次 char(10),
	系所 varchar(10),
	年級 varchar(10),
	week1 varchar (10),
	課程內容分類 varchar(10),
	代碼 char(10),
	姓名 varchar(10),
	代碼1 char(10),
	課程  varchar(10),
	代碼2 char(10),
	名稱 varchar(10),
	教室 varchar(10),
	人數 char(10),
)
	


