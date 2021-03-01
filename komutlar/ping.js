const Discord = require("discord.js");
exports.run = async (client, message, args) => {

const fwhy = new Discord.MessageEmbed()

.addField(`Pingim` ,`${client.ws.ping} Ms`)
  
return message.channel.send(fwhy)
  
  
}
  
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'ping',
  description: 'Sade Ping Komutu işde mq',
  usage: 'ping'
}; 