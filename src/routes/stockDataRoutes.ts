import axios from 'axios';
import { Router, Response } from 'express';

const router = Router();

const url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=AAPL&apikey=${process.env.API_KEY}`;

router.get('/', (_, res: Response) => {
    res.json('stock data, test endpoint')
})

router.get('/get-data', async (_, res: Response) => {
    try {
        const result = await axios.get(url);
        res.json(result.data['Time Series (Daily)']);
    } catch (error) {
        res.status(400).json({msg: 'Failed to fetch data'});
    }
});

module.exports = router;