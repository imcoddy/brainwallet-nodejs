var bitcore = require('bitcore');

var thing = '';
var value = bitcore.deps.Buffer(thing);
var hash = bitcore.crypto.Hash.sha256(value);
var privateKey = new bitcore.PrivateKey(hash);
console.info(privateKey.toAddress().toString());
