const { ContainerBuilder } = require('node-dependency-injection')

const RegisterAUser = require('./features/authentication/domain/usecases/RegisterAUser')
const AuthenticationRepositoryImpl = require('./features/authentication/data/repositories/AuthenticationRepositoryImpl');
const UserMongoDbDataSource = require('./features/authentication/data/datasources/UserMongoDbDataSource');
const UserSchema = require('./features/authentication/data/models/User');

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const UserResponse = require('./features/authentication/presentation/responses/UserResponse');
const LoginAUser = require('./features/authentication/domain/usecases/LoginAUser');

let container = new ContainerBuilder();


container.register('datasource.UserMongoDbDataSource', UserMongoDbDataSource)
    .addArgument(() => UserSchema);

container.register('repository.Authentication', AuthenticationRepositoryImpl)
    .addArgument(() => container.get('datasource.UserMongoDbDataSource'));

container.register('usecase.RegisterAUser', RegisterAUser)
    .addArgument(
        () => container.get('repository.Authentication')
    )
    .addArgument(
        () => bcrypt
    );

container.register('usecase.LoginAUser', LoginAUser)
    .addArgument(
        () => container.get('repository.Authentication')
    )
    .addArgument(
        () => bcrypt
    );


container.register('response.UserResponse', UserResponse)
    .addArgument(
        () => jwt
    )



module.exports = {
    _singleton: null,
    get singleton() {

        if (!this._singleton) {
            console.log('Dependency Injection Initialized');
            this._singleton = container;
        }

        return this._singleton;
    }
}