const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'git', fromMe: false, desc: "Gives github link of the bot"}, (async (message, match) => {

    var skl = await axios.get("https://i.imgur.com/Mbaz2g9.jpg", { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(skl.data), MessageType.image, {mimetype: Mimetype.png, caption: `*spirit  bot created by Spirit*
*Creator number : wa.me/916238560742?text=Hi%20𝒂𝒏𝒔𝒉𝒊𝒅%20.%20*

*Pᴜʙʟɪᴄ ʙᴏᴛ ɢʀᴏᴜᴘ* : https://chat.whatsapp.com/F3adhxvYpd3KzVptzDxhC4

*Gɪᴛʜᴜʙ ʟɪɴᴋ * :    https://github.com/ANUSER1/COSMO

*Aᴜᴅɪᴏ ᴄᴀᴍᴍᴀɴᴅs* :   https://github.com/ANUSER1/COSMO/tree/master/uploads

*Sᴛɪᴄᴋᴇʀ ᴄᴀᴍᴍᴀɴᴅs* : https://github.com/QNUSER1/COSMO/tree/master/sticker
`}) 

}));

