const Discord = require('discord.js');

exports.run = async(client, message, args) => {
    let type = args.slice(0).join(' ');
    if (type.length < 1) return message.channel.send('Doğru Kullanım : /hata-bildir sayaç komutu')
const embed = new Discord.MessageEmbed()
.setColor('#00ff00')
.setDescription('Hata başarıyla bildirildi  \nEn Yakın Zamanda <#807361978133250098> Kanalından Cevap Vereceğiz.')
message.channel.send(embed)
const embed2 = new Discord.MessageEmbed()
.setColor("#ff0009")
.setDescription(`**${message.author.tag}** Adlı Kullanıcının Bildirdiği **Hatalı Kod**;`)
.addField(`:envelope: **Gönderen Kişinin Bilgileri**`, `:white_small_square:Kullanıcı ID: ${message.author.id}\n:white_small_square:Kullanıcı Adı: ${message.author.username}\n:white_small_square:Kullanıcı Tagı: ${message.author.discriminator}`)
.addField(":pencil: **Gönderilen Hatalı Kod**", type)
.setThumbnail(message.author.avatarURL)
client.channels.cache.get('807361652633763901').send(embed2); //Mesajın Gideceği Kanal ID 

};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['hatabildir'],
  permLevel: 0
}

exports.help = {
    name: 'hata-bildir',
    description: 'Sunucuya giren kullanıcıya seçtiğiniz rolü otomatik verir.',
    usage: 'istek <istek>'
}
