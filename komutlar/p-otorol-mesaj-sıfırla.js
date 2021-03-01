const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async (client, message, args) => { 

    let prexcode = await db.fetch(`prexgold${message.author.id}`)
  if(prexcode) {


} else { return message.channel.send(`${message.author}, Bu Komut Gold Üyeler İçindir. Sende Gold Üye Bulunmamakta.`) }

if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`<a:hyr:807283925126217748> **Bu komutu kullanabilmek için** "\`Yönetici\`" **yetkisine sahip olmalısın.**`);
 const rol = db.fetch(`otoRM_${message.guild.id}`) 
 if(!rol) return message.reply(`<a:hyr:807283925126217748>  **Ayarlanmamış bir özellik sıfırlanamaz! **`)
 
 
  message.channel.send(`<a:evt:807283924236763176> **Otorol mesajı başarılı bir şekilde sıfırlandı.**`)

 
 db.delete(`otoRM_${message.guild.id}`)  

};
exports.conf = {
    enabled: true,
    guildOnly: false,
    permLevel: 0,
    aliases: ['p-otorol-mesaj-sıfırla']
  };
  
  exports.help = {
    name: 'p-otorol-mesaj-sıfırla',
    description: 'Türkiyenin Saatini Gösterir',
    usage: 'gç'
  };