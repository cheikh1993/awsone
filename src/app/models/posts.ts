import { Comment } from "./comment";

export class Post {

    constructor(
        public imageUrl: string,
        public id: number,
        public userId: number,
        public title: string,
        public createdDate: Date = new Date(),
        public content: string,
        public comments: Comment[] = []
    ) {}
}
