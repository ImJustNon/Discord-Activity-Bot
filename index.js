const { Client } = require("discord.js");
const Discord = require("discord.js");
const fetch = require("node-fetch");
const client = new Client();

const prefix = ''; //set your prefix
const token = ''; //set your bot token


const log = message => {
  console.log(` ${message}`);
};

client.on("message", async message => {
    if (message.author.bot || !message.guild) return;
    if (message.content.indexOf(prefix) !== 0) return;

    const args = message.content.slice(prefix.length).trim().split(" ");
    const cmd = args.shift().toLowerCase();

    if (cmd ==="youtube" || cmd === 'ytt') {
        const channel = message.guild.channels.cache.get(args[0]);

        if (!channel.permissionsFor(message.guild.me).has("CREATE_INSTANT_INVITE")) return message.reply("ฉันต้องการสิทธิ์ในการสร้างคำเชิญ");

        fetch(`https://discord.com/api/v8/channels/${channel.id}/invites`, {
            method: "POST",
            body: JSON.stringify({
                max_age: 86400,
                max_uses: 0,
                target_application_id: "755600276941176913", 
                target_type: 2,
                temporary: false,
                validate: null
            }),
            headers: {
                "Authorization": `Bot ${client.token}`,
                "Content-Type": "application/json"
            }
        })
        .then(res => res.json()).then(invite => {
            message.channel.send(new Discord.MessageEmbed()
            .setAuthor('YouTube-Together')
            .setThumbnail('https://cdn.discordapp.com/attachments/887363452304261140/892020173513564200/2560px-YouTube_full-color_icon_28201729.png')
            .setColor("#ff3d3d")
            .addFields(
                { name: `:tv:` +' |  ลิ้งสำหรับเข้า  **YouTube Together**  ค่ะ :', value: `https://discord.gg/${invite.code}` },
            )
            .setFooter("M i K U")
            .setTimestamp(new Date())
            );
        //log
        console.log("********************");
        console.log(new Date());
        console.log('starting youtube')
        console.log('Room = ' + message.member.voice.channel.name);
        console.log('Server = ' + message.guild.name);
        console.log("********************");

        })
        .catch(e => { message.channel.send(`**YouTube Together** ไม่สามารถเริ่ม! | รหัสข้อผิดพลาด: ${e}`); })
    }

    if (cmd ==="betrayal" || cmd ==="bt") {
        const channel = message.guild.channels.cache.get(args[0]);

        if (!channel.permissionsFor(message.guild.me).has("CREATE_INSTANT_INVITE")) return message.reply("ฉันต้องการสิทธิ์ในการสร้างคำเชิญ");

        fetch(`https://discord.com/api/v8/channels/${channel.id}/invites`, {
            method: "POST",
            body: JSON.stringify({
                max_age: 86400,
                max_uses: 0,
                target_application_id: "773336526917861400", 
                target_type: 2,
                temporary: false,
                validate: null
            }),
            headers: {
                "Authorization": `Bot ${client.token}`,
                "Content-Type": "application/json"
            }
        })
        .then(res => res.json()).then(invite => {
            message.channel.send(new Discord.MessageEmbed()
            .setAuthor('Betrayal.io')
            .setThumbnail('https://cdn.discordapp.com/attachments/887363452304261140/892033516311830528/uTq81LtO.png')
            .setColor("#9542f5")
            .addFields(
                { name: `:video_game:` +' |  ลิ้งสำหรับเข้า  **Betrayal.io**  ค่ะ :', value: `https://discord.gg/${invite.code}` },
            )
            .setFooter("M i K U")
            .setTimestamp(new Date())
            );

        //log
        console.log("********************");
        console.log(new Date());
        console.log('youtube')
        console.log('Room = ' + message.member.voice.channel.name);
        console.log('Server = ' + message.guild.name);
        console.log("********************");

        })
        .catch(e => { message.channel.send(`**Betrayal.io** ไม่สามารถเริ่ม! | รหัสข้อผิดพลาด: ${e}`); })
    }

    if (cmd ==="pokernight" || cmd ==="pn") {
        const channel = message.guild.channels.cache.get(args[0]);

        if (!channel.permissionsFor(message.guild.me).has("CREATE_INSTANT_INVITE")) return message.reply("ฉันต้องการสิทธิ์ในการสร้างคำเชิญ");

        fetch(`https://discord.com/api/v8/channels/${channel.id}/invites`, {
            method: "POST",
            body: JSON.stringify({
                max_age: 86400,
                max_uses: 0,
                target_application_id: "755827207812677713", 
                target_type: 2,
                temporary: false,
                validate: null
            }),
            headers: {
                "Authorization": `Bot ${client.token}`,
                "Content-Type": "application/json"
            }
        })
        .then(res => res.json()).then(invite => {
            message.channel.send(new Discord.MessageEmbed()
            .setAuthor('Discord:Poker Night')
            .setThumbnail('https://cdn.discordapp.com/attachments/887363452304261140/892229295991312384/Screen_Shot_2021-05-06_at_1.46.50_PM_2.png')
            .setColor("#9542f5")
            .addFields(
                { name: `:game_die:` +' |  ลิ้งสำหรับเข้า  **Discord:Poker Night**  ค่ะ :', value: `https://discord.gg/${invite.code}` },
            )
            .setFooter("M i K U")
            .setTimestamp(new Date())
            );

        //log
        console.log("********************");
        console.log(new Date());
        console.log('starting youtube')
        console.log('Room = ' + message.member.voice.channel.name);
        console.log('Server = ' + message.guild.name);
        console.log("********************");

        })
        .catch(e => { message.channel.send(`**Discord Poker Night** ไม่สามารถเริ่ม! | รหัสข้อผิดพลาด: ${e}`); })
    }

    if (cmd ==="fishington" || cmd ==="ft") {
        const channel = message.guild.channels.cache.get(args[0]);

        if (!channel.permissionsFor(message.guild.me).has("CREATE_INSTANT_INVITE")) return message.reply("ฉันต้องการสิทธิ์ในการสร้างคำเชิญ");

        fetch(`https://discord.com/api/v8/channels/${channel.id}/invites`, {
            method: "POST",
            body: JSON.stringify({
                max_age: 86400,
                max_uses: 0,
                target_application_id: "814288819477020702", 
                target_type: 2,
                temporary: false,
                validate: null
            }),
            headers: {
                "Authorization": `Bot ${client.token}`,
                "Content-Type": "application/json"
            }
        })
        .then(res => res.json()).then(invite => {
            message.channel.send(new Discord.MessageEmbed()
            .setAuthor('Fishington.io')
            .setThumbnail('https://cdn.discordapp.com/attachments/887363452304261140/892230059979575336/cover-1615371400662.png')
            .setColor("#12b0ff")
            .addFields(
                { name: `:diving_mask:` +' |  ลิ้งสำหรับเข้าเกม **Fishington.io** ค่ะ :', value: `https://discord.gg/${invite.code}` },
            )
            .setFooter("M i K U")
            .setTimestamp(new Date())
            );
        })
        .catch(e => { message.channel.send(`**Fishington.io** ไม่สามารถเริ่ม! | รหัสข้อผิดพลาด: ${e}`); })
    }

    if (cmd ==="chessinthepark" || cmd ==="chess") {
        const channel = message.guild.channels.cache.get(args[0]);

        if (!channel.permissionsFor(message.guild.me).has("CREATE_INSTANT_INVITE")) return message.reply("ฉันต้องการสิทธิ์ในการสร้างคำเชิญ");

        fetch(`https://discord.com/api/v8/channels/${channel.id}/invites`, {
            method: "POST",
            body: JSON.stringify({
                max_age: 86400,
                max_uses: 0,
                target_application_id: "832012774040141894", 
                target_type: 2,
                temporary: false,
                validate: null
            }),
            headers: {
                "Authorization": `Bot ${client.token}`,
                "Content-Type": "application/json"
            }
        })
        .then(res => res.json()).then(invite => {
            message.channel.send(new Discord.MessageEmbed()
            .setAuthor('Discord:Chess In The Park')
            .setThumbnail('https://cdn.discordapp.com/attachments/887363452304261140/892232912089534514/chess_banner.png')
            .setColor("#12b0ff")
            .addFields(
                { name: `:chess_pawn:` +' |  ลิ้งสำหรับเข้าเกม **Discord:Chess In The Park** ค่ะ :', value: `https://discord.gg/${invite.code}` },
            )
            .setFooter("M i K U")
            .setTimestamp(new Date())
            );
        })
        .catch(e => { message.channel.send(`**Fishington.io** ไม่สามารถเริ่ม! | รหัสข้อผิดพลาด: ${e}`); })
    }

    if (cmd ==="chessintheparkdevelopment" || cmd ==="chessdev") {
        const channel = message.guild.channels.cache.get(args[0]);

        if (!channel.permissionsFor(message.guild.me).has("CREATE_INSTANT_INVITE")) return message.reply("ฉันต้องการสิทธิ์ในการสร้างคำเชิญ");

        fetch(`https://discord.com/api/v8/channels/${channel.id}/invites`, {
            method: "POST",
            body: JSON.stringify({
                max_age: 86400,
                max_uses: 0,
                target_application_id: "832012586023256104", 
                target_type: 2,
                temporary: false,
                validate: null
            }),
            headers: {
                "Authorization": `Bot ${client.token}`,
                "Content-Type": "application/json"
            }
        })
        .then(res => res.json()).then(invite => {
            message.channel.send(new Discord.MessageEmbed()
            .setAuthor('Discord:Chess In The Park Development')
            .setThumbnail('https://cdn.discordapp.com/attachments/887363452304261140/892232912089534514/chess_banner.png')
            .setColor("#12b0ff")
            .addFields(
                { name: `:gear:` +' |  ลิ้งสำหรับเข้าเกม **Discord:Chess In The Park Development** ค่ะ :', value: `https://discord.gg/${invite.code}` },
            )
            .setFooter("M i K U")
            .setTimestamp(new Date())
            );
        })
        .catch(e => { message.channel.send(`**Discord:Chess In The Park Development** ไม่สามารถเริ่ม! | รหัสข้อผิดพลาด: ${e}`); })
    }


});



client.login(token).then(c => console.log(`${client.user.tag} Sign in!`)).catch(err => console.error("Failed to enter the bot!"));

