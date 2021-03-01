const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {
let mesaj = args.slice(0).join(' ');
if(!args[0]) return message.channel.send(new Discord.MessageEmbed().setTitle('Bir hata oldu!').setDescription(`${message.author} İçerik için yazı yazmayı unuttunuz.`));
message.delete();
return message.channel.send(new Discord.MessageEmbed().setTitle(mesaj));

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['yaz', 'duyuru'],
  permLevel: 0
}

exports.help = {
  name: 'duyuru'
};