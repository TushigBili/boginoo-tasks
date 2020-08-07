const functions = require('firebase-functions');
const admin = require('firebase-admin')

admin.initializeApp()
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest(async (request, response) => {
//     // response.send("Hello from Firebase!");
//     let total = await admin.auth().listUsers(1000).then((res) => res.users)
//     response.send(`This website's user number is ${total.length}`)
// });

exports.myFunction = functions.firestore.onCreate(async (change, context) => {
    let onCreate = await admin.firestore.collection()
})
