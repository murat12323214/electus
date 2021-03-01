const Discord = require('discord.js');

exports.run = async(client, message, args) => {
    let type = args.slice(0).join(' ');
    if (type.length < 1) return message.channel.send('Doğru Kullanım : /istek sayaç komutu')
const embed = new Discord.MessageEmbed()
.setColor('#00ff00')
.setDescription('İstek Kodunuz başarıyla bildirildi  \nEn Yakın Zamanda <#807361696976732201> Kanalından Cevap Vereceğiz.')
message.channel.send(embed)
const embed2 = new Discord.MessageEmbed()
.setColor("#ff0009")
.setDescription(`**${message.author.tag}** Adlı Kullanıcının **isteği **;`)
.addField(`:envelope: **Gönderen Kişinin Bilgileri**`, `:white_small_square:Kullanıcı ID: ${message.author.id}\n:white_small_square:Kullanıcı Adı: ${message.author.username}\n:white_small_square:Kullanıcı Tagı: ${message.author.discriminator}`)
.addField(":pencil: **Gönderilen İstek/Tavsiye**", type)
.setThumbnail(message.author.avatarURL)
client.channels.cache.get('807361311863472128').send(embed2); //Mesajın Gideceği Kanal ID 

};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
  permLevel: 0
}

exports.help = {
    name: 'istek',
    description: 'Sunucuya giren kullanıcıya seçtiğiniz rolü otomatik verir.',
    usage: 'istek <istek>'
}
//CODEWORK @MEKANINSAHİBİ