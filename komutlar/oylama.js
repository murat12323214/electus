const Discord = require('discord.js');
const db = require('quick.db')
 exports.run = async (client, message, args) => {

 

   let question = args.join(' ');

   let user = message.author.username

   if (!question) return message.channel.send(

     new Discord.MessageEmbed()

     .addField(`:x: **Yazı Yazman Gerek** :x:`)).then(m => m.delete(5000));

     console.log("oylama komutu " + message.author.username + '#' + message.author.discriminator + " tarafından kullanıldı.")
     message.channel.send(

        new Discord.MessageEmbed()

       .setColor("RED")
       .setThumbnail(client.user.avatarURL())
       .setTimestamp()
       .setFooter('Electus Oylama Sistemi', client.user.avatarURL())

       .addField(`**Oylama**`, `**${question}**`)).then(function(message) {

         message.react('✅');

         message.react('❌');

       });

     };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'oylama',
  description: 'Sade Ping Komutu işde mq',
  usage: 'ping'
}; 