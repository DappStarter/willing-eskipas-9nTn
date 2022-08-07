require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz enter brand spot toy note noise hope harvest loan fresh gate'; 
let testAccounts = [
"0x234d278709aa930e26fa34fefea46f58070e9c6192c6ec10b4a0ce2c2b62b239",
"0x282738087c224c60d46082152e056badb49c97b3c68561777b6c2010ae11b4cc",
"0x3744a65bbc8b4503d63cb8501f7af2b6399a10f92d14bd9893bd0fa8033841ed",
"0x65c6853e341f76405819e75a5f91f12fc08232bdceb73d7c841e54f9e7fc16b6",
"0xd282392d221c486f5b180dad42a011e319a4cc33571b489b2b0c184b2983ddc8",
"0x5aebec73ac5a01696392b19ad9e92cc166d4425fa2f2e7cdd286301dfb49696b",
"0x3a066c0af159996094f704df55381b7c01d75d1f68ac39405a5293dc99e9a4bf",
"0x181c05156001e983be9aebbc91691878505c52769c80794d408ff85acd9edf11",
"0xe35a7a6cc09385a02f23b2ee4718f5d8e19fd84f6148a9f92626847c050b1d40",
"0x3da9bf75ecc83d2e2031d3834d1391afef0abaa1c05bb60540f1b96bd653eb68"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

