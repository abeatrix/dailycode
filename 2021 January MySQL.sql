-- SQL BASIC SELECT
-- https://www.hackerrank.com/domains/sql?filters%5Bsubdomains%5D%5B%5D=select
--+-------------+------------+
--| Field       |   Type     |
--+-------------+------------+
--| ID          | INTEGER    |
--| CITY        | VARCHAR(21)|
--| STATE       | VARCHAR(2) |
--| LAT_N       | NUMERIC    |
--| LONG_W      | NUMERIC    |
--+-------------+------------+

SELECT *
FROM CITY
-- Query all attributes of every Japanese city in the CITY table. The COUNTRYCODE for Japan is JPN.
WHERE COUNTRYCODE = "JPN";

-- Query the names of all the Japanese cities in the CITY table. The COUNTRYCODE for Japan is JPN.
SELECT NAME FROM CITY WHERE COUNTRYCODE = "JPN";

-- Query a list of CITY and STATE from the STATION table.
SELECT CITY, STATE FROM STATION;

-- Query a list of CITY names from STATION for cities that have an even ID number. Print the results in any order, but exclude duplicates from the answer.
SELECT DISTINCT CITY FROM STATION WHERE mod(ID, 2)=0 ORDER BY CITY;

--Fnd the difference between the total number of CITY entries in the table and the number of distinct CITY entries in the table.
SELECT (COUNT(CITY) - COUNT(DISTINCT CITY)) FROM STATION;

--Query the two cities in STATION with the shortest and longest CITY names, as well as their respective lengths (i.e.: number of characters in the name). If there is more than one smallest or largest city, choose the one that comes first when ordered alphabetically.
SELECT CITY, LENGTH(CITY) FROM STATION ORDER BY LENGTH(CITY), CITY LIMIT 1;
SELECT CITY, LENGTH(CITY) FROM STATION ORDER BY LENGTH(CITY) DESC, CITY LIMIT 1;

--Query the list of CITY names starting with vowels (i.e., a, e, i, o, or u) from STATION. Your result cannot contain duplicates.
SELECT DISTINCT CITY FROM STATION WHERE UPPER(SUBSTR(CITY,1,1)) IN ("A","E","I","O","U");

--Query the list of CITY names ending with vowels (a, e, i, o, u) from STATION. Your result cannot contain duplicates.
SELECT DISTINCT CITY FROM STATION WHERE UPPER(SUBSTR(CITY,LENGTH(CITY),LENGTH(CITY))) IN ("A","E","I","O","U");
SELECT DISTINCT CITY FROM STATION WHERE SUBSTR(CITY, -1) IN ("A","E","I","O","U");
SELECT DISTINCT CITY FROM STATION WHERE CITY REGEXP '[AEIOU]$';


--Query the list of CITY names from STATION which have vowels (i.e., a, e, i, o, and u) as both their first and last characters. Your result cannot contain duplicates.
SELECT DISTINCT CITY FROM STATION WHERE CITY  RLIKE '^[AEIOU].*[AEIOU]$';
--^[AEIOU] = Start with ANY of the vowels / .* = any characters at any times / [AEIOU]$  // End with ANY of the vowels

--Query the list of CITY names from STATION that do not start with vowels. Your result cannot contain duplicates.
SELECT DISTINCT CITY FROM STATION WHERE SUBSTR(CITY, 1,1) NOT IN ("A","E","I","O","U");

--Query the list of CITY names from STATION that do not end with vowels. Your result cannot contain duplicates.
SELECT DISTINCT CITY FROM STATION WHERE SUBSTR(CITY, -1) NOT IN ("A","E","I","O","U");

-- Query the list of CITY names from STATION that either do not start with vowels or do not end with vowels. Your result cannot contain duplicates.
SELECT DISTINCT CITY FROM STATION WHERE SUBSTR(CITY, 1,1) NOT IN ("A","E","I","O","U") OR SUBSTR(CITY, -1) NOT IN ("A","E","I","O","U");
SELECT DISTINCT(CITY) FROM STATION WHERE CITY NOT RLIKE '^[aeiou]' OR CITY NOT RLIKE '[aeiou]$';

-- Query the list of CITY names from STATION that either do not start with vowels and do not end with vowels. Your result cannot contain duplicates.
SELECT DISTINCT(CITY) FROM STATION WHERE CITY NOT RLIKE '^[AEIOU]' AND CITY NOT RLIKE '[AEIOU]$';

