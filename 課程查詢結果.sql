CREATE DATABASE �d�ߵ��G;
USE �d�ߵ��G;

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

CREATE TABLE �t�Φ^�� (
   ��� datetime,
   ���D�y�z char(100),
)

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


SELECT *
FROM �ҵ{�d�ߵ��G

SELECT *
FROM �t�Φ^��

SELECT *
FROM �ҵ{����

INSERT �ҵ{�d�ߵ��G ( �s��, ���u�s��, �ѦW )
VALUES ( 64,2, '�g�پ�')