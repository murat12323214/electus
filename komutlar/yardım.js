const Discord = require ("discord.js");

exports.run = (client, message) => {
const lembed = new Discord.MessageEmbed()

.then;   
const mhelp = new Discord.MessageEmbed()
.setColor("#140589")
.setAuthor(`${client.user.username} `, client.user.avatarURL)  
.setTitle("<a:B_Kirmizi:806833231411675176> Electus Bot | Yardım Menüsü <a:B_Kirmizi:806833231411675176>")
    .setDescription(`


                                                            
 <a:802450767415083008:807202999960469546> **/moderasyon** : ***Moderasyon komutlarını Gösterir.***
 
 <a:802450767415083008:807202999960469546> **/kullanıcı** : ***Kullanıcı komutlarını Gösterir.***   

 <a:802450767415083008:807202999960469546> **/sahip** : ***Sahip komutlarını Gösterir.***     

 <a:802450767415083008:807202999960469546> **/logosistemi** : ***Logo Komutlarını Gösterir***

 <a:802450767415083008:807202999960469546> **/goldmenü** : ***Gold Üyelere Özel Olan Komutlarını Gösterir***

`) 
       .addField(`» Electus Bot Bağlantıları`, `<a:atessari:807180432964976650>  [Bot Davet Linki](https://discord.com/oauth2/authorize?client_id=806601751418896445&permissions=8&scope=bot) **|** [Destek Sunucusu](https://discord.gg/EQaqZMDd5n)   <a:atessari:807180432964976650>`) 
.setImage('https://media.discordapp.net/attachments/800599149757464616/807200342366224414/350kb.gif')
message.channel.send(mhelp)
.then; const sembed = new Discord.MessageEmbed()

}; 
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    aliases: ["Yardım","Help","help"], 
    permLevel: 0 
  };
 
  exports.help = {
    name: 'yardım', 
    description: '',
    usage: ''
  };