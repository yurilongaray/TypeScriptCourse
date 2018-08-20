import * as bcrypt from 'bcrypt';

export default function (sequelize, DataTypes) {

    const User = sequelize.define('User', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        }
    });

    User.beforeCreate((user) => {
        return hashPassword(user);
    });

    User.beforeUpdate((user) => {
        return hashPassword(user);
    })

    //Cifrando senha do user
    function hashPassword(user) {
        const salt = bcrypt.genSaltSync(10); //Rodar por 10x

        user.set('password', bcrypt.hashSync(user.password, salt)); //Inserindo no user.password o hash
    }

    return User;
}