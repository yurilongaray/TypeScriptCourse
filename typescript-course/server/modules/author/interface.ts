import { IPost } from '../posts/interface';

export interface IAuthor {
    id: number, 
    name: string,
    Posts?: IPost[]
}

export function createAuthor(id: any, name: any, Posts: any): IAuthor {
    return {
        id, name, Posts
    }
}

//Cria vários authors
export function createAuthors(data: any[]): IAuthor[] {
    return data.map(createAuthor);
}