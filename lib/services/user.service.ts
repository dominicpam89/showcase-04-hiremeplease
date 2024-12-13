import { collection, doc, getDoc } from "firebase/firestore";
import { db } from "@/firebase.config";

const COLLECTION_NAME = "users";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const DOC_REF = collection(db, COLLECTION_NAME);

export async function getUserNameById(uid: string) {
	try {
		const docRef = doc(db, "users", uid);
		const docSnap = await getDoc(docRef);
		const user = docSnap.data() as TypeStoredUser;
		return user.name;
	} catch (error) {
		console.error(error);
		throw error;
	}
}
