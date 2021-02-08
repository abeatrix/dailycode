-- --CREATE DATABASE world;

\c world

-- -- SELECT * FROM country LIMIT 5;
-- -- SELECT * FROM countrylanguage LIMIT 5;
-- -- SELECT * FROM city LIMIT 5;

-- -- Clue #1: We recently got word that someone fitting Carmen Sandiego's description has been
-- -- traveling through Southern Europe. She's most likely traveling someplace where she won't be noticed,
-- -- so find the least populated country in Southern Europe, and we'll start looking for her there.

WITH temp (var1) AS (values('Southern Europe'))
SELECT name
FROM country, temp
WHERE region = var1;


CREATE TEMP TABLE temptable AS
SELECT *
FROM country
WHERE population = (SELECT min(population) FROM country WHERE region = 'Southern Europe');

SELECT name, region from temptable;



-- -- -- Clue #2: Now that we're here, we have insight that Carmen was seen attending language classes in
-- -- -- this country's officially recognized language. Check our databases and find out what language is
-- -- -- spoken in this country, so we can call in a translator to work with you.

ALTER TABLE temptable
ADD COLUMN language VARCHAR(50);

INSERT INTO temptable (language)
SELECT language
FROM countrylanguage
WHERE countrycode = (
    SELECT code
    FROM temptable);

SELECT * from temptable;

SELECT name, language, code from temptable;


-- -- -- Clue #3: We have new news on the classes Carmen attended – our gumshoes tell us she's moved on
-- -- -- to a different country, a country where people speak only the language she was learning. Find out which
-- -- --  nearby country speaks nothing but that language.

CREATE TEMP TABLE temptable2 AS
SELECT *
FROM country
    JOIN countrylanguage
        ON country.code = countrylanguage.countrycode
WHERE region = ANY (SELECT region FROM temptable)
AND language = ANY (SELECT language from temptable)
AND countrycode = ANY (SELECT countrycode from countrylanguage GROUP BY countrycode HAVING COUNT(*)=1)
AND NOT code = ALL (SELECT code from temptable);

-- SELECT name from temptable2;

-- -- Clue #4: We're booking the first flight out – maybe we've actually got a chance to catch her this time.
-- -- There are only two cities she could be flying to in the country. One is named the same as the country – that
-- -- would be too obvious. We're following our gut on this one; find out what other city in that country she might
-- --  be flying to.

CREATE TEMP TABLE temptable3 AS
SELECT city.name AS city, country.name AS country
FROM city
    JOIN country
        ON country.code = city.countrycode
WHERE country.name = ANY (SELECT name FROM temptable2) AND NOT city.name = ANY (SELECT name FROM temptable2);

SELECT city from temptable3;

-- -- Clue #5: Oh no, she pulled a switch – there are two cities with very similar names, but in totally different
-- -- parts of the globe! She's headed to South America as we speak; go find a city whose name is like the one we were
-- -- headed to, but doesn't end the same. Find out the city, and do another search for what country it's in. Hurry!

CREATE TEMP TABLE temptable4 AS
SELECT city.name AS city, country.name AS country, country.region AS region, countrycode AS code, country.capital AS capital
FROM city
    JOIN country
        ON country.code = city.countrycode
WHERE city.name LIKE 'Serra%' AND country.region = 'South America';

SELECT city FROM temptable4;

-- -- Clue #6: We're close! Our South American agent says she just got a taxi at the airport, and is headed towards
-- -- the capital! Look up the country's capital, and get there pronto! Send us the name of where you're headed and we'll
-- -- follow right behind you!

CREATE TEMP TABLE capital AS
SELECT *
FROM city
WHERE id = (SELECT capital
FROM temptable4);

-- SELECT * FROM capital;

-- -- Clue #7: She knows we're on to her – her taxi dropped her off at the international airport, and she beat us to
-- -- the boarding gates. We have one chance to catch her, we just have to know where she's heading and beat her to the
-- -- landing dock.

-- -- ?

-- -- Clue #8: Lucky for us, she's getting cocky. She left us a note, and I'm sure she thinks she's very clever, but
-- -- if we can crack it, we can finally put her where she belongs – behind bars.

-- -- Our play date of late has been unusually fun –
-- -- As an agent, I'll say, you've been a joy to outrun.
-- -- And while the food here is great, and the people – so nice!
-- -- I need a little more sunshine with my slice of life.
-- -- So I'm off to add one to the population I find
-- -- In a city of ninety-one thousand and now, eighty five.


