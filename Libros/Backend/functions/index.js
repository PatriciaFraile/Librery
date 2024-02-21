const logger = require("firebase-functions/logger")
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

app.post('/books/add',async(req,res)=>{
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
            const doc = db.collection('books').doc(req.params.id).get()
            const info = await doc.get()
            const response = info.data()
            return res.status(200).json(response)
        } catch (error) {
            return res.status(500).send('Error',error)
        }
    })

})
app.get('/books', async (req, res) => {
    try {
      const snapshot = await db.collection('books').get();
      const items = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      return res.status(200).json(items)
    } catch (error) {
      console.error(error);
      res.status(500).send('Error',error);
    }
  });
  app.put('/books/update/:id',async(req,res)=>{
    try {
        const docu =  db.collection('books').doc(req.params.id);
        await docu.update({
         description: req.body.description
        });
        return res.status(200).json()
    } catch (error) {
       return  res.status(500).send('Error',error)
    }
  
  })
  app.delete('/books/delete/:id',async(req,res)=>{
    try {
        const doc = db.collection('books').doc(req.params.id);
        await doc.delete();
        return res.status(200).json()
    } catch (error) {
        return res.status(500).send('Error',error)
        
    }


  });


exports.app = functions.https.onRequest(app)

