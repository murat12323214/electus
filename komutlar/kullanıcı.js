const Discord = require ("discord.js");

exports.run = (client, message) => {
const lembed = new Discord.MessageEmbed()

.then;   
const mhelp = new Discord.MessageEmbed()
.setColor("#140589")
.setAuthor(`${client.user.username} `, client.user.avatarURL)  
.setTitle("<a:B_Kirmizi:806833231411675176> Electus Bot | Yardım Menüsü <a:B_Kirmizi:806833231411675176>")
    .setDescription(`


                                                            
 <a:802450767415083008:807202999960469546> **/avatar** :***Avatarınızı Gösterir***
 
 <a:802450767415083008:807202999960469546> **/aşkölçer** : ***Aşkınızı Ölçuyor***   

 <a:802450767415083008:807202999960469546> **/fbi** : ***Fbi Gifi Atıyor***     

 <a:802450767415083008:807202999960469546> **/istatistik** : ***Botun İstatiklerini Atıyor***

 <a:802450767415083008:807202999960469546> **/ping** : ***Botun Pingini Atıyor***

 <a:802450767415083008:807202999960469546> **/yılbaşı** : ***Yılbaşının Kaç Gün Kaldığını Atıyor***

 <a:802450767415083008:807202999960469546> **/havadurumu** : ***Şehirin Hava Durumunu Atıyor***

 <a:802450767415083008:807202999960469546> **/emoji-bilgi** : ***Emojinin Bilginisi Atıyor***

 <a:802450767415083008:807202999960469546> **/yaz** : ***Bota Mesaj Yazdırısınız*** 
`) 
       .addField(`» Electus Bot Bağlantıları`, `<a:atessari:807180432964976650>  [Bot Davet Linki](https://discord.com/oauth2/authorize?client_id=806601751418896445&permissions=8&scope=bot) **|** [Destek Sunucusu](https://discord.gg/EQaqZMDd5n)   <a:atessari:807180432964976650>`) 
.setImage('https://media.discordapp.net/attachments/800599149757464616/807200342366224414/350kb.gif')
message.channel.send(mhelp)
.then; const sembed = new Discord.MessageEmbed()

}; 
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    aliases: [], 
    permLevel: 0 
  };
 
  exports.help = {
    name: 'kullanıcı', 
    description: '',
    usage: ''
  };