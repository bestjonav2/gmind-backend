const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('testeroni');
});

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`app started on ${port} :)`);
});