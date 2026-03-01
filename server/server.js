import express from 'express';
import giftsRouter from './routes/gifts.js';

//Initialize the Express app
const app = express();

/*serve static files from public/scripts dir by settin up
middleware using default express.static f(x) */
app.use('/public', express.static('./public'));
app.use('/scripts', express.static('./public/scripts'));
app.use('/gifts', giftsRouter);

/*Define a rte for server root URL with params
to help quickly see that server is working and
responding correctly*/
app.get('/', (req, res) => {
    res.status(200).send('<h1 style="text-align: center; margin-top: 50px;">UnEarthed API</h1>')
});

//Start a server port (env var assing toe PORT or hardcoded 3001)
const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`🚀 Server listening on http://localhost:${PORT}`)
});