--STUDENTS
--+-------------+------------+
--| Column      |   Type     |
--+-------------+------------+
--| ID          | INTEGER    |
--| NAME        | STRING     |
--| MARKS       | INTEGER    |
--+-------------+------------+

--Query the Name of any student in STUDENTS who scored higher than  Marks. Order your output by the last three characters of each name. If two or more students both have names ending in the same last three characters (i.e.: Bobby, Robby, etc.), secondary sort them by ascending ID.
SELECT NAME FROM STUDENTS WHERE MARKS > 75 ORDER BY SUBSTR(NAME, -3, LENGTH(NAME)), ID;
SELECT NAME FROM STUDENTS WHERE MARKS > 75 ORDER BY RIGHT(NAME, 3), ID;

-- Ketty gives Eve a task to generate a report containing three columns: Name, Grade and Mark. Ketty doesn't want the NAMES of those students who received a grade lower than 8.
--The report must be in descending order by grade -- i.e. higher grades are entered first.
--If there is more than one student with the same grade (8-10) assigned to them, order those particular students by their name alphabetically.
--Finally, if the grade is lower than 8, use "NULL" as their name and list them by their grades in descending order.
--If there is more than one student with the same grade (1-7) assigned to them, order those particular students by their marks in ascending order.

-- Write a query to help Eve. (WIP)
SELECT
CASE
    WHEN GRADES.GRADE >7 THEN NAME
    ELSE NULL
END AS NAME, GRADES.GRADE, MARKS
FROM STUDENTS
JOIN GRADES ON STUDENTS.MARKS BETWEEN GRADES.MIN_MARK and GRADES.MAX_MARK
ORDER BY GRADES.GRADE DESC, STUDENTS.NAME;


--EMPLOYEE
--+-------------+------------+
--| Field       |   Type     |
--+-------------+------------+
--| EMPLOYEE_ID | INTEGER    |
--| NAME        | STRING     |
--| MONTHS      | INTEGER    |
--| SALARY      | INTEGER    |
--+-------------+------------+

--Write a query that prints a list of employee names (i.e.: the name attribute) from the Employee table in alphabetical order.
SELECT NAME FROM EMPLOYEE ORDER BY NAME;

-- Write a query that prints a list of employee names (i.e.: the name attribute) for employees in Employee having a salary greater than 2000 per month who have been employees for less than 10 months. Sort your result by ascending employee_id.
SELECT NAME FROM EMPLOYEE WHERE SALARY > 2000 AND MONTHS < 10 ORDER BY EMPLOYEE_ID;

-- Top Competitors
-- https://www.hackerrank.com/challenges/full-score/problem?h_r%5B%5D
-- Julia just finished conducting a coding contest, and she needs your help assembling the leaderboard!
-- Write a query to print the respective hacker_id and name of hackers who achieved full scores for more than one challenge.
-- Order your output in descending order by the total number of challenges in which the hacker earned a full score.
-- If more than one hacker received full scores in same number of challenges, then sort them by ascending hacker_id.

-- Hackers: The hacker_id is the id of the hacker, and name is the name of the hacker.
--+-------------+------------+
--| Field       |   Type     |
--+-------------+------------+
--| HACKER_ID   | INTEGER    |
--| NAME        | STRING     |
--+-------------+------------+

-- Difficulty: The difficult_level is the level of difficulty of the challenge, and score is the score of the challenge for the difficulty level.
--+------------------+-----------------+
--| Field            |        Type     |
--+------------------+-----------------+
--| DIFFICULTY_LEVEL |      INTEGER    |
--| SCORE            |      INTEGER    |
--+------------------+-----------------+

--Challenges: The challenge_id is the id of the challenge, the hacker_id is the id of the hacker who created the challenge, and difficulty_level is the level of difficulty of the challenge.
--+------------------+-----------------+
--| Field            |        Type     |
--+------------------+-----------------+
--| CHALLENGE_ID     |      INTEGER    |
--| HACK_ID          |      INTEGER    |
--| DIFFICULTY_LEVEL |      INTEGER    |
--+------------------+-----------------+

--Submissions: The submission_id is the id of the submission, hacker_id is the id of the hacker who made the submission, challenge_id is the id of the challenge that the submission belongs to, and score is the score of the submission.
--+------------------+-----------------+
--| Field            |        Type     |
--+------------------+-----------------+
--| SUBMISSION_ID    |      INTEGER    |
--| HACK_ID          |      INTEGER    |
--| CHALLENGE_ID     |      INTEGER    |
--| SCORE            |      INTEGER    |
--+------------------+-----------------+

