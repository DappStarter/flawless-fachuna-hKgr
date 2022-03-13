require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid glide fruit sugar fire ridge remain slow gloom dry fortune second'; 
let testAccounts = [
"0x5d0a8666338c307a41a0500141f6ac47017cc12c54611b88d0f14a9a32da646e",
"0x164bc4ee0336a252e200aeee105d5e146c09cdfdf090f2677040a29d1a65b8ee",
"0xf00599160d3c3902d8b955c48ffcab2c58949976ea414e4627bb081f5fa03816",
"0x93a08eab039044629ea5bce424add65d61dfeb3053b0490a91f56bad1d1b2b8c",
"0x21f0c71bc454b3f855104d92180a1ea911b036296aca4136cc6a336070f0addc",
"0x7a041100ed1f51c93a9492e691887c0464fdeb6d597da34d947a5305b8933580",
"0xcc3a3fb0ee807bccdf8c098343733bd8e53cf312c3f80c8bea6d86aace86edf1",
"0x65ddb54631477c0162ffd5f270b018d88f8c32f8862009a51f198c596012dfa3",
"0x7e4d3419c3b42497360f47dd464ab3966fdb2ac2cd9645ca7c2094c970b60ccf",
"0x722f690c30ed692d82a1d051b120c7eb403db3af513c95fc990e4d7185a472c4"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

