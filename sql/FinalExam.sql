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
--�Ѯv��T
Insert  into Teacher(name,gmail,http)
values
	  ('���M��','chingmiin@ntunhs.edu.tw','https://im.ntunhs.edu.tw/p/412-1054-147.php?Lang=zh-tw'),
	  ('���[��','derek2023@mail.ntunhs.org','https://im.ntunhs.edu.tw/p/412-1054-147.php?Lang=zh-tw'),
	  ('���G��','liangchun@ntunhs.edu.tw','https://im.ntunhs.edu.tw/p/412-1054-147.php?Lang=zh-tw'),
	  ('�����e','tsaiweiher@gmail.com','https://im.ntunhs.edu.tw/p/412-1054-147.php?Lang=zh-tw'),
	  ('�L�C��','swordlin58@gmail.com','https://im.ntunhs.edu.tw/p/412-1054-147.php?Lang=zh-tw'),
      ('�s����','chungyueh@ntunhs.edu.tw','https://im.ntunhs.edu.tw/p/412-1054-147.php?Lang=zh-tw'),
	  ('����','jamesyang0811@gmail.com','https://im.ntunhs.edu.tw/p/412-1054-147.php?Lang=zh-tw'),
	  ('��L��','chaoyu1010@gmail.com','https://im.ntunhs.edu.tw/p/412-1054-147.php?Lang=zh-tw'),
	  ('Ĭ�ե�','pohsuan@ntunhs.edu.tw','https://im.ntunhs.edu.tw/p/412-1054-147.php?Lang=zh-tw');

--------------------------------------------------------------------------------------------------------------
--�ҵ{�d�ߵ��G
CREATE TABLE �ҵ{�d�ߵ��G (
   �l�� char(1),
   �s�� char(5),
   �Ǵ� char(5),
   �t�� char(15),
   �~�� char(2),
   �Z�� char(3),
   ��إN�� char(4),
   �ҵ{�W�� char(20),
   �Юv�m�W char(10),
   �W�ҤH�� int,
   �Ǥ��� int,
   �ҧO char(10),
   �a�I char(6),
   �P�� char(5),
   �`�� char(6),
   �d�ݽҵ{���� char(6),
   
)
----------------------------------------------------------------------------------------------------------------
--�t�Φ^��
CREATE TABLE �t�Φ^�� (
   ��� datetime,
   ���D�y�z char(100),
)
----------------------------------------------------------------------------------------------------------------
--�ҵ{����
CREATE TABLE �ҵ{���� (
   �׽ҾǴ� char(6),
   �ҵ{�W�� char(20),
   �W�Ҥ覡���e�W�w char(100),
   �Ҹյ����覡 char(50),
   ���i�Ҹ� char(50),
   ��L�ɥR char(50),
   ��g�ɶ� datetime,
   ��g�� char(10),
   
)
------------------------------------------------------------------------------------------------------
--�ǥͱb���޲z
Create table account
(
	Class Char(10),
	Name varchar(10),
	Account int,
	Password char(10)
)

Insert into account(Class,Name,Account,Password)
Values('22143A','���p��',' 8566','dddd'),
  ('22143A','���p��',' 3596','aaaa'),
     ('22143A','���~����',' 114514','bbbb'),
  ('22143A','�i�j�j','5233','cccc');

select* from Teacher
select* from �ҵ{�d�ߵ��G
select* from �t�Φ^��
select* from �ҵ{����
select* from account

