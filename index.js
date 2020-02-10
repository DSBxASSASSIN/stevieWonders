const Discord = require("discord.js");
require("dotenv").config();
const bot = new Discord.Client();

const token = process.env.TOKEN_KEY;

const PREFIX = "?";
const AUTHOR = "DSBxASSASSIN";
const VERSION = "1.0.0";
const BOTNAME = "stevieWonders";

bot.on("ready", ()=>{
    console.log(`logged in as ${bot.user.tag}`);
})

bot.on("message", message=>{
    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[1]){
        case "clear":
            if(!args[1]){
                message.channel.send("invallid arguments");
            }else{
                message.channel.bulkDelete(args[1]);
            }
    }
})

bot.login(token);