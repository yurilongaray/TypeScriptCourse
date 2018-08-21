import { IAuthor } from "../author/interface";

// ?: representa que é opcional, nos casos do authorId e Author
export interface IPost {
    id: number, 
    title: string,
    text: string,
    authorId?: number,
    Author?: IAuthor[]
}

export function createPost({id, title, text, Author}: any): IPost {
    return {
        id, title, text, Author
    }
}

//Cria vários authors
export function createPosts(data: any[]): IPost[] {
    return data.map(createPost);
}