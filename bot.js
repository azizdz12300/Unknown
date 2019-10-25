const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready',async () => {//TX console.log("Starting..");//TX let g = client.guilds.get("id"); // id server let c = g.channels.get("631184361529671691");// id channel if(c.type === 'onix') {//TX c.join();//TX setInterval(() => {//TX if(!g.me.voiceChannel) c.join(); }, 1);//Toxic Codes } else {//TX console.log('Failed To Join: \n The Channel Type isn "Listening."') } });



client.login(process.env.BOT_TOKEN);

