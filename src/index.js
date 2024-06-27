import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req,res) => {
    const response = '{"text": "Hello from server"}';

    res.send(response);
});

app.listen(port, () =>{
    console.log('Server is running on port' + port);
});

