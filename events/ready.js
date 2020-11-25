const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

module.exports = client => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] Tüm komutlar çalıştırılıyor!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: ${client.user.username} ismi ile giriş yapıldı! BOT aktif!`);
  client.user.setStatus("online");
   var oyun = [
        "y!yardım Komutlarımıza bakabilirsiniz"  ,
        "Botumuzu Umarım Beğenirsiniz!",
        "Yapımcı: 👑💎ScoFilds▶💎",
        "Botumuzu Arkadaşlarınıza Tavsiye Ederseniz Cok Mutlu oluruz.",
        "İlk Başta Bota Emek Olduğunu Unutmayın!",
        "Botunuzu Eklerseniz mutlu oluruz.",
        "İstediğiniz Öneriler komutları varsa destek sunucumuza gelerek uraştırınız y!i",
        "💪 7/24 Aktif!", 
        "Atatürkü Saygıyla Sevgiyle Anıyoruz.", ];

    setInterval(function() {

        var random = Math.floor(Math.random()*(oyun.length-0+1)+0);

        client.user.setGame(oyun[random], "https://www.youtube.com/channel/UCRZn8_Blafnbwqen1w7OpMw?view_as=subscriber");
        }, 2 * 2500);
}