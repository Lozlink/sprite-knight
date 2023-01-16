CREATE DATABASE sprite_knight_dev;
\c sprite_knight_dev

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    name TEXT,
    email TEXT,
    password TEXT
);

INSERT INTO users
VALUES
('mark', 'mark@gmail.com', 'helloworld');


CREATE TABLE characters(
    id SERIAL PRIMARY KEY,
    char_name TEXT,
    gender TEXT,
    age INTEGER,
    level TEXT,
    user_id TEXT,
    health INTEGER,
    image TEXT
);

INSERT INTO characters
VALUES 
('Shovel Knight', 'male', 13, 'bronze', 10, '1', 10, 'https://toppng.com//public/uploads/preview/shovel-knight-shovel-knight-pixel-sprite-11562995378oifwzdxehc.png' );


CREATE TABLE monsters(
    id SERIAL PRIMARY KEY,
    mon_name TEXT,
    difficulty TEXT,
    drops TEXT,
    health INTEGER,
    image TEXT
);

INSERT INTO monsters
VALUES
('Golem', 'Gold', 'Silver Sword', 15, 'https://art.pixilart.com/thumb/5b83fa17af18340.png');


CREATE TABLE events(
    id SERIAL PRIMARY KEY,
    event TEXT,
    quote TEXT,
    effect TEXT,  
)

INSERT INTO events
VALUES 
('recieve food', 'You come across an orchard lush with Apples. A moment''s respite in an otherwise treacherous world. Savour it for moments like this do not last', 'Restore health by 50%');
