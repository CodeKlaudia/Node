const app = express();

app.get('/', (req, res) => {
    res.send('Hello Code');
});

app.get('/api/nodejs', (req, res) => {
    res.send('Welcome, Code is doing Nodejs with Serverless');
})

app.listen(PORT, HOST);
console.log('Running on http://${HOST}:${PORT}');
