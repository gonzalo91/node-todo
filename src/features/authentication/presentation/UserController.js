const express = require('express');
const d_i = require('./../../../dependency_injection')


module.exports = () => {

    const registerUser = async(req, res, next) => {

        try {
            const user = await d_i.singleton.get('usecase.RegisterAUser')
                .call(req.body.name, req.body.email, req.body.password)

            const userResponse = await d_i.singleton.get('response.UserResponse').json(user);

            res.json(userResponse)
        } catch (e) {
            res.status(400).json(e)
        }
    }

    const getToken = (req, res, next) => {


        console.log(d_i.singleton.get('usecase.RegisterAUser'));

        //d_i.singleton.get('usecase.RegisterAUser').call('hola', 'adios', 'bonjour')
        res.json({ 'hola': 'adios' })
    }

    return { registerUser, getToken }
}