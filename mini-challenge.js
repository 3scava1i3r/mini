const { Client , TokenCreateTransaction ,Hbar , PrivateKey, PublicKey} = require("@hashgraph/sdk");
const { sign } = require("tweetnacl");
require("dotenv").config();

async function main() {

    //Grab your Hedera testnet account ID and private key from your .env file
    const myAccountId = process.env.MY_ACCOUNT_ID;
    const myPrivateKey = process.env.MY_PRIVATE_KEY;
    const myPublicKey = process.env.MY_PUBLIC_KEY;
    console.log(typeof(myPrivateKey))

    const prk = PrivateKey.fromString(myPrivateKey)
    const pbk = PublicKey.fromString(myPublicKey)

    console.log(prk)
    console.log(pbk)

  /*   const privateKey = await PrivateKey.generate();
    const publicKey = privateKey.publicKey;

    console.log("private = " + privateKey);
    console.log("public = " + publicKey); */

    // If we weren't able to grab it, we should throw a new error
    if (myAccountId == null ||
        myPrivateKey == null ) {
        throw new Error("Environment variables myAccountId and myPrivateKey must be present");
    }
    
    // Create our connection to the Hedera network
    // The Hedera JS SDK makes this reallyyy easy!
    const client = Client.forTestnet();

    client.setOperator(myAccountId, myPrivateKey);

    const tx = await new TokenCreateTransaction().setTokenName("Hello_Hedera").setTokenSymbol("HH").setTreasuryAccountId(myAccountId).setInitialSupply(50000).setDecimals(0).freezeWith(client)

    console.log(tx)
    const signTx =  await tx.sign(prk);
    console.log(signTx)
    

    //Sign the transaction with the client operator private key and submit to a Hedera network
    const txResponse = await signTx.execute(client);
        
    //Get the receipt of the transaction
    const receipt = await txResponse.getReceipt(client);

    //Get the token ID from the receipt
    const tokenId = receipt.tokenId;

    console.log("The new token ID is " + tokenId);
}
main();