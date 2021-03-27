const { MessageEmbed } = require("discord.js")

module.exports = {
    name: "info",
    description: "Displays info about bot",

    run(msg, args) {
        const embed = new MessageEmbed()
        // Set the title of the field
        .setTitle("Siema, jestem botem Otaku Dazai!")
        // Set the color of the embed
        .setColor(0xEEAE02)
        // Set the main content of the embed
        .setDescription("Moje komendy:\n**!info** (informacje o mnie)\n**!czas** (aktualna godzina)\n**!kick/ban;powód** (zbanowanie, wyrzucenie użytkownika)\n**!suus** (TAJEMNICA😎)")
        .addField("Autor", "\_Elish_", true)
        .addField("Wersja", "1.0.0", true)
      msg.channel.send(embed)  
    }
}