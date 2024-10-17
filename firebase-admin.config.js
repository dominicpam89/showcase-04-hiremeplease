import admin from "firebase-admin";
import serviceAccount from "./firebase.config.json";

export const adminApp = admin.initializeApp({
	credential: admin.credential.cert(serviceAccount),
});