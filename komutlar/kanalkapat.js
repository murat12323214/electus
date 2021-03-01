const Discord = require("discord.js");
exports.run = (client, message, args) => { let every = message.guild.roles.cache.find(r => r.name === "@everyone"); 
message.channel.createOverwrite(every, {
    SEND_MESSAGES: false
  });

  message.channel.send("Sohbet Kapatıldı. Açmak İçin /kanal-aç");
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  kategori: "k-kapat",
  permLevel: 3
};

exports.help = {
  name: "kanal-kapat",
  description: "kanalın sohbetini kapatmaya yarar.",
  usage: "kanal-kapat"
};