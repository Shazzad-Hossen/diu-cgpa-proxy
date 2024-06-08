const express = require('express');
const cors = require('cors');
const { default: axios } = require('axios');
const app = express();
const port=4000;
app.use(cors());
app.use(express.json());


app.get('/',async(req,res)=>{
    res.status(200).send('Yoyo')

})

app.get('/result/semesterList', async(req,res)=>{
    try {
       
        const response=await axios.get('http://software.diu.edu.bd:8006/result/semesterList');
        res.status(200).send(response.data)

        
    } catch (error) {
        res.status(400).send('Error')
        
    }
});
app.get('/result', async(req,res)=>{
    try {
        const response= await axios.get(`http://software.diu.edu.bd:8006/result?semesterId=${req.query.semesterId}&studentId=${req.query.studentId}`);
        res.status(200).send(response.data)
        

        
    } catch (error) {
        res.status(400).send('Error')
        
    }
});
app.get('/result/studentInfo', async(req,res)=>{
    try {
        const response=await axios.get(`http://software.diu.edu.bd:8006/result/studentInfo?studentId=${req.query.studentId}`);
      
        res.status(200).send(response.data)
        

        
    } catch (error) {
        res.status(400).send('Error')
        
    }
});





app.listen(port,()=>console.log('Serever is listening on port:', port))