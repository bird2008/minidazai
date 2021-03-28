const moment = require('moment');
const tz = require('moment-timezone');
const Discord = require('discord.js');

const { timezone, format,} = require(__dirname + "/../config/config.js");

const timeNow = moment().tz(timezone).format(format);

module.exports = {
    name: "czas",
    description: "displays time",

    run(msg, args) {
        msg.reply("Jest " + timeNow);
 }
}