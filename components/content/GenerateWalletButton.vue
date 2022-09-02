<script setup>
import LoadingBar from "./LoadingBar";
</script>

<script>
import {cryptoWaitReady} from "@polkadot/util-crypto";
import {Keyring} from "@polkadot/keyring";

export default {
    // By moving the code that needs window & document to mounted,
    // now it will only be executed client-side
    data: () => ({
        generated: false,
        generating: false,
        generationStartSec: 0,
        generationInSeconds: 0,
        progressText: "",
        vanityDuplicateLettersAllowed: true,
        vanityAttempt: 0,
        vanityVisible: false,
        vanityName: "",
        publicAddress: "",
        standardMnemonic: "",
        quantumMnemonic: "",
    }),
    methods: {
        toggleVanity() {
            this.vanityVisible = !this.vanityVisible;
            this.generated = false;
            if (!this.vanityVisible) {
                this.vanityName = "";
                this.generating = false;
            }
        },
        showWallet({publicAddress, standardMnemonic, quantumMnemonic}) {
            this.publicAddress = publicAddress;
            this.standardMnemonic = standardMnemonic;
            this.quantumMnemonic = quantumMnemonic;
        },
        newWallet() {
            // eslint-disable-next-line no-undef
            const result = global.newSleeveWallet("");
            if (!result.success) {
                console.log("Error generating wallet: ", result.msg);
                return;
            }
            const standardMnemonic = result["mnemonics"]["standard"];
            const quantumMnemonic = result["mnemonics"]["quantum"];
            const keyring = new Keyring({type: "sr25519", ss58Format: 55});
            const wallet = keyring.addFromMnemonic(standardMnemonic);
            const publicAddress = wallet.address;
            keyring.removePair(publicAddress);
            return {publicAddress, standardMnemonic, quantumMnemonic};
        },
        getSeconds: function () {
            return Math.floor(new Date().getTime() / 1000);
        },
        generateWalletsUntilMatches(regExp) {
            if (!this.generating)
                return;
            const wallet = this.newWallet();
            this.vanityAttempt++;
            if (this.vanityName === "" || wallet.publicAddress.match(regExp)) {
                this.showWallet(wallet);
                this.generated = true; // show address + mnemonics
                this.stopGeneration();
                if (this.vanityName !== "")
                    console.log(`${this.vanityAttempt} wallets generated in ${this.generationInSeconds}s`);
                return;
            }
            this.generationInSeconds = this.getSeconds() - this.generationStartSec;
            const s = this.generationInSeconds % 60;
            const m = (this.generationInSeconds - s) / 60;
            const h = (this.generationInSeconds - s - m * 60) / 3600;
            const time = (h > 0 ? `${h}h ` : "")
                + (m > 0 ? `${m}m ` : "")
                + (s > 0 ? `${s}s ` : "");
            if (time !== "")
                this.progressText = `${this.vanityAttempt} wallets generated in ${time}`;
            setTimeout(this.generateWalletsUntilMatches, 0, regExp);
        },
        stopGeneration() {
            this.generating = false; // hide button + show loader
        },
        generateWallet() {
            this.generated = false; // hide address + mnemonics
            this.generating = true; // show button + hide loader
            this.progressText = "";
            this.vanityAttempt = 0;
            this.generationStartSec = this.getSeconds();
            let name = this.vanityName;
            if (this.vanityDuplicateLettersAllowed)
                name = [...name].reduce((accumulator,c) => accumulator + c + "+", "");
            const regExp = new RegExp(name, "i");
            // Wait for crypto library WASM to load
            cryptoWaitReady().then(() => this.generateWalletsUntilMatches(regExp));
        }
    },
    mounted() {
        const request = new XMLHttpRequest();
        request.open("GET", "/main.wasm");
        request.responseType = "arraybuffer";
        request.send();
        request.onload = function () {
            const wasmBuffer = request.response;
            // eslint-disable-next-line no-undef
            const go = new Go();
            WebAssembly.instantiate(wasmBuffer, go.importObject).then(result => {
                go.run(result.instance); // This future never returns
            });
        };
    }, // CLOSING mounted() {
}; // CLOSING export default {
</script>

<template>
    <main>
        <div class="container has-text-centered mb-4">
            <div v-show='generating'>
                <p class="has-text-white has-text-shadow-2 mb-4">
                    Please wait while searching for '{{ vanityName.toUpperCase() }}'
                </p>
                <LoadingBar></LoadingBar>
                <p class="has-text-white has-text-shadow-2 mt-4" v-show='generating'>
                    Average duration to match:
                </p>
                <p class="has-text-white has-text-shadow-2">
                    3 letters=1 to 2 min, 4 letters=2 to 30 min, 5 letters=1 to 12 hours.
                </p>
                <p class="has-text-white has-text-shadow-2 mt-4 mb-4" v-show='generating'>
                    {{ progressText }}
                </p>
            </div>
            <button class="button is-info has-text-weight-bold has-text-shadow-2 mb-4"
                    @click="generating ? stopGeneration() : generateWallet()">
                {{ generating ? "Stop generation" : "Generate wallet" }}
            </button>
            <div class="container has-text-centered mb-4" v-show='!generating'>
                <p class="has-text-white has-text-shadow-2">
                    <input type="checkbox" class="mr-2" @click='toggleVanity()'/>
                    Use vanity name in public address
                </p>
                <p class="has-text-white has-text-shadow-2" v-show="generated && vanityVisible">
                    {{ progressText!=="" ? `Found within ${progressText}` : ""}}
                </p>
                <p class="has-text-white has-text-shadow-2 m-2" v-show='vanityVisible'>
                    <input v-model="vanityName" placeholder="Type your vanity name"/>
                </p>
                <p class="has-text-white has-text-shadow-2" v-show='vanityVisible && !generated'>
                    This option continuously generates wallets until one is found
                    whose public address contains the requested vanity name.
                    The vanity name is case insensitive and allows duplicated letters:
                    NAAMME is a valid match for NAME.
                </p>
            </div>
        </div>
        <MnemonicList title='1/3 Public Wallet Address' id='PublicAddress' v-bind:mnemonic='publicAddress'
                      v-show='generated'/>
        <MnemonicList title='2/3 Standard Mnemonic' id='StandardMnemonic' v-bind:mnemonic="standardMnemonic"
                      v-show='generated'>
            This recovery phrase is used like any other cryptocurrency recovery phrase.
            If you want to recreate your wallet, you need to use this recovery phrase.
        </MnemonicList>
        <MnemonicList title='3/3 Quantum Mnemonic' id='QuantumMnemonic' v-bind:mnemonic="quantumMnemonic"
                      v-show='generated'>
            This recovery phrase will be used in the future
            when the xx network consensus adopts quantum-secure signatures.
            Your Standard recovery phrase is generated from this.
        </MnemonicList>
    </main>
</template>
<style>
.has-text-shadow-2 {
    text-shadow: 0 0 1px #000, 0 0 2px #000;
}
</style>