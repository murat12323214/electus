const Discord = require ("discord.js");

exports.run = (client, message) => {
const lembed = new Discord.MessageEmbed()

.then;   
const mhelp = new Discord.MessageEmbed()
.setColor("#140589")
.setAuthor(`${client.user.username} `, client.user.avatarURL)  
.setTitle("<a:B_Kirmizi:806833231411675176> Electus Bot | Moderasyon Menüsü <a:B_Kirmizi:806833231411675176>")
    .setDescription(`


                                                            
 <a:802450767415083008:807202999960469546> **/abone-rol** : ***Kişiye Vercek Abone Rolünü Ayarlar***  

 <a:802450767415083008:807202999960469546> **/aboneverici** : ***Kişiye Vercek Abone Verici Rolünü Ayarlar***   

 <a:802450767415083008:807202999960469546> **/ban** : ***Kişiyi Hem Force Hemde Normal Ban Atabilirsiniz***  
   
 <a:802450767415083008:807202999960469546> **/davet** : ***Botun Davet Linkini Atar***

 <a:802450767415083008:807202999960469546> **/kanalaç/kapat** : ***Sohbedi Hem Açmya Hemde Kapamaya Yarıyor***

 <a:802450767415083008:807202999960469546> **/mute** : ***Kişiyi Mutelersin***  

 <a:802450767415083008:807202999960469546> **/oylama** : ***Sunucuda Oylama Yaparsınız***  

 <a:802450767415083008:807202999960469546> **/sil** : ***Bot Mesaj Siler***

 <a:802450767415083008:807202999960469546> **/slowmode** : ***Kanala SlowMode Yapar***  

 <a:802450767415083008:807202999960469546> **/sunucu-kur** : ***Sunucunuzu Kurar***  

 <a:802450767415083008:807202999960469546> **/unban** : ***Kişinin Banını Çekersiniz*** 

 <a:802450767415083008:807202999960469546> **/uyarı** : ***Kişiyi Uyarırsınız***  

 <a:802450767415083008:807202999960469546> **/uyarılar** : ***Kendinizin Uyarılarına Bakarsın***   

 <a:802450767415083008:807202999960469546> **/uyarılog** : ***Uyardınız Kişini Logunu Atar*** 

 <a:802450767415083008:807202999960469546> **/uyarısil** : ***Kişinin Uyarısını Silersin*** 
 
 <a:802450767415083008:807202999960469546> **/çekiliş** : ***Sunucuda Çekiliş Yaparsın*** 

 <a:802450767415083008:807202999960469546> **/çekilişbitir** : ***Sunucuda Çekiliş Bitirirsin***

 <a:802450767415083008:807202999960469546> **/mod-log** : ***Mod Log Kanalını Ayarlarsınız*** 

 <a:802450767415083008:807202999960469546> **/sayaç-ayarla** : ***Sayaç Sistemini Ayarlarsınız***       

 <a:802450767415083008:807202999960469546> **/otorol ayarla/sıfırla** : ***Otorol Sistemini Ayarlarsınız***        
 
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
    name: 'moderasyon', 
    description: '',
    usage: ''
  };