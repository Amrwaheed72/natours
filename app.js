import express from 'express';


const app = express();

const port = 3000;

app.get('/', (req, res) => {
    res.status(200).json({ message: 'hello from the server ',app:"features" })
})
app.post('/',(req,res)=>{
    res.send('u can post to this input')
})


app.listen(port, () => {
    console.log(`app listening on port ${port}`)
})
