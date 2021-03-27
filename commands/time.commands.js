module.exports = {
    name: "czas",
    description: "displays time",

    run(msg, args) {
        msg.reply(new Date().toLocaleTimeString());
 }
}