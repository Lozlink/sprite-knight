CREATE DATABASE sprite_knight_dev;
\c sprite_knight_dev

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    name TEXT,
    email TEXT,
    password TEXT
);

INSERT INTO users(name, email, password)
VALUES
('mark', 'mark@gmail.com', 'helloworld');


CREATE TABLE characters(
    id SERIAL PRIMARY KEY,
    char_name TEXT,
    gender TEXT,
    age INTEGER,
    level INTEGER,
    user_id TEXT,
    health INTEGER,
    image TEXT
);

INSERT INTO characters(char_name, gender, age, level, user_id, health, image)
VALUES 
('generic male', 'male', 13, 1, '1', 100, 'https://i.imgur.com/fuMSF07l.jpg' ),
('generic female', 'female', 13, 1, '1', 100, 'https://i.imgur.com/CU8PkWAl.jpg');


CREATE TABLE monsters(
    id SERIAL PRIMARY KEY,
    mon_name TEXT,
    difficulty TEXT,
    drops TEXT,
    health INTEGER,
    image TEXT
);

INSERT INTO monsters(mon_name, difficulty, drops, health, image)
VALUES
('Golem', 'gold', 'Gold Sword', 80, 'https://i.imgur.com/k4qCcML.jpg'),
('Mushroom', 'bronze', 'Bronze Helmet', 30, 'https://i.imgur.com/as6bzAwl.jpg'),
('Ooze', 'bronze', 'Bronze Sword', 40, 'https://i.imgur.com/2KVSiipl.jpg'),
('Skeleton', 'silver', 'Silver Sword', 70, 'https://i.imgur.com/8Fa0P49l.jpg'),
('Spider Queen', 'Platinum', 'Platinum Gear', 130, 'https://i.imgur.com/UbTOphll.jpg'),
('Zombie', 'silver', 'Silver Helmet', 60,'https://i.imgur.com/OCDcOILl.jpg'),
('Goblin', 'bronze', 'Bronze Armor', 40, 'https://i.imgur.com/SGhSUQul.jpg'),
('Ogre', 'gold', 'Gold Armor', 80, 'https://i.imgur.com/axmt54pl.jpg'),
('Wyvern Knight', 'gold', 'Gold Helmet', 90, 'https://i.imgur.com/mAWLmhMl.jpg'),
('Troll', 'silver', 'Silver Armor', 60, 'https://i.imgur.com/RzfkTPul.jpg');



CREATE TABLE events(
    id SERIAL PRIMARY KEY,
    event TEXT,
    quote TEXT,
    effect TEXT,
    image TEXT
);

INSERT INTO events(event, quote, effect, image)
VALUES 
('recieve food', 'You come across an orchard lush with Apples. A moment''s respite in an otherwise treacherous world. Savour it for moments like this do not last', 'Restore health by 50%', 'https://i.imgur.com/CrIWojm.png'),
('receive armor', 'You come across a battlefield of old. Graves lay as far as the eye can see. You dredge the past as it may come to be the future. At your feet, a set of armor that seems untouched catches your eye.', 'Receive armor', 'https://i.imgur.com/PnKetKO.png'),
('lose health', 'A sharp wooden spike penetrates your feet. You jump back in surprised, only to step back on another. Truly the luck of a champion', 'lose 30% health', 'https://i.imgur.com/mapSjsZ.png'),
('rest stop', 'An idyllic view that a champion like yourself should not be privy to seeing. A moment to recover and reflect  on the journey; past, present and future', 'recover full health', 'https://i.imgur.com/MiaqKb2.png'),
('fight monster', 'You come across a meadow with Sun rays shining through the trees. Flowers bloom on the plants around you, and birds chirp nested on the trees. Suddenly, you feel a sharp tug and a growl.', 'Fight Monster', 'https://i.imgur.com/mHuJ3wR.png');


-- CHANGE LEVEL TO INTEGER IN FIN