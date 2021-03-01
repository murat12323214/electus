const Discord = require ("discord.js");

exports.run = (client, message) => {
const lembed = new Discord.MessageEmbed()

.then;   
const mhelp = new Discord.MessageEmbed()
.setColor("#140589")
.setAuthor(`${client.user.username} `, client.user.avatarURL)  
.setTitle("<a:B_Kirmizi:806833231411675176> Electus Bot | Sahip Menüsü <a:B_Kirmizi:806833231411675176>")
    .setDescription(`


                                                            
 <a:802450767415083008:807202999960469546> **/karaliste** :***Kişiyi Karalisteye Alırsın.***  

 <a:802450767415083008:807202999960469546> **/beyazliste** : ***Kişiyi Kara Listeden Çıkarırsın***   

 <a:802450767415083008:807202999960469546> **/goldyap** : ***Üye yi Gold Yaparsın***     

 <a:802450767415083008:807202999960469546> **/goldçıkar** : ***Üye Goldan Çıkarırsın***      

`) 
       .addField(`» Electus Bot Bağlantıları`, `<a:atessari:807180432964976650>  [Bot Davet Linki](https://discord.com/oauth2/authorize?client_id=806601751418896445&permissions=8&scope=bot) **|** [Destek Sunucusu](https://discord.gg/trDXdpGHdB)   <a:atessari:807180432964976650> `) 
.setImage('https://media.discordapp.net/attachments/800599149757464616/807200342366224414/350kb.gif')
message.channel.send(mhelp)
.then; const sembed = new Discord.MessageEmbed()

}; 
exports.conf = {//https://api.creavite.co/out/b60cff5e-008a-4dab-b2ee-4cd828528c38_350kb.gif   https://cdn.discordapp.com/attachments/800599149757464616/807200342366224414/350kb.gif
    enabled: true, 
    guildOnly: false, 
    aliases: [], 
    permLevel: 0 
  };
 
  exports.help = {
    name: 'sahip', 
    description: '',
    usage: ''
  };