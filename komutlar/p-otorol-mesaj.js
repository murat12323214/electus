const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async (client, message, args) => { 

    let prexcode = await db.fetch(`prexgold${message.author.id}`)
  if(prexcode) {


} else { return message.channel.send(`${message.author}, Bu Komut Gold Üyeler İçindir. Sende Gold Üye Bulunmamakta.`) }

let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "/";
  
if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`<a:hyr:807283925126217748>  **Bu komutu kullanabilmek için** "\`Yönetici\`" **yetkisine sahip olmalısın.**`);
  
  let mesaj = args.slice(0).join(' ');
  if(mesaj.length < 5) return message.channel.send('<a:hyr:807283925126217748>  **Sayaç Hoşgeldin Mesaj Sistemi İçin En Az 5 Karakter Belirtebilirsin!**\n `**__Örnek__**: `otorol-mesaj -uye- Hoşgeldin! senle beraber -uyesayisi- Kişiyiz!`')
  
 message.channel.send('<a:evt:807283924236763176> **Oto Rol mesajı** `'+mesaj+'` **Olarak ayarlandı!**') 
 db.set(`otoRM_${message.guild.id}`, mesaj)  

  
};
exports.conf = {
    enabled: true,
    guildOnly: false,
    permLevel: 0,
    aliases: ['p-otorol-mesaj']
  };
  
  exports.help = {
    name: 'p-otorol-mesaj',
    description: 'Türkiyenin Saatini Gösterir',
    usage: 'gç'
  };