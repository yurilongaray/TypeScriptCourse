import { testDouble, expect } from './config/helpers';
import User from '../../server/modules/User/service';
const model = require('../../server/models');

describe('Testes Unitarios do Controller', () => {
    //Detalhes de cada teste

    const defaultUser = {
        id: 1,
        name: 'Default User',
        email: 'defaultuser@email.com',
        password: '1234'
    }

    beforeEach((done) => {
        
        model.User.destroy({
            where: {}
        })
        .then(() => {
            model.User.create(defaultUser)
            .then(() => {
                console.log('Default user created');
                done();
            })
        })
    })


    describe('Metodo Create', () => {
        it('Deve criar novo usuário', () => {

            const novoUsuario = {
                id: 2,
                name: 'Novo User',
                email: 'novo@email.com',
                password: '1234'

            };
            
            return User.create(novoUsuario)
                .then(data => {
                    expect(data.dataValues).to.have.all.keys(
                        //As chaves vem nesta ordem do banco, se alterar a ordem abaixo apresentará erro
                        ['email', 'id', 'name', 'password', 'updatedAt', 'createdAt']
                    );
                });
        });
    });

    describe('Método Update', () => {User
        it('Deve atualizar um usuário', () => {
            const usuarioUpdate = {
                name: 'Update User',
                email: 'update@email.com',
            };

            return User.update(defaultUser.id, usuarioUpdate)
                .then(data => {
                    expect(data[0]).to.be.equal(1); //Pois não é retornado nada (Assin como no Delete)
                })

        });
    });

    describe('Método Get', () => {
        it('Deve buscar todos os usuários', () => {

            return User.getAll().then(data => {
                expect(data).to.be.an('array');
                expect(data[0]).to.have.all.keys(
                    ['email', 'id', 'name', 'password']
                )
            });

        });
    });

    describe('Método getById', () => {
        it('Deve retornar um usuário conforme seu Id', () => {

            return User.getById(defaultUser.id)
                .then(data => {
                    expect(data).to.have.all.keys(
                        ['email', 'id', 'name', 'password']
                    )
                })
        })
    })

    describe('Método getByEmail', () => {
        it('Deve retornar um usuário de acordo com seu email', () => {

            return User.getByEmail(defaultUser.email)
                .then(data => {
                    expect(data).to.have.all.keys(
                        ['email', 'id', 'name', 'password']
                    )
                })
        })
    })

    describe('Método Delete', () => {
        it('Deve deletar um usuário', () => {

            return User.delete(defaultUser.id)
                .then(data => {
                    expect(data).to.be.equal(1)
                });
        });
    });
});