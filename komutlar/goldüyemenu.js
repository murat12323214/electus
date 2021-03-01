const Discord = require ("discord.js");


exports.run = (client, message) => {
const lembed = new Discord.MessageEmbed()

.then;   
const mhelp = new Discord.MessageEmbed()
.setColor("#140589")
.setAuthor(`${client.user.username} `, client.user.avatarURL)  
.setTitle("<a:B_Kirmizi:806833231411675176> Electus Bot | Gold Menüsü <a:B_Kirmizi:806833231411675176>")
    .setDescription(`


                                                            
 <a:802450767415083008:807202999960469546> **/p-otorol-ayarla** : ***Otorolü Ayarlarsın***
 
 <a:802450767415083008:807202999960469546> **/p-otorol-kapat** : ***Otorolü Kapatabilirsin***   

 <a:802450767415083008:807202999960469546> **/p-otorol-mesaj-sıfırla** : ***Otorol Mesajını Sıfırlarsın***     

 <a:802450767415083008:807202999960469546> **/p-otorol-mesaj** : ***Otorol Mesajını Ayarların***
`) 
       .addField(`» Electus Bot Bağlantıları`, `<a:atessari:807180432964976650>  [Bot Davet Linki](https://discord.com/oauth2/authorize?client_id=806601751418896445&permissions=8&scope=bot) **|** [Destek Sunucusu](https://discord.gg/trDXdpGHdB)   <a:atessari:807180432964976650>`) 
.setImage('https://media.discordapp.net/attachments/800599149757464616/807200342366224414/350kb.gif')
message.channel.send(mhelp)
.then; const sembed = new Discord.MessageEmbed()

}; 
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    aliases: ['gold-menü'], 
    permLevel: 0 
  };
 
  exports.help = {
    name: 'goldmenü', 
    description: '',
    usage: ''
  };