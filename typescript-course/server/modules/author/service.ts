import { IAuthor, createAuthor, createAuthors } from './interface';
import * as Bluebird from 'bluebird';
const model = require('../../models');

class Author implements IAuthor {
    public id: number;
    public name: string;

    /*
    Todos os métodos presentes no model.Author são da API do sequelize
    exemplo o create do return model.Author.create(author)
    */

    create(author: any){
        return model.Author.create(author); 
    };

    getAll(): Bluebird<IAuthor[]>{
        return model.Author.findAll({
            order: ['name']
        })
        .then(createAuthors);
    };

    getById(id: number): Bluebird<IAuthor> {
        return model.Author.findOne({
            where: {id}
        })
        .then(createAuthor);
    };

    update(id: number, author: any){
        return model.Author.update(author, {
            where: {id},
            fields: ['name'],
            hooks: true,
            individualHooks: true
        })
    };

    delete(id: number){
        return model.Author.destroy({
            where: {id}
        });
    };
}

export default new Author();