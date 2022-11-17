const { initializeApp } = require('firebase/app')
const { getFirestore, setDoc, doc  }= require ('firebase/firestore/lite')

const firebaseConfig = {
  projectId: 'dando-simulator',
  authDomain: 'dando-simulator.firebaseapp.com',
  databaseUrl: 'https://dando-simulator.firebaseio.com',
  storageBucket: 'dando-simulator.appspot.com'
}

const app = initializeApp(firebaseConfig)

const db = getFirestore(app)

const createDocument = async (db, key, data) => await setDoc(doc(db, 'simulations', key), data)

console.log(firebaseConfig)

module.exports = {
  db,
  createDocument
}