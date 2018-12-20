const cmd = require('discord.js-commando');

class addRule extends cmd.Command
{
    constructor(client)
    {
        super(client,{
            name: 'addrule',
            group: 'common',
            memberName: 'addrule',
            description: 'adds a rule.. are you stupid or something?'
        });
    }
    async run(msg, args)
    {
        msg.channel.sendMessage('Adding Rule..');
        const jsutil = require('../../Utils/JsonUtils')
        var dir = __dirname.slice(0, -15);
        var json = JSON.parse(require('fs').readFileSync(dir + 'otherData/rules.json', 'utf8'));
        var I;
        var i;
        for(i=1;i<jsutil.countKeysInFile(dir + 'otherData/rules.json')+2;i++){
            if(!(i in json))
                I = i;
        }
        jsutil.AddToJson(dir + 'otherData/rules.json', I, args);
        msg.channel.sendMessage('Added Rule: ' + I + ' '+ args);
    }
}

module.exports = addRule;