const codework1 = require('discord.js')

exports.run = function(client, message, args) {
  const codework = new codework1.MessageEmbed() 
                            
.setTitle("Electus") //BOTUNUZUN ADINI GİRİN
.setDescription("Gold Almak İçin Destek Sunucumuza Gelmeniz Gerekiyor. [Destek Sunucumuz](https://discord.gg/jjmbppUVqU)")
.setColor("BLACK")

return message.channel.send(codework)
}

exports.conf = {
enabled: false,
guildOnly: false,
aliases: ["goldsatınal"],
permLevel: 0
  
};
  
exports.help = {
name: 'gold-satın-al'
};