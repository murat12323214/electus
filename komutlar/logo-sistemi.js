const Discord = require ("discord.js");

exports.run = (client, message) => {
const lembed = new Discord.MessageEmbed()

.then;   
const mhelp = new Discord.MessageEmbed()
.setColor("#140589")
.setAuthor(`${client.user.username} `, client.user.avatarURL)  
.setTitle("<a:B_Kirmizi:806833231411675176> Electus Bot | Logo Menüsü <a:B_Kirmizi:806833231411675176>")
    .setDescription(`


                                                            
 <a:802450767415083008:807202999960469546> **/alev** :***Alev Logosunu Oluşturur***  

 <a:802450767415083008:807202999960469546> **/alev2** : ***Alev2 Logosunu Olşturur***   

 <a:802450767415083008:807202999960469546> **/altın** : ***Altın Logosunu Oluşturur***  
   
 <a:802450767415083008:807202999960469546> **/anime** : ***Anime Logosunu Oluşturur*** 

 <a:802450767415083008:807202999960469546> **/cool** : ***Cool Logosunu Oluşturur*** 

 <a:802450767415083008:807202999960469546> **/gold** : ***Gold Logosunu Oluşturur*** 

 <a:802450767415083008:807202999960469546> **/google** : ***Google Logosunu Oluşturur*** 

 <a:802450767415083008:807202999960469546> **/gökkuşak** : ***Gökkuşağı Logosunu Oluşturur*** 

 <a:802450767415083008:807202999960469546> **/neon** : ***Neon Logosunu Oluşturur*** 

 <a:802450767415083008:807202999960469546> **/odun** : ***Odun Logosunu Oluşturur***

 <a:802450767415083008:807202999960469546> **/pembe** : ***Pembe Logosunu Oluşturur***  


`) 
       .addField(`» Electus Bot Bağlantıları`, `<a:atessari:807180432964976650>  [Bot Davet Linki](https://discord.com/oauth2/authorize?client_id=806601751418896445&permissions=8&scope=bot) **|** [Destek Sunucusu](https://discord.gg/EQaqZMDd5n)   <a:atessari:807180432964976650>`) 
.setImage('https://media.discordapp.net/attachments/800599149757464616/807200342366224414/350kb.gif')
message.channel.send(mhelp)
.then; const sembed = new Discord.MessageEmbed()

};

exports.conf = {
    enabled: true, 
    guildOnly: false, 
    aliases: ["logosistemi","Logo-sistemi","Logosistemi"], 
    permLevel: 0 
  };
 
  exports.help = {
    name: 'logo-sistemi', 
    description: '',
    usage: ''
  };