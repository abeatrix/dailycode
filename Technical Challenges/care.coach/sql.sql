# The healthcare tech company has a MySQL table, named `chats`, recording all
# messages between Health Advocates ("HAs") and clients.

# The schema of table `chats` is as follows:

create table chats
(id int auto_increment primary key,
ha varchar(10),
client varchar(10),
message varchar(255),
timestamp bigint);

# The data of table `chats` is below

insert into chats
values
(1, 'Lily', 'Adam', '@startVideo', 1563733280),
(2, 'Ava', 'Bob', '@startVideo', 1563733283),
(3, 'Susan', 'Ruth', '@startVideo', 1563733290),
(4, 'Lily', 'Adam', 'Good to see you again!', 1563733292),
(5, 'Lily', 'Adam', 'Sure, I can do that for you.', 1563733310),
(6, 'Lily', 'Adam', 'All set! No worries at all.', 1563733330),
(7, 'Lily', 'Adam', '@stopVideo', 1563733334),
(8, 'Ava', 'Bob', 'Yes, that is so funny! haha!', 1563733335),
(9, 'Ava', 'Bob', '@stopVideo', 1563733356),
(10, 'Susan', 'Bob', '@StartVideo', 1563733357),
(11,'Susan', 'Bob', '@stopVideo', 1563733370),
(12,'Susan', 'Ruth', 'Hello, Ruth, are you here?', 1563733371),
(13,'Susan', 'Ruth', '@stopVideo', 1563733378);

# A message can be either a command (e.g., @startVideo, and @stopVideo) or
# a speech phrase sent from the HA to the client. An "interaction" between an
# HA and a client is defined as the messages between that HA/client from
# '@startVideo' to '@stopVideo' (inclusive).

# For example, using the above values, the interaction between Lily and Adam
# is as follows:
# (1, 'Lily', 'Adam', '@startVideo', 1563733280),
# (4, 'Lily', 'Adam', 'Good to see you again!', 1563733292),
# (5, 'Lily', 'Adam', 'Sure, I can do that for you.', 1563733310),
# (6, 'Lily', 'Adam', 'All set! No worries at all.', 1563733330),
# (7, 'Lily', 'Adam', '@stopVideo', 1563733334)

# And the interaction between Ava and Bob is as follows:
# (2, 'Ava', 'Bob', '@startVideo', 1563733283),
# (8, 'Ava', 'Bob', 'Yes, that is so funny! haha!', 1563733335),
# (9,'Ava', 'Bob', '@stopVideo', 1563733356)

# An interaction between an HA and a client is "significant" if its duration is
# at least 30 seconds.

# For each client, please output the timestamp of @stopVideo of the
# last significant interaction, ordering by client alphabetically.

# Based the above data, your query should output the following:
# client last_significant_interaction
# Adam 1563733334
# Bob 1563733356
# Ruth 1563733378

# YOUR SOLUTION MYSQL QUERY HERE
