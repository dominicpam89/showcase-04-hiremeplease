import { doc, collection, getDoc, getDocs } from "firebase/firestore";
import { db } from "@/firebase.config";
import { getAnswerById } from "./answer.service";

const DOC_REF = collection(db, "teatac-questions");
// const DOC = doc(DOC_REF);

// async function isDocExist() {
// 	try {
// 		const docSnap = await getDoc(DOC);
// 		return docSnap.exists();
// 	} catch (error) {
// 		console.error("debug question.service: ", error);
// 		throw error;
// 	}
// }

export async function getQuestions() {
	try {
		// get all questions
		const querySnapshot = await getDocs(DOC_REF);

		// transform firebase doc into desirable doc
		const questions = await Promise.all(
			querySnapshot.docs.map(async (doc) => {
				const data = doc.data() as TypeQuestion<"push">;
				return {
					id: doc.id,
					...data,
				};
			})
		);
		return questions;
	} catch (error) {
		console.error("debug question.service: ", error);
		throw error;
	}
}

export async function addQuestion(question: TypeQuestion<"push">) {}