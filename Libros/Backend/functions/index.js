const logger = require("firebase-functions/logger");
const admin = require('firebase-admin')
const functions = require('firebase-functions')
const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())
admin.initializeApp({
    credential: admin.credential.cert('./permissions.json'),
    databaseURL: "https://libreria-294d6-default-rtdb.firebaseio.com"
})
const db = admin.firestore()
app.get('/hello',(req,res)=>{
     return res.status(200).json({message:'Hello wORD'})
})
app.post('/books/add',async(req,res)=>{
    console.log(req.body.title);
    try{
        await db.collection('books').doc('/'+req.body.id + '/')
        .create({title:req.body.title, author: req.body.author , description : req.body.description});
        return res.status(204).json();
    }catch(error){
        console.log(error);
        return res.status(500).send(error)
    }
 
})
app.get('/books/:id',(req,res)=>{
    (async()=>{
        try {
            const doc = db.collection('books').doc(req.params.id)
            const info = await doc.get()
            const response = info.data()
            return res.status(200).json(response)
        } catch (error) {
            return res.status(500).send(error)
        }
    })

})

exports.app = functions.https.onRequest(app)
