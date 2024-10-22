type TypeQuestionBase = {
	question: string;
	answerIds: string[];
	tags: string[] | string;
	uid: string; // firebase user uid
};

declare type TypeQuestion<T extends "push" | "fetch"> = T extends "push"
	? TypeQuestionBase
	: TypeQuestionBase & {
			id: string;
	  };

type TypeAnswerBase = {
	answer: string;
	questionId: string;
	uid: string; // firebase user uid
};

declare type TypeAnswer<T extends "push" | "fetch"> = T extends "push"
	? TypeAnswerBase
	: TypeAnswerBase & { id: string };
