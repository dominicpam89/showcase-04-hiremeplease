import {
	doc,
	collection,
	getDoc,
	getDocs,
	query,
	orderBy,
	limit,
	where,
} from "firebase/firestore";
import { db } from "@/firebase.config";

const COLLECTION_NAME = "teatac-answers";
const DOC_REF = collection(db, COLLECTION_NAME);
const DOC = doc(DOC_REF);

export async function getAnswers() {
	try {
		const querySnapshot = await getDocs(DOC_REF);
		const answers = await Promise.all(
			querySnapshot.docs.map((doc) => {
				// doc.data() is never undefined for query doc snapshots
				const answer = doc.data() as TypeAnswer<"raw">;
				return {
					id: doc.id,
					...answer,
				} as TypeAnswer<"fetch">;
			})
		);
		return answers;
	} catch (error) {
		console.error("debug answer.service: ", error);
		throw error;
	}
}

export async function getTopAnswersByQuestionId(
	numLimit: number = 2,
	questionId: string
) {
	try {
		const q = query(
			DOC_REF,
			where("questionId", "==", questionId),
			orderBy("views", "desc"),
			limit(numLimit)
		);
		const querySnapshot = await getDocs(q);
		const answers = await Promise.all(
			querySnapshot.docs.map((doc) => {
				// doc.data() is never undefined for query doc snapshots
				const answer = doc.data() as TypeAnswer<"raw">;
				return {
					id: doc.id,
					...answer,
				} as TypeAnswer<"fetch">;
			})
		);
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
			const data = docSnap.data() as TypeAnswer<"raw">;
			const answer = {
				id,
				...data,
			} as TypeAnswer<"fetch">;
			return answer;
		} else {
			throw new Error("debug answer.service: No answer found");
		}
	} catch (error) {
		console.error("debug answer.service: ", error);
		throw error;
	}
}
