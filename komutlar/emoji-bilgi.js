const Discord = require('discord.js');

exports.run = (client, message, args) => {
  
    let emojiname = args[0];
    const emoji = (message.guild.emojis.cache.find(codework => codework.name == `${emojiname}`))
    if (!emojiname) return message.channel.send("Emoji İsmi Belirtmediniz")
    const embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .addField("Emojinin ismi", `${emojiname}`)
    .addField("Emoji ID", `${emoji.id}`)
    .addField("Link", `${emoji.url}`)
    .setTimestamp()
    message.channel.send(embed)
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["emojibilgi"],//heryere resmini ssalcam eymen bekle
    permLevel: 0

}
exports.help = {
    name: 'emoji-bilgi',
}