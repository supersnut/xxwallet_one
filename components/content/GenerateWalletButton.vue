<script>
import {cryptoWaitReady}  from "@polkadot/util-crypto";
import {Keyring} from '@polkadot/keyring';


export default {
  // By moving the code that needs window & document to mounted,
  // now it will only be executed client-side
  mounted() {

const request = new XMLHttpRequest();
request.open('GET', '/main.wasm');
request.responseType = 'arraybuffer';
request.send();
request.onload = function() {
  const wasmBuffer = request.response;
  const go = new Go();
  WebAssembly.instantiate(wasmBuffer, go.importObject).then(result => {
    go.run(result.instance); // This future never returns
  });
};

Window.xx_wallet_generator = () => {
    // Generate a new Sleeve Wallet
    const result = global.newSleeveWallet("");
    if (!result.success) {
        console.log("Error generating wallet: ", result.msg);
        return;
    }
    const setHtml = (id, html) => {
        const elem = document.getElementById(id);
        if (elem) elem.innerHTML = html;
        else console.log(`element id:${id} not found.`);
    };
    const setVisible = (id, visible) => {
        const elem = document.getElementById(id);
        if (elem) elem.style.display = visible ? '' : 'none';
        else console.log(`element id:${id} not found.`);
    };

    // The Sleeve Wallet output has 2 mnemonics
    // Quantum: should be stored safely as a quantum secure backup of the wallet for future proofing
    // Standard: will be used to create a standard wallet that is currently used in xx network
    // Construct the keying, using ss58 format 55, which is registered for xx network
    const keyring = new Keyring({ type: 'sr25519', ss58Format: 55 });
    // Wait for crypto library WASM to load
    cryptoWaitReady().then(() => {
        // Add the wallet to the keyring
        const wallet = keyring.addFromMnemonic(result["mnemonics"]["standard"]);
        // Print the wallet information
        // console.log("Mnemonic standard: ", result["mnemonics"]["standard"]);
        // console.log("Mnemonic quantum: ", result["mnemonics"]["quantum"]);
        // console.log("Address: ", wallet.address);
        setHtml('PublicAddress.0', wallet.address);
        setVisible('PublicAddress', true);
        setVisible(`StandardMnemonic`, true);
        setVisible(`QuantumMnemonic`, true);
        const standard = result["mnemonics"]["standard"].trim().split(' ');
        const quantum = result["mnemonics"]["quantum"].trim().split(' ');
        for (let i = 0; i < 24; i++) {
            setHtml(`StandardMnemonic.${i}`, standard[i]);
            setHtml(`QuantumMnemonic.${i}`, quantum[i]);
        }
    });

}; // CLOSING XX wallet generator

} // CLOSING mounted() {

}; // CLOSING export default {
</script>

<template>
  <main>
    <div class="container has-text-centered mb-4">
        <button class="button is-info has-text-weight-bold has-text-shadow-2 mb-4"
         onclick="javascript:Window.xx_wallet_generator();">
        <slot/>
        </button>
    </div>
  </main>
</template>
<style>
.has-text-shadow-2 {
  text-shadow: 0px 0px 1px #000, 0px 0px 2px #000;
}
</style>