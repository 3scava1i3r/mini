 const {
   Client,
   TokenCreateTransaction,
   Hbar,
   PrivateKey,
   PublicKey,
   TokenInfoQuery,
   AccountBalanceQuery,
   TokenAssociateTransaction,
   TransferTransaction,
   AccountInfoQuery,
   TopicCreateTransaction,
   TopicMessageSubmitTransaction,
   TopicMessageQuery,
 } = require("@hashgraph/sdk");
 

  const a = async () => {
    const SellerAccId = "0.0.301906";
    const SellerPblKey =
      "0x302a300506032b657003210044c714812aec04be8c2c2704d4f0432f49b2f2b3350aa69fdc9b9715de9a8d9a";
    const SellerPrKey =
      "0x302e020100300506032b65700422042092d0f20b0324b71b55bf397a85c214bbb66e98c8869911fb30dd7b6a0d60b7a4";

    /* const tokenId = '0.0.303341'; */

    const accountId = "0.0.303460";
    const publicKey =
      "302a300506032b65700321002ee57aad815e3597b7815728315e51bf42fbd867e32b9deb40d1f483cfc9ea6e";
    const privateKey =
      "302e020100300506032b6570042204201026b742d1ee8cb5a0141652191e0b63ec92719c53ab8ed59d98e6fc8f21ce45";

    const client = Client.forTestnet();

    client.setOperator(SellerAccId, SellerPrKey);

    //create token
    /* const transaction = await new TokenCreateTransaction()
                        .setTokenName('ggggggg')
                        .setTokenSymbol('gt')
                        .setTreasuryAccountId(SellerAccId)
                        .setInitialSupply(1000)
                        .execute(client);
       
            console.log(transaction.transactionId.validStart.seconds.toString())

                
            //Get the receipt of the transaction
            const receipt = await transaction.getReceipt(client)

            
            //Get the token ID from the receipt
            const tokenId = receipt.tokenId;
        
            console.log(tokenId.toString());   */

    //Create the query
    //Token info
    /* const query = await new TokenInfoQuery()
                .setTokenId(tokenId)
                .execute(client);

                console.log(query);

                console.log(query.totalSupply.toString());
 */

    //Sign with the client operator private key, submit the query to the network and get the token supply

    //Buying

    /*  const transactionp = await new TokenAssociateTransaction()
                .setAccountId(accountId)
                .setTokenIds([tokenId])
                .freezeWith(client);

            //Sign with the private key of the account that is being associated to a token 
            const signTx = await transactionp.sign(PrivateKey.fromString(privateKey));

            //Submit the transaction to a Hedera network    
            const txResponse = await signTx.execute(client);

            //Request the receipt of the transaction
            const receiptl = await txResponse.getReceipt(client);
                
            //Get the transaction consensus status
            const transactionStatus = receiptl.status;

            console.log(receiptl)

            console.log("The transaction consensus status " +transactionStatus.toString());


            
            const tx = await new TransferTransaction()
            .addTokenTransfer(tokenId, SellerAccId, -10)
            .addTokenTransfer(tokenId, accountId, 10)
            .freezeWith(client);

            //Sign with the sender account private key
            const sign = await tx.sign(PrivateKey.fromString(SellerPrKey));
                
            //Sign with the client operator private key and submit to a Hedera network
            const txResponse1 = await sign.execute(client);
                
            //Request the receipt of the transaction
            const receipt1 = await txResponse1.getReceipt(client);
                
            //Obtain the transaction consensus status
            const transactionStatus1 = receipt1.status;

            console.log(receipt1)

            console.log("The transaction consensus status " +transactionStatus1.toString());


            const txn = await new TransferTransaction()
            .addHbarTransfer(SellerAccId, 10)
            .addHbarTransfer(accountId, -10)
            
            .freezeWith(client);

            //Sign with the sender account private key
            const sign2 = await txn.sign(PrivateKey.fromString(privateKey));
                
            //Sign with the client operator private key and submit to a Hedera network
            const txResponse2 = await sign2.execute(client);
                
            //Request the receipt of the transaction
            const receipt2 = await txResponse2.getReceipt(client);
                
            //Obtain the transaction consensus status
            const transactionStatus2 = receipt2.status;

            console.log(receipt2)

            console.log("The transaction consensus status " +transactionStatus1.toString());


 */

    //only transfer

    /* const transactionp = await new TokenAssociateTransaction()
                .setAccountId(accountId)
                .setTokenIds([tokenId])
                .freezeWith(client);

            //Sign with the private key of the account that is being associated to a token 
            const signTx = await transactionp.sign(PrivateKey.fromString(privateKey));

            //Submit the transaction to a Hedera network    
            const txResponse = await signTx.execute(client);

            //Request the receipt of the transaction
            const receiptl = await txResponse.getReceipt(client);
                
            //Get the transaction consensus status
            const transactionStatus = receiptl.status;

            console.log(receiptl)

            console.log("The transaction consensus status " +transactionStatus.toString());



            const transactionw = await new TransferTransaction()
                .addTokenTransfer(tokenId, SellerAccId, -1)
                .addTokenTransfer(tokenId, accountId, 1)
                .freezeWith(client);

            //Sign with the sender account private key
            const signTxq = await transactionw.sign(PrivateKey.fromString(SellerPrKey));
                
            //Sign with the client operator private key and submit to a Hedera network
            const txResponseq = await signTxq.execute(client);
                
            //Request the receipt of the transaction
            const receiptq = await txResponseq.getReceipt(client);
            
            console.log(receiptq)
            //Obtain the transaction consensus status
            const transactionStatusq = receiptq.status;
 */
    /* console.log("The transaction consensus status " +transactionStatusq.toString()); */

    // query an account
    /* const query = await new AccountBalanceQuery().setAccountId(accountId).execute(client);
            
            console.log(query.tokens.toString());

            const a = query.tokens; */

    /* for (const [key, value] of a) {
              console.log(key.toString(), value.toString());
              
              
              
            } */

    // NFT token code
    /* const transaction = await new TokenCreateTransaction()
              .setTokenName("nft")
              .setTokenSymbol()
              .setTreasuryAccountId(SellerAccId)
              .setInitialSupply(1)
              .freezeWith(client);

            console.log(
              transaction.transactionId.validStart.seconds.toString()
            );
            

            //Get the receipt of the transaction

            const txn = await transaction.sign(PrivateKey.fromString(SellerPrKey));
            

            const signtxn = await txn.execute(client);
            console.log(txn)

            const receipt = await signtxn.getReceipt(client);
            
            //Get the token ID from the receipt
            const tokenId = receipt.tokenId;

            console.log(tokenId.toString());    */



    //Create the transaction
    const transaction = new TopicCreateTransaction()
    .setSubmitKey(PrivateKey.fromString(SellerPrKey));

    //Sign with the client operator private key and submit the transaction to a Hedera network
    const txResponse = await transaction.execute(client);

    //Request the receipt of the transaction
    const receipt = await txResponse.getReceipt(client);
    
    //Get the topic ID
    const newTopicId = receipt.topicId;

    console.log("The new topic ID is " + newTopicId);

    const l = await new TopicMessageSubmitTransaction({
      topicId: newTopicId,
      message: "Hello World",
    }).execute(client);

    const r = await l.getReceipt(client)
    console.log(r)


    const g = await new TopicMessageQuery()
      .setTopicId(newTopicId)
      .setStartTime(0)
      .subscribe(client, (message) =>
        console.log(Buffer.from(message.contents, "utf8").toString())
      );

    console.log(g)

  }

    a();

    
