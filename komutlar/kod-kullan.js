const Discord = require('discord.js');
const db = require('quick.db');
exports.run = async(client, m, args, ayarlar , prefix, message,) => {

    let x = args[0]
        let embed = new Discord.MessageEmbed() .setColor("RED") .setTimestamp() .setThumbnail(m.guild.iconURL({ dynamic: true, format: 'png', size: 1024 }))
    .setTitle(`Hata`)
    .setDescription(`
\`Lütfen Bir Premium Promosyon Kodu Giriniz.\`
`)      
        let embed2 = new Discord.MessageEmbed() .setColor("RED") .setTimestamp() .setThumbnail(m.guild.iconURL({ dynamic: true, format: 'png', size: 1024 }))
    .setTitle(`Hata`)
    .setDescription(`
\`Veritabanında Böyle Bir Premium Promosyon Kodu Bulamadım. Lütfen Kodu Kontrol Edin.\`
`)
        let embed3 = new Discord.MessageEmbed() .setColor("GREEN") .setTimestamp() .setThumbnail(m.guild.iconURL({ dynamic: true, format: 'png', size: 1024 }))
    .setTitle(`Başarılı`)
    .setDescription(`
\`Başarıyla Premium Üyeliğin Aktif Edildi.\n v!p-sürem Yazarak Sürene Bakabilirsin.\`
`)
  
    if(!x) return m.channel.send(embed)
    let kod = db.fetch(`kod.${x}`)
   let pre= db.fetch(`presure.${m.author.id}`)
    if(!kod) return m.channel.send(embed2)
    if(pre) {
    db.add(`presure.${m.author.id}`,kod)
    }else{
    db.add(`presure.${m.author.id}`,kod + Date.now())
      
    }db.set(`pre.${m.author.id}`,true)
    db.delete(`kod.${x}`)
      const moment = require("moment");
    require("moment-duration-format");
    const sure = moment
      .duration(db.fetch(`presure.${m.author.id}`) - Date.now())
      .format(" D [gün], H [saat], m [dakika], s [saniye]");
        let embed4 = new Discord.MessageEmbed() .setColor("#FFD600") .setTimestamp() .setThumbnail(m.guild.iconURL({ dynamic: true, format: 'png', size: 1024 }))
    .setTitle("Başarılı")
    .setDescription(`
\`${m.author.tag}\` Taglı Kullanıcı \`${x}\` Kodunu Kullanarak \`${sure}\` Premium Üye Oldu
`)  

        m.channel.send(embed3)
        client.channels.cache.get("KANAL İD").send(embed4)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kod-kullan'],
  permLevel: 0
};

exports.help = {
  name: 'kod-kullan',
  description: 'Bakım.',
  usage: 'Bakım'
}