const dotenv = require("dotenv").config()

module.exports = {
    token: process.env.token,
    prefix: "!",
    timezone: 'Europe/Poland',
    format: 'HH:mm',
}