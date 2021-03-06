const Discord = require("discord.js");
const db = require("quick.db")
const ayarlar = require("../ayarlar.json");                                               
let talkedRecently = new Set();
                                               
module.exports = async message => {
  if (talkedRecently.has(message.author.id)) {
    return;
  }
  talkedRecently.add(message.author.id);                                          
  setTimeout(() => {
    talkedRecently.delete(message.author.id);
  }, 2500);
  let client = message.client;                                
  if (message.author.bot) return;
  if (!message.content.startsWith(ayarlar.prefix)) return;
  let command = message.content.split(" ")[0].slice(ayarlar.prefix.length);             
  let params = message.content.split(" ").slice(1);
  let perms = client.elevation(message);                   
  let cmd;    

  if (!client.commands.has(command)) {
    if (client.aliases.has(command)) {
      cmd = client.commands.get(client.aliases.get(command));
    } else {
      message.channel.send(`Komutlarımda \`\`${command}\`\` adında bir komut bulamadım! Komut listesine bakmak için: \`\`${ayarlar.prefix}yardım\`\``)
    }
  }
                  
  if (client.commands.has(command)) {                         
    cmd = client.commands.get(command);                 
  } else if (client.aliases.has(command)) {                      
    cmd = client.commands.get(client.aliases.get(command));                                                                                     
  }                      

 if(cmd && cmd.help.name !== 'bakım-modu') {
  const neblmölçmedimikamk = await require('quick.db').fetch(client.user.id);
  if(neblmölçmedimikamk == true) {
  var DURATION = require('humanize-duration');
  const chimped = await db.fetch(client.user.id+':)');
  var TIMESTAMP = Date.now() - chimped.time;
  var RESULT = DURATION(TIMESTAMP, { language: 'tr', round: true, conjunction: ', ', serialComma: false });
  message.react('❌');
  return message.reply(`***${client.user.username}*** şu anda bakımda.\nYaklaşık ***${RESULT} önce*** bakıma alınmış.\nBakıma alan: ***${chimped.author.tag}***`);
  };
  };

 if (cmd) {                                  
    if (cmd.conf.enabled === false) {                
      if (                  
        !ayarlar.sahip.includes(message.author.id) &&                                                     
        !ayarlar.sahip.includes(message.author.id)                                   
      ) {
        const embed = new Discord.MessageEmbed()             

          .setDescription(
            `**${cmd.help.name}** isimli komut şuanda geçici olarak kullanıma kapalıdır!!!`
          )

          .setColor("RED");

        message.channel.send({ embed });

        return;
      }
    }

    if (cmd.conf.permLevel === 1) {
      if (!message.member.hasPermission("MANAGE_MESSAGES")) {
        const embed = new Discord.MessageEmbed()

          .setDescription(
            `Bu komutu kullanabilmek için **Mesajları Yönet** iznine sahip olmalısın.`
          )

          .setColor("RED");

        message.channel.send({ embed });

        return;
      }
    }

    if (cmd.conf.permLevel === 2) {
      if (!message.member.hasPermission("KICK_MEMBERS")) {
        const embed = new Discord.MessageEmbed()

          .setDescription(
            `Bu komutu kullanabilmek için **Üyeleri At** iznine sahip olmalısın.`
          )

          .setColor("RED");

        message.channel.send({ embed });

        return;
      }
    }

    if (cmd.conf.permLevel === 3) {
      if (!message.member.hasPermission("BAN_MEMBERS")) {
        const embed = new Discord.MessageEmbed()

          .setDescription(
            `Bu komutu kullanabilmek için **Üyeleri Yasakla** iznine sahip olmalısın.`
          )

          .setColor("RED");

        message.channel.send({ embed });

        return;
      }
    }

    if (cmd.conf.permLevel === 4) {
      if (!message.member.hasPermission("ADMINISTRATOR")) {
        const embed = new Discord.MessageEmbed()

          .setDescription(
            `Bu komutu kullanabilmek için **Yönetici** iznine sahip olmalısın.`
          )

          .setColor("RED");

        message.channel.send({ embed });

        return;
      }
    }

    if (cmd.conf.permLevel === 5) {
      if (!ayarlar.sahip.includes(message.author.id)) {
        const embed = new Discord.MessageEmbed()

          .setDescription(`Bu komutu sadece **Sahibim** kullanabilir.`)

          .setColor("RED");

        message.channel.send({ embed });

        return;
      }
    }

    if (perms < cmd.conf.permLevel) return;

	 let karaliste = db.fetch(`ckaraliste.${message.author.id}`)
 const westraben = new Discord.MessageEmbed()
 .setColor(`RED`)
 .setDescription(`<a:redke:763316512937082890> **${karaliste}** sebebiyle karalisteye alınmışsın!\nBeyaz listeye alınmak istiyorsan [BURAYA](https://discord.gg/EJ4txQM) gelebilirsin!`)
  if(karaliste) return message.channel.send(westraben)

    cmd.run(client, message, params, perms);
  }
};
