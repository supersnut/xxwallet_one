---
layout: index
title: 'XX Wallet One: Generate a XX wallet from your browser'
---

::HeroParagraph
The official way to create a Wallet is by using the applications from the
[Official XX Wallet page](https://xxnetwork.wiki/Using_the_Wallet_Generator).
This offline generator offers a simpler and secure alternative.
It generates a XX Wallet, directly from your Web Browser, without any communication to any server.
It uses the [official code](https://github.com/xx-labs/scripts/blob/main/walletgen/index.js), without any modification.
It is as safe as your browser is. If you have installed browser extensions that can read your page content, 
then they could also potentially read your wallet.
To minimize this risk, we recommend to disable these extensions unless you trust them.
::

::HeroTitle
Create your first XX Wallet
::

::GenerateWalletButton
Generate quantum-ready wallet
::

::Mnemonic{title='1/3 Public Wallet Address' id='PublicAddress'}
::

::Mnemonic{title='2/3 Standard Mnemonic' id='StandardMnemonic'}
This recovery phrase is used like any other cryptocurrency recovery phrase. 
If you want to recreate your wallet, you need to use this recovery phrase.
::

::Mnemonic{title='3/3 Quantum Mnemonic' id='QuantumMnemonic'}
This recovery phrase will be used in the future
when the xx network consensus adopts quantum-secure signatures.
Your Standard recovery phrase is generated from this.
::

::Tips{title='🔒️ Security Tips️ 🔒️'}
* It is extremely important that you store BOTH mnemonic phrases in a safe, secure, and private location.
* Losing your recovery phrase will result in the inability to access your coins.
* Never give your recovery phrase to anyone — Knowledge of the recovery phrase is the same as control of the wallet. Sharing a recovery phrase gives the holder complete access to all funds in the wallet.
* Ensure that you trust any application you enter your recovery phrase into — Any application that knows them has complete control of your funds.
* It is not advised to store a wallet on a cloud service or a computer, unless the wallet file is encrypted by a strong password that you are the only one to control.
* Store your recovery phrase somewhere safe, avoid taking a picture of it and uploading it on Google Photo or Apple iCloud.
::
