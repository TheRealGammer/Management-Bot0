const cmd = require('discord.js-commando');

class simplify extends cmd.Command
{
    constructor(client)
    {
        super(client,{
            name: 'simplify',
            group: 'common',
            memberName: 'simplify',
            description: 'Simplify a fration. i.e.: >simplify 8 10.. gives you 2/5'
        });
    }
    async run(msg, args)
    {
        var i; var second = ''; var first = ''; var bo = true;
        for (i = 0; i<args.length; i++)
            if(isNaN(args[i]))
                bo = false;
        if (bo)
        {
            var sp = args.split(' ');
            const re = require('./simply-fractions.methods');
            var a = re.com(sp[0], sp[1]);
            var b = re.com(a[0], a[1]);
            while (true){
                if(a[0]==b[0] && a[1]==b[1])
                    break;
                else{
                    a = b;
                    b = re.com(a[0],a[1]);
                }
                var str;
                if (b[1]==1)
                    str = '\n' + b[0] + '\n';
                else str = '\n' + b[0] + '/' + b[1] + '\n';
                console.log(str);
            }
        }
    }
}

module.exports = simplify;