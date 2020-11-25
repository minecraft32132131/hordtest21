const Discord = require("discord.js");
const moment = require("moment");
require("moment-duration-format");

exports.run = async (bot, message, args) => {
   const seksizaman = moment.duration(bot.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
   const istatistikler = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setFooter('Hord\'s', bot.user.avatarURL)
  .addField("» Bellek kullanımı", (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) + ' MB', true)  
  .addField("» Kullanıcılar", bot.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString(), true)
  .addField("» Sunucular", bot.guilds.size.toLocaleString(), true)
  .addField("» Kanallar", bot.channels.size.toLocaleString(), true)
  .addField("» Discord.JS sürüm", "v"+Discord.version, true)
  .addField(`» Node.JS sürüm`, `${process.version}`, true)
  .addField("**❯ Bot Davet**", " [Davet Et]( https://discord.com/oauth2/authorize?client_id=518084114524667905&scope=bot&permissions=0)", )
  .addField("**❯ Destek Sunucusu**", " [Sunucumuza Katıl](https://discord.gg/Uu68u5x)", )
  return message.channel.send(istatistikler);
  };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [ 'i', 'YEDEK KOMUT2'],
  permLevel: 0
};

exports.help = {
  name: "istatistik",
  description: "Bot i",
  usage: "istatistik"
};