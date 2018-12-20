const cmd = require('discord.js-commando');

class changeRule extends cmd.Command
{
    constructor(client)
    {
        super(client,{
            name: 'changerule',
            group: 'common',
            memberName: 'changerule',
            description: 'changes a rule.. are you stupid or something?'
        });
    }
    async run(msg, args)
    {
        msg.channel.sendMessage('Changing Rule..');
        const jsutil = require('../../Utils/JsonUtils')
        var dir = __dirname.slice(0, -15);
        var I = '';
        var i;
        var offSet;
        var num = '';
        for (i = 0; i<args.length; i++){
            if(isNaN(args[i]))
                break;
            else offSet = i;
            num = num+args[i];
        }
        for (i = offSet; i<args.length; i++)
            I = I+args[i];
        const count = jsutil.countKeysInFile(dir + 'otherData/rules.json');
        if(num>count)
            num = count+1;
        num = (num.slice(0,-1));
        jsutil.AddToJson(dir + 'otherData/rules.json', num, I);
        msg.channel.sendMessage('Changed Rule: ' + num + I);
    }
}

module.exports = changeRule;