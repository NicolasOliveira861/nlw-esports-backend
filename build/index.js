import express from 'express';
const app = express();
app.get('/ads', (req, res) => {
    return res.json({
        name: 'teste',
    });
});
app.listen(8080, () => console.log('Server running on http://localhost:8080'));
