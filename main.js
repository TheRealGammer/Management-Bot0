// #region const declaration
const json = JSON.parse(require('fs').readFileSync('config.json', 'utf8'));
const cmd = require('discord.js-commando');
const cmmd = new cmd.Client({commandPrefix: '>'});
// #endregion

// #region registry commands
cmmd.registry.registerGroup('common','common');
cmmd.registry.registerCommandsIn(__dirname + '/commands');
// #endregion
cmmd.login(json.token);

// #region On

cmmd.on ("guildMemberAdd", member =>{
    module.exports.SayInChannel("logs","Welcome")
});

// #endregion

module.exports = 
{
    SayInChannel: function(c,m)
    {
        cmmd.channels.find("name",c).send(m);
    },
    SayRichInChannel: function(c,m)
    {
        cmmd.channels.find("name",c).sendEmbed(m);
    }
}