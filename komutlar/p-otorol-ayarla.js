const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async (client, message, args) => { 

    let prexcode = await db.fetch(`prexgold${message.author.id}`)
  if(prexcode) {


} else { return message.channel.send(`${message.author}, Bu Komut Gold Üyeler İçindir. Sende Gold Üye Bulunmamakta.`) }

 
let rol = message.mentions.roles.first() 
let kanal = message.mentions.channels.first()
if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`<a:hyr:807283925126217748>  **Bu komutu kullanabilmek için** "\`Yönetici\`" **yetkisine sahip olmalısın.**`);
 
 if(!rol) return message.channel.send(`<a:hyr:807283925126217748>  **Lütfen Bir Rol Belirt!**\nRolü Etiketleyemiyorsan **Rolün Etiketleme Seçeneğini Aktif Etmeyi Unutma** \n**__Örnek Kullanım__** : \`/otorol-ayarla @rol #kanal\`\n\n**__Önemli Not!!__**: **Oto Rol'u Ayarlayabilmek İçin Botun Rolü, Verilecek Rolün Üstünde Bir Rolde Olmalı Yoksa Rolü Veremez!** `)
 
 if(!kanal) return message.channel.send(`<a:hyr:807283925126217748>   **Lütfen Bir Kanal Belirt!** \n**__Örnek Kullanım__** : \`/otorol-ayarla @Rol #Kanal\``)
 
  message.channel.send(`╔▬▬▬▬▬▬▬▬Electus Otorol▬▬▬▬▬▬▬▬▬
║► <a:evt:807283924236763176> Otorol Aktif Edildi.
║► <a:evt:807283924236763176>  **${rol}** Olarak Güncelledim! 
║► <a:evt:807283924236763176>  Otorol Kanalını **${kanal}** Olarak Güncelledim! 
╚▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬`)

 
  db.set(`otoRL_${message.guild.id}`, rol.id)  
  db.set(`otoRK_${message.guild.id}`, kanal.id) 
};
exports.conf = {
    enabled: true,
    guildOnly: false,
    permLevel: 0,
    aliases: ['p-otorol-ayarla']
  };
  
  exports.help = {
    name: 'p-otorol-ayarla',
    description: 'Türkiyenin Saatini Gösterir',
    usage: 'gç'
  };