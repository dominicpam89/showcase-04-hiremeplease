import { doc, collection, getDoc, getDocs } from "firebase/firestore";
import { db } from "@/firebase.config";

const COLLECTION_NAME = "teatac-answers";
const DOC_REF = collection(db, COLLECTION_NAME);
const DOC = doc(DOC_REF);

export async function getAnswers() {
	try {
		const querySnapshot = await getDocs(DOC_REF);
		let answers: TypeAnswer<"fetch">[] = [];
		querySnapshot.forEach((doc) => {
			// doc.data() is never undefined for query doc snapshots
			const data = doc.data() as TypeAnswer<"push">;
			answers.push({
				id: doc.id,
				answer: data.answer,
				questionId: data.questionId,
				uid: data.uid,
			} as TypeAnswer<"fetch">);
		});
		return answers;
	} catch (error) {
		console.error("debug answer.service: ", error);
		throw error;
	}
}

export async function getAnswerById(id: string) {
	try {
		const docRef = doc(db, COLLECTION_NAME, id);
		const docSnap = await getDoc(docRef);
		if (docSnap.exists()) {
			const data = docSnap.data();
			const answer: TypeAnswer<"fetch"> = {
				id,
				answer: data.answer,
				questionId: data.questionId,
				uid: data.uid,
			};
			return answer;
		} else {
			throw new Error("debug answer.service: No answer found");
		}
	} catch (error) {
		console.error("debug answer.service: ", error);
		throw error;
	}
}
