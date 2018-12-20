const cmd = require('discord.js-commando');

class RandomNumber extends cmd.Command
{
    constructor(client)
    {
        super(client,{
            name: 'random',
            group: 'common',
            memberName: 'random',
            description: 'Give two numbers for range, or one number for range of 0...input, and picks a random number between them.'
        });
    }
    async run(msg, args)
    {
        if(args.length==1)
        { msg.channel.sendMessage(Math.floor(Math.random() * Math.floor(args)));
        }else if (args.length==3){
            var a2 = args[2];
            a2++;
            msg.channel.sendMessage(Math.floor((Math.random() * (a2-args[0])))+Math.floor(args[0]));
        }
    }
}

module.exports = RandomNumber;