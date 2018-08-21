"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createAuthor(id, name) {
    return {
        id: id, name: name
    };
}
exports.createAuthor = createAuthor;
//Cria vários authors
function createAuthors(data) {
    return data.map(createAuthor);
}
exports.createAuthors = createAuthors;
