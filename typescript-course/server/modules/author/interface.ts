export interface IAuthor {
    id: number, 
    name: string
}

export function createAuthor(id: any, name: any): IAuthor {
    return {
        id, name
    }
}

//Cria vários authors
export function createAuthors(data: any[]): IAuthor[] {
    return data.map(createAuthor);
}