SELECT H.HACKER_ID , H.NAME
FROM SUBMISSIONS S
JOIN HACKERS H ON H.HACKER_ID=S.HACKER_ID
JOIN CHALLENGES C ON C.CHALLENGE_ID=S.CHALLENGE_ID
JOIN DIFFICULTY D ON D.DIFFICULTY_LEVEL=C.DIFFICULTY_LEVEL
WHERE D.SCORE=S.SCORE
GROUP BY H.HACKER_ID , H.NAME
HAVING COUNT(S.SCORE)>1
ORDER BY COUNT(S.SCORE) DESC, S.HACKER_ID;

--The total score of a hacker is the sum of their maximum scores for all of the challenges.
--Write a query to print the hacker_id, name, and total score of the hackers ordered by the descending score.
--If more than one hacker achieved the same total score, then sort the result by ascending hacker_id.
--Exclude all hackers with a total score of 0 from your result.
SELECT S.HACKER_ID, H.NAME, SUM(S.SCORE) AS TOTAL
FROM SUBMISSIONS S
JOIN HACKERS H ON H.HACKER_ID=S.HACKER_ID
WHERE TOTAL!=0
ORDER BY TOTAL DESC, S.HACKER_ID;

-- Ollivander's Inventory
-- Harry Potter and his friends are at Ollivander's with Ron, finally replacing Charlie's old broken wand.
-- Hermione decides the best way to choose is by determining the minimum number of gold galleons needed to buy each non-evil wand of high power and age.
-- Write a query to print the id, age, coins_needed, and power of the wands that Ron's interested in, sorted in order of descending power.
-- If more than one wand has same power, sort the result in order of descending age.

--+------------------+-----------------+ +------------------+-----------------+
--| Field            |        Type     || Field            |        Type     |
--+------------------+-----------------++------------------+-----------------+
--| ID               |      INTEGER    || CODE             |      INTEGER    |
--| CODE             |      INTEGER    || AGE              |      INTEGER    |
--| COINS_NEEDED     |      INTEGER    || IS_EVIL          |      INTEGER    |
--| POWER            |      INTEGER    ||                  |                 |
--+------------------+-----------------++------------------+-----------------+

SELECT W.ID, WP.AGE, W.COINS_NEEDED, W.POWER
FROM WANDS W
INNER JOIN WANDS_PROPERTY WP
ON WP.CODE=W.CODE
WHERE WP.IS_EVIL=0 AND W.COINS_NEEDED=(
    SELECT MIN(COINS_NEEDED)
    FROM WANDS HW INNER JOIN WANDS_PROPERTY HWP
    ON HW.CODE=HWP.CODE
    WHERE HW.POWER = W.POWER AND HWP.AGE = WP.AGE)
ORDER BY W.POWER DESC, WP.AGE DESC;

-- TEMP TABLE
CREATE TEMPORARY TABLE HARRY
SELECT MIN(COINS_NEEDED) FROM WANDS HW INNER JOIN WANDS_PROPERTY HWP
ON WP.CODE=W.CODE
WHERE HW.POWER = WANDS.POWER AND HWP.AGE = WP.AGE;

SELECT W.ID, WP.AGE, W.COINS_NEEDED, W.POWER
FROM WANDS W
INNER JOIN WANDS_PROPERTY WP
ON WP.CODE=W.CODE
WHERE WP.IS_EVIL=0 AND W.COINS_NEEDED=HARRY.COINS_NEEDED
ORDER BY W.POWER DESC, AGE DESC;

-- Challenges
-- Julia asked her students to create some coding challenges.
-- Write a query to print the hacker_id, name, and the total number of challenges created by each student.
-- Sort your results by the total number of challenges in descending order.
-- If more than one student created the same number of challenges, then sort the result by hacker_id.
-- If more than one student created the same number of challenges and the count is less than the maximum number of challenges created, then exclude those students from the result.

