var admin = require("firebase-admin");

var serviceAccount = require("../serviceAccountKey.json");

export const initializeFirebaseApp = () =>{
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
}
