const Discord = require('discord.js');

exports.run = (client, message, args) => {

  let pages = [
                '**Başlangıç**\n\n\n' + ' KOMUTLAR!! \n \n \n  |  ? Bu Emojılere Tıklayarak Sayfayı Değiştirebilirsiniz',
              '**Eğlence Komutlar**\n\n\n' + 'y!avatar Profil Resminizi Gosterir! \n   y!çekiç \n y!espiri \n y!bayrak = Türkiye Bayrağını Fotosunu Atar \n y!koş \n y!yazı-tura \n y!çayiç \n y!kartopu \n y!kahkaha \n y!balıktut \n  y!ateşet \n y!golat \n y!atasözü \n y!banned \n y!simit \n y!yumruk at',
  '**Komutlar**\n\n\n' + 'y!avatar \n y!kanalbilgi \n  y!ping \n y!çekiç \n y!otorol \n y!davet \n y!slowmode ve sayı \n y!emojiyazı \n y!kilit [İle Odayı kitliyebilirsiniz geri açmak için aynı komutu uygulayınız.] \n ',
           
              
           
    
             
        '**Yapımcım **\n\n\n ' + 'Yapımcım : **Scofilds^#6200** \n Geliştirici:Scofilds^#6200***',
              ];
  let page = 1;

  const embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setThumbnail('https://cdn.discordapp.com/avatars/510453815003054090/e764556833ceaa8099d38f8c1b6ea635.png?size=204')
    .setFooter(`Sayfa ${page} / ${pages.length}`)
    .setDescription(pages[page-1])
  message.channel.send(embed).then(msg => {

  msg.react('⬅')
  .then(r => {
    msg.react('➡')

      
      const backwardsFilter = (reaction, user) => reaction.emoji.name === '⬅' && user.id === message.author.id;
      const forwardsFilter = (reaction, user) => reaction.emoji.name === '➡' && user.id === message.author.id;

      const backwards = msg.createReactionCollector(backwardsFilter, { time: 100000 });
      const forwards = msg.createReactionCollector(forwardsFilter, { time: 100000 });

      forwards.on('collect', r => {
        if(page === pages.length) return;
        page++;
        embed.setDescription(pages[page-1]);
        embed.setColor('RANDOM')
        embed.setFooter(`Sayfa ${page} / ${pages.length}`)
        msg.edit(embed)
      })
      backwards.on('collect', r => {
        if(page === 1) return;
        page--;
        embed.setColor('RANDOM')
        embed.setDescription(pages[page-1]);
        embed.setFooter(`Sayfa ${page} / ${pages.length}`)
        msg.edit(embed)
      })

    })
   message.react(":white_check_mark: ")
  })
};


exports.conf = {
enabled: true,
guildOnly: true,
aliases: ["help", "y", "h"],
permLevel: 0
};

exports.help = {
name: 'yardım',
description: 'Yardım Listesini Gösterir',
usage: 'yardım'
};