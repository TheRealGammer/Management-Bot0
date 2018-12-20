const cmd = require('discord.js-commando');

class updateRules extends cmd.Command
{
    constructor(client)
    {
        super(client,{
            name: 'updaterules',
            group: 'common',
            memberName: 'updaterules',
            description: 'updates rules.. are you stupid or something?'
        });
    }
    async run(ms,a)
    {
        var json = JSON.parse(require('fs').readFileSync(__dirname.slice(0, -15) + 'otherData/rules.json', 'utf8'));
        const dsc = require('discord.js');
        var rules = new dsc.RichEmbed()
            .setTitle("Rules")
            .setColor(0x110000);
        var i;
        var str = '';
        for (i = 1; i<require('../../Utils/JsonUtils').countKeys(json)+1; i++)
            str = str+Object.getOwnPropertyNames(json)[i-1]+'. '+json[Object.keys(json)[i-1]]+'\n';
        rules = rules.setDescription(str);
        require('../../main').SayRichInChannel("rules", rules);
    }
}

module.exports = updateRules;