--HACKERS / CHALLENGES
--+------------------+-----------------+
--| Field            |        Type     |
--+------------------+-----------------+
--| HACK_ID          |      INTEGER    |
--| NAME             |      INTEGER    |
--+------------------+-----------------+
--+------------------+-----------------+
--| Field            |        Type     |
--+------------------+-----------------+
--| CHALLENGE_ID     |      INTEGER    |
--| HACK_ID          |      INTEGER    |
--+------------------+-----------------+
-- MAX
SELECT MAX(CHALCOUNT) MAXCHAL FROM (
SELECT CC.HACKER_ID, COUNT(CC.HACKER_ID) CHALCOUNT
FROM CHALLENGES CC
GROUP BY CC.HACKER_ID) FINDMAX;
--or
SELECT COUNT(CC.cha)
FROM CHALLENGES CC
GROUP BY CC.HACKER_ID
ORDER BY COUNT(*) DESC
LIMIT 1

-- COUNT
(SELECT TTCHAL
FROM (
    SELECT TTC.HACKER_ID, count(TTC.HACKER_ID) as TTCHAL
    FROM CHALLENGES TTC
    GROUP BY TTC.HACKER_ID) CHALNUMS
GROUP BY TTCHAL
HAVING COUNT(TTCHAL)<2) UNIQUE

create table HACKERS(HACKER_ID integer, name varchar(100));
insert into HACKERS(HACKER_ID, name) values(1, "a1");
insert into HACKERS(HACKER_ID, name) values(2, "c2");
insert into HACKERS(HACKER_ID, name) values(3, "d3");
insert into HACKERS(HACKER_ID, name) values(4, "e4");
select * from HACKERS;
create table CHALLENGES(HACKER_ID integer, cha varchar(100));
insert into CHALLENGES(HACKER_ID, cha) values(1, "a");
insert into CHALLENGES(HACKER_ID, cha) values(1, "b");
insert into CHALLENGES(HACKER_ID, cha) values(2, "c");
insert into CHALLENGES(HACKER_ID, cha) values(3, "d");
insert into CHALLENGES(HACKER_ID, cha) values(3, "e");
insert into CHALLENGES(HACKER_ID, cha) values(3, "e");
insert into CHALLENGES(HACKER_ID, cha) values(4, "e");
insert into CHALLENGES(HACKER_ID, cha) values(4, "e");
select * from CHALLENGES;
-- Your code here!
SELECT C.HACKER_ID, H.NAME, COUNT(C.HACKER_ID) AS CHALLENGES_CREATED
FROM CHALLENGES C
INNER JOIN HACKERS H
ON H.HACKER_ID=C.HACKER_ID
GROUP BY C.HACKER_ID, H.NAME
HAVING CHALLENGES_CREATED = (SELECT MAX(CHALCOUNT) MAXCHAL FROM (
    SELECT CCC.HACKER_ID, COUNT(CCC.HACKER_ID) CHALCOUNT
    FROM CHALLENGES CCC
    GROUP BY CCC.HACKER_ID) FINDMAX)
OR CHALLENGES_CREATED NOT IN (SELECT COUNT(C2.CHALLENGE_ID)
    FROM CHALLENGES AS C2
    GROUP BY C2.HACKER_ID
    HAVING C2.HACKER_ID <> C.HACKER_ID)
ORDER BY CHALLENGES_CREATED DESC, C.HACKER_ID;

-- Your code here! doesn't work
SELECT C.HACKER_ID, H.NAME, COUNT(C.HACKER_ID) AS CHALLENGES_CREATED
FROM CHALLENGES C
INNER JOIN HACKERS H ON H.HACKER_ID=C.HACKER_ID
GROUP BY C.HACKER_ID, H.NAME
HAVING CHALLENGES_CREATED !=(SELECT TTCHAL
    FROM (
        SELECT TTC.HACKER_ID, count(TTC.HACKER_ID) as TTCHAL
        FROM CHALLENGES TTC
        GROUP BY TTC.HACKER_ID) CHALNUMS
    GROUP BY TTCHAL
    HAVING COUNT(TTCHAL)<2) UNINUMS
ORDER BY CHALLENGES_CREATED DESC, C.HACKER_ID;

--Population Density Difference
--Query the difference between the maximum and minimum populations in CITY.
SELECT (MAX(POPULATION)-MIN(POPULATION)) FROM CITY;

--The Blunder
--Samantha was tasked with calculating the average monthly salaries for all employees in the EMPLOYEES table, but did not realize her keyboard's 0 key was broken until after completing the calculation. She wants your help finding the difference between her miscalculation (using salaries with any zeroes removed), and the actual average salary.
--Write a query calculating the amount of error (i.e.: actual-miscalculated average monthly salaries), and round it up to the next integer.
SELECT CEIL(AVG(SALARY)-AVG(REPLACE(SALARY,"0",""))) FROM EMPLOYEES;