-- -- -- We're counting on you, gumshoe. Find out where she's headed, send us the info, and we'll be sure to meet her at the gates with bells on.

SELECT *
FROM city
WHERE population =91084;

-- -- She's in SANTA MONICA, CA, USA!



-- --CREATE DATABASE world;

-- \c world

-- SELECT * FROM country LIMIT 5;
-- SELECT * FROM countrylanguage LIMIT 5;
-- SELECT * FROM city LIMIT 5;

-- Clue #1: We recently got word that someone fitting Carmen Sandiego's description has been
-- traveling through Southern Europe. She's most likely traveling someplace where she won't be noticed,
-- so find the least populated country in Southern Europe, and we'll start looking for her there.

-- SELECT name
-- FROM country
-- WHERE population = (SELECT min(population)
-- FROM country
-- WHERE region = 'Southern Europe');

-- -- OR :D --

-- SELECT name
-- FROM country
-- WHERE region = 'Southern Europe'
-- ORDER BY population LIMIT 1;

-- -- Clue #2: Now that we're here, we have insight that Carmen was seen attending language classes in
-- -- this country's officially recognized language. Check our databases and find out what language is
-- -- spoken in this country, so we can call in a translator to work with you.

-- SELECT language
-- FROM countrylanguage
-- WHERE countrycode = (
--     SELECT code
--     FROM country
--     WHERE region = 'Southern Europe'
--     ORDER BY population LIMIT 1);


-- -- Clue #3: We have new news on the classes Carmen attended – our gumshoes tell us she's moved on
-- -- to a different country, a country where people speak only the language she was learning. Find out which
-- --  nearby country speaks nothing but that language.


-- SELECT name, language, region
-- FROM country
--     JOIN countrylanguage
--         ON country.code = countrylanguage.countrycode
-- WHERE region = 'Southern Europe' AND NOT countrycode = 'VAT' AND language = 'Italian'
-- AND code = ANY (SELECT countrycode FROM countrylanguage GROUP BY countrycode HAVING COUNT(*)=1);


-- -- Clue #4: We're booking the first flight out – maybe we've actually got a chance to catch her this time.
-- -- There are only two cities she could be flying to in the country. One is named the same as the country – that
-- -- would be too obvious. We're following our gut on this one; find out what other city in that country she might
-- --  be flying to.


-- SELECT city.name AS city, country.name AS country
-- FROM city
--     JOIN country
--         ON country.code = city.countrycode
-- WHERE country.name = 'San Marino' AND NOT city.name = 'San Marino';



-- -- Clue #5: Oh no, she pulled a switch – there are two cities with very similar names, but in totally different
-- -- parts of the globe! She's headed to South America as we speak; go find a city whose name is like the one we were
-- -- headed to, but doesn't end the same. Find out the city, and do another search for what country it's in. Hurry!


-- SELECT city.name AS city, country.name AS country, country.region AS region, countrycode AS code
-- FROM city
--     JOIN country
--         ON country.code = city.countrycode
-- WHERE city.name LIKE 'Serra%' AND country.region = 'South America';


-- -- Clue #6: We're close! Our South American agent says she just got a taxi at the airport, and is headed towards
-- -- the capital! Look up the country's capital, and get there pronto! Send us the name of where you're headed and we'll
-- -- follow right behind you!



-- SELECT name
-- FROM city
-- WHERE id = ANY (SELECT capital
-- FROM country
-- WHERE code = 'BRA');

-- -- Clue #7: She knows we're on to her – her taxi dropped her off at the international airport, and she beat us to
-- -- the boarding gates. We have one chance to catch her, we just have to know where she's heading and beat her to the
-- -- landing dock.



-- -- Clue #8: Lucky for us, she's getting cocky. She left us a note, and I'm sure she thinks she's very clever, but
-- -- if we can crack it, we can finally put her where she belongs – behind bars.

-- -- Our play date of late has been unusually fun –
-- -- As an agent, I'll say, you've been a joy to outrun.
-- -- And while the food here is great, and the people – so nice!
-- -- I need a little more sunshine with my slice of life.
-- -- So I'm off to add one to the population I find
-- -- In a city of ninety-one thousand and now, eighty five.


-- -- We're counting on you, gumshoe. Find out where she's headed, send us the info, and we'll be sure to meet her at the gates with bells on.

-- SELECT *
-- FROM city
-- WHERE population =91084;

-- -- -- She's in SANTA MONICA, CA, USA!

