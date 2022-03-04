const Discord = require("discord.js")
require("dotenv").config()


const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

client.on("ready", () => {
    console.log(`${client.user.username} is online now!`)
})

client.on("messageCreate", (message) => {
    if (message.content === "!test"){
        message.reply("Test!")
    }
})

client.login(process.env.TOKEN)