const cmd = require('discord.js-commando');

class removeRule extends cmd.Command
{
    constructor(client)
    {
        super(client,{
            name: 'removerule',
            group: 'common',
            memberName: 'removerule',
            description: 'removes a rule.. are you stupid or something?'
        });
    }
    async run(msg, args)
    {
        msg.channel.sendMessage('Removing Rule..');
        var json = JSON.parse(require('fs').readFileSync('otherData/rules.json', 'utf8'));
        delete json[args];
        json = JSON.stringify(json);
        require('fs').writeFileSync(__dirname.slice(0, -15) + 'otherData/rules.json', json)
        msg.channel.sendMessage('Removed Rule: ' + args);
    }
}

module.exports = removeRule;