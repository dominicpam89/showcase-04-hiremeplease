declare type TypeQuestion<T extends "push" | "fetch"> = T extends "push"
	? {
			question: string;
			answerIds: string[];
			tags: string[] | string;
			uid: string; // firebase user uid
	  }
	: {
			id: string;
			question: string;
			answers: string[];
			tags: string[] | string;
			uid: string;
	  };

declare type TypeAnswer<T extends "push" | "fetch"> = T extends "push"
	? {
			answer: string;
			questionId: string;
			uid: string; // firebase user uid
	  }
	: {
			id: string;
			answer: string;
			questionId: string;
			uid: string; // firebase user uid
	  };
