"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createAuthor(id, name, Posts) {
    return {
        id: id, name: name, Posts: Posts
    };
}
exports.createAuthor = createAuthor;
//Cria vários authors
function createAuthors(data) {
    return data.map(createAuthor);
}
exports.createAuthors = createAuthors;
