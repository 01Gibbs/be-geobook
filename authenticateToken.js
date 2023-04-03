import { initializeApp } from "firebase-admin/app"
import serviceAccount from './authkey.json'

initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://geobook2.firebaseapp.com'
})

async function decodeIDToken(req, res, next) {
    const header = req.headers?.authorization
    if (header !== 'Bearer null' && req.headers?.authorization?.startsWith('Bearer ')) {
        const idToken = req.headers.authorization.split('Bearer ')[1];

        try {
            const decodedToken = await admin.auth().verifyIdToken(idToken)
            req['currentUser'] = decodedToken
        } catch (err) {
            console.log(err)
        }
    }
    next()
}

export default decodeIDToken