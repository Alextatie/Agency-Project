const { check } = require('express-validator')
const repo = require('../Models/usersDB')

module.exports = {

    validateEmail: check('email')
        .custom(async (email) => {
            const existingUser =
                await await repo.findOne({"userEmail":email})

            if (existingUser) {
                throw new Error('Email is already in use.')
            }
        })
}
