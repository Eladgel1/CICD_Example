import cors from 'cors';
import express from 'express';

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req,res) => {
    const response = '{"text": "Hello from server"}';

    res.send(response);
});

app.post('/names', (req,res) => {
    const names = req.body;

    console.log('Got new post message:' ,JSON.stringify(names));

    res.json({message: 'Hey I got your message!', names: names});
});

app.listen(port, () =>{
    console.log('Server is running on port' + port);
});

