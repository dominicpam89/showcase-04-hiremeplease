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

export async function getQuestions(): Promise<TypeQuestion<"fetch">[]> {
	try {
		// get all questions
		const querySnapshot = await getDocs(DOC_REF);

		// temporary variable to store question later
		let questions: TypeQuestion<"fetch">[] = [];

		// transform firebase doc into desirable doc
		querySnapshot.forEach(async (doc) => {
			const data = doc.data() as TypeQuestion<"push">;

			// transform answer's id into real answer
			const answers: string[] = [];
			data.answerIds.forEach(async (id) => {
				const data = await getAnswerById(id);
				answers.push(data.answer);
			});
			// store to variable questions
			questions.push({
				id: doc.id,
				question: data.question,
				answers,
				tags: data.tags,
				uid: data.uid,
			});
		});
		return questions;
	} catch (error) {
		console.error("debug question.service: ", error);
		throw error;
	}
}

export async function addQuestion(question: TypeQuestion<"push">) {}
