import express from 'express';
import path from 'path'; //utilitied for work w/file dir & paths
import {fileURLToPath} from 'url'; //method in url module
import giftData from '../data/gifts.js'

//convert metadata URL to file path
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

//Create Express router
const router = express.Router();

//Create GET route at / endpoint that reponds w/200 status and sends gift JSON
router.get('/', (req, res) => {
    res.status(200).json(giftData)
})

//Another GET route at /:giftID endpoint for gift.html page
router.get('/:giftId', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, '../public/gift.html'))
})

export default router;
