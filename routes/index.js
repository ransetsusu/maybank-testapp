/**
 *  Bootstrap file for routes
 */
const API_VERSION = process.env.API_VERSION || 'v1'


module.exports = function (app, config) {
    app.use(`/api/${API_VERSION}`, require("./api"))
}