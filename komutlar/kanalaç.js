const Discord = require("discord.js");
exports.run = (client, message, args) => { let every = message.guild.roles.cache.find(r => r.name === "@everyone");
 message.channel.createOverwrite(every, {
    SEND_MESSAGES: null
  });

  message.channel.send("Sohbet Açıldı. Kapatmak İçin /kanal-kapat");
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["kanalaç"],
  kategori: "k-aç",
  permLevel: 3
};

exports.help = {
  name: "kanal-aç",
  description: "kanalın sohbetini açmaya yarar.",
  usage: "kanal-aç"
};