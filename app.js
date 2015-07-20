var bitcore = require('bitcore');

var args = process.argv.slice(2);
var passphrase = args[0] || '';
var value = bitcore.deps.Buffer(passphrase);
var hash = bitcore.crypto.Hash.sha256(value);
var privateKey = new bitcore.PrivateKey(hash);
console.info(privateKey.toAddress().toString());
