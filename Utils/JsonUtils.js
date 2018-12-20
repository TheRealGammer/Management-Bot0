module.exports = {
    AddToJson: function(file, key, string){
        const fs = require('fs');
        var text = JSON.parse(fs.readFileSync(file, 'utf8'));
        text[key] = string;
        fs.writeFileSync(file, JSON.stringify(text));
    },
    countKeys: function(obj) {
        return Object.keys(obj).length;
     },
     countKeysInFile: function(file) {
        return require('../Utils/JsonUtils').countKeys(JSON.parse(require('fs').readFileSync(file, 'utf8')));
     }
}