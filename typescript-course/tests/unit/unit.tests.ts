import { testDouble, expect } from './config/helpers';
import User from '../../server/modules/User/service';

describe('Testes Unitarios do Controller', () => {
    //Detalhes de cada teste

    describe('Metodo Create', () => {
        it('Deve criar novo usuário', () => {

            const novoUsuario = {
                id: 1,
                name: 'Novo User',
                email: 'novo@email.com',
                password: '1234'

            };
            
            const user = new User();
            
            return user.create(novoUsuario)
                .then(data => {
                    expect(data.dataValues).to.have.all.keys(
                        //As chaves vem nesta ordem do banco, se alterar a ordem abaixo apresentará erro
                        ['email', 'id', 'name', 'password', 'updatedAt', 'createdAt']
                    )
                });
        });
    });

    describe('Método Update', () => {
        it('Deve atualizar um usuário', () => {
            const usuarioUpdate = {
                name: 'Update User',
                email: 'update@email.com',
            };

            const user = new User();

            return user.update(1, usuarioUpdate)
                .then(data => {
                    expect(data[0]).to.be.equal(1); //Pois não é retornado nada (Assin como no Delete)
                })

        });
    });

    describe('Método Get', () => {
        it('Deve buscar todos os usuários', () => {

            const user = new User();

            return user.getAll().then(data => {
                expect(data).to.be.an('array');
                expect(data[0]).to.have.all.keys(
                    ['email', 'id', 'name', 'password']
                )
            });

        });
    });

    describe('Método getById', () => {
        it('Deve retornar um usuário conforme seu Id', () => {
            const user = new User()

            return user.getById(1)
                .then(data => {
                    expect(data[0]).to.have.all.keys(
                        ['email', 'id', 'name', 'password']
                    )
                })
        })
    })

    describe('Método getByEmail', () => {
        it('Deve retornar um usuário de acordo com seu email', () => {
            const user = new User();

            return user.getByEmail('novo@email.com')
                .then(data => {
                    expect(data[0]).to.have.all.keys(
                        ['email', 'id', 'name', 'password']
                    )
                })
        })
    })

    describe('Método Delete', () => {
        it('Deve deletar um usuário', () => {
            const user = new User();

            return user.delete(1)
                .then(data => {
                    expect(data).to.be.equal(1)
                });
        });
    });
});