declare type TypeQuestion = {
	id: string;
	question: string;
	answers: string[];
	tags: string[] | string;
	uid: string; // firebase user uid
};

declare type TypeAnswer = {
	id: string;
	answer: string;
	questionId: string;
	uid: string; // firebase user uid
};
