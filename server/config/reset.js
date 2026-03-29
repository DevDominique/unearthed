import { pool } from './database.js';
import './dotenv.js';
import giftData from '../data/gifts.js';

//Create gifts table

const createGiftsTable = async () => {

   const createTableQuery = `
        DROP TABLE IF EXISTS gifts;

        CREATE TABLE IF NOT EXISTS gifts (
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            pricePoint VARCHAR(255) NOT NULL,
            audience VARCHAR(255) NOT NULL,
            image VARCHAR(255) NOT NULL,
            description TEXT NOT NULL,
            submittedBy VARCHAR(255) NOT NULL,
            submittedOn TIMESTAMP NOT NULL
        )
    `
    try {
        const res = await pool.query(createTableQuery);
        console.log('🥳 Gifts table created successfully!');
    }
    catch (err) {
        console.error('⚠️ Error creating gifts table:', err);
    }
}

//Populate gifts table with data from gifts.js

const seedGiftsTable = async () => {
    await createGiftsTable();

    giftData.forEach((gift) => {
        const insertQuery = {
            text: 'INSERT INTO gifts (name, pricePoint, audience, image, description, submittedBy, submittedOn) VALUES ($1, $2, $3, $4, $5, $6, $7)'
        }

        const values = [
            gift.name,
            gift.pricePoint,
            gift.audience,
            gift.image,
            gift.description,
            gift.submittedBy,
            gift.submittedOn
        ]

    //Query the pool with 'insertQuery' and 'values'

        pool.query(insertQuery, values, (err, res) => {
            if (err) {
                console.error('⚠️ Error inserting gift: ', err);
                return;
            }

            console.log(`✅ ${gift.name} added successfully`);
        })
    });
}

seedGiftsTable();
