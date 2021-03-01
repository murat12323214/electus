const codework1 = require('discord.js')

exports.run = function(client, message, args) {
  const codework = new codework1.MessageEmbed() 
                            
.setTitle("Electus") //BOTUNUZUN ADINI GİRİN
.setDescription("**Botun Davet Linki :** [Davet Et](https://discord.com/api/oauth2/authorize?client_id=806601751418896445&permissions=8&scope=bot)")
.setColor("BLACK")

return message.channel.send(codework)
}

exports.conf = {
enabled: false,
guildOnly: false,
aliases: ["botuekle"],
permLevel: 0
  
};
  
exports.help = {
name: 'davet'
};