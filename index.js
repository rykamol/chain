const sha256=require('crypto-js/sha256')

class Block{
    constructor(timestamp,data,previousHas=""){
        this.timestamp=timestamp;
        this.data=data;
        this.previousHas=previousHas;
        this.hash=this.calculateHash();
    }

    calculateHash(){
        return sha256(
        this.timestamp+JSON.stringify(this.data)+this.previousHas).toString();
    }
}

class BlockChain{
    constructor(){
        this.chain=[this.generateGenesisBlock()];
    }

    generateGenesisBlock(){
        return new Block('2019-1-2',"Genesis","0000")
    }

    getLatestBlock(){
        return this.chain[this.chain.length-1];
    }
    addBlock(newBlock){
        newBlock.previousHas=this.getLatestBlock().hash;
        newBlock.hash = newBlock.calculateHash();
        this.chain.push(newBlock);
    }

    isChainValid(){
        for(let i=1;i<this.chain.length-1;i++){
            const currentBlock=this.chain[i]
            const previousBlock=this.chain[i-1];

            if(currentBlock.previousHas !=previousBlock.hash)
                return false;
            
            if(currentBlock.hash != currentBlock.calculateHash())
                return false;

            return true;
        }
    }
}

// const joosCoin=new BlockChain();
// const block=new Block('2019-1-2',{amount:5})

// joosCoin.addBlock(block)
// const block2=new Block('2019-2-2',{amount:5})
// joosCoin.addBlock(block2)
// console.log(joosCoin);

// console.log(joosCoin.isChainValid())

// joosCoin.chain[1].data="hacked"
// console.log(joosCoin);
// console.log(joosCoin.isChainValid())


 
