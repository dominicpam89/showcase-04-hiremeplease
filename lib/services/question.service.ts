import { doc, collection, addDoc, getDoc } from "firebase/firestore";
import { db } from "@/firebase.config";

const DOC_REF = doc(collection(db, "teatac", "question"));

async function isDocExist() {
	try {
		const docSnap = await getDoc(DOC_REF);
		return docSnap.exists();
	} catch (error) {
		console.error("debug question.service: ", error);
		throw error;
	}
}

export async function addQuestion(question: TypeQuestion) {}
