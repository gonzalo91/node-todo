const express = require('express');
const d_i = require('./../../../dependency_injection')


module.exports = () => {

    const registerUser = (req, res, next) => {
        d_i.singleton.get('usecase.RegisterAUser').call('name', 'username', 'password')

        res.json({'hola' : 'adios'})
    }

    const getToken = (req, res, next) => {
        console.log(d_i.singleton.get('usecase.RegisterAUser'));
        //d_i.singleton.get('usecase.RegisterAUser').call('hola', 'adios', 'bonjour')
        res.json({'hola' : 'adios'})
    }

    return { registerUser, getToken }
}


