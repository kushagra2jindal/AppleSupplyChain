const express = require('express')
var app = express();
var path = require('path');
//const bonsole = require('bonsole');
const { spawn } = require('child_process')

app.set("view engine", "ejs");
app.set("views",  '/Users/kushagra/Desktop/Practice/blockchain/SupplyChain' + "/views"); 

const Web3 = require('web3',3000)
const web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:8545"))

var CoursesContract = web3.eth.contract([
   {
     "inputs": [],
     "payable": false,
     "stateMutability": "nonpayable",
     "type": "constructor"
   },
   {
     "anonymous": false,
     "inputs": [
       {
         "indexed": true,
         "internalType": "address",
         "name": "owner",
         "type": "address"
       },
       {
         "indexed": true,
         "internalType": "address",
         "name": "approved",
         "type": "address"
       },
       {
         "indexed": true,
         "internalType": "uint256",
         "name": "tokenId",
         "type": "uint256"
       }
     ],
     "name": "Approval",
     "type": "event"
   },
   {
     "anonymous": false,
     "inputs": [
       {
         "indexed": true,
         "internalType": "address",
         "name": "owner",
         "type": "address"
       },
       {
         "indexed": true,
         "internalType": "address",
         "name": "operator",
         "type": "address"
       },
       {
         "indexed": false,
         "internalType": "bool",
         "name": "approved",
         "type": "bool"
       }
     ],
     "name": "ApprovalForAll",
     "type": "event"
   },
   {
     "anonymous": false,
     "inputs": [
       {
         "indexed": true,
         "internalType": "address",
         "name": "from",
         "type": "address"
       },
       {
         "indexed": true,
         "internalType": "address",
         "name": "to",
         "type": "address"
       },
       {
         "indexed": true,
         "internalType": "uint256",
         "name": "tokenId",
         "type": "uint256"
       }
     ],
     "name": "Transfer",
     "type": "event"
   },
   {
     "constant": false,
     "inputs": [
       {
         "internalType": "address",
         "name": "to",
         "type": "address"
       },
       {
         "internalType": "uint256",
         "name": "tokenId",
         "type": "uint256"
       }
     ],
     "name": "approve",
     "outputs": [],
     "payable": false,
     "stateMutability": "nonpayable",
     "type": "function"
   },
   {
     "constant": true,
     "inputs": [
       {
         "internalType": "address",
         "name": "owner",
         "type": "address"
       }
     ],
     "name": "balanceOf",
     "outputs": [
       {
         "internalType": "uint256",
         "name": "",
         "type": "uint256"
       }
     ],
     "payable": false,
     "stateMutability": "view",
     "type": "function"
   },
   {
     "constant": true,
     "inputs": [],
     "name": "baseURI",
     "outputs": [
       {
         "internalType": "string",
         "name": "",
         "type": "string"
       }
     ],
     "payable": false,
     "stateMutability": "view",
     "type": "function"
   },
   {
     "constant": false,
     "inputs": [
       {
         "internalType": "uint256",
         "name": "tokenId",
         "type": "uint256"
       }
     ],
     "name": "burn",
     "outputs": [],
     "payable": false,
     "stateMutability": "nonpayable",
     "type": "function"
   },
   {
     "constant": true,
     "inputs": [
       {
         "internalType": "uint256",
         "name": "tokenId",
         "type": "uint256"
       }
     ],
     "name": "getApproved",
     "outputs": [
       {
         "internalType": "address",
         "name": "",
         "type": "address"
       }
     ],
     "payable": false,
     "stateMutability": "view",
     "type": "function"
   },
   {
     "constant": true,
     "inputs": [
       {
         "internalType": "address",
         "name": "owner",
         "type": "address"
       },
       {
         "internalType": "address",
         "name": "operator",
         "type": "address"
       }
     ],
     "name": "isApprovedForAll",
     "outputs": [
       {
         "internalType": "bool",
         "name": "",
         "type": "bool"
       }
     ],
     "payable": false,
     "stateMutability": "view",
     "type": "function"
   },
   {
     "constant": true,
     "inputs": [],
     "name": "name",
     "outputs": [
       {
         "internalType": "string",
         "name": "",
         "type": "string"
       }
     ],
     "payable": false,
     "stateMutability": "view",
     "type": "function"
   },
   {
     "constant": true,
     "inputs": [
       {
         "internalType": "uint256",
         "name": "tokenId",
         "type": "uint256"
       }
     ],
     "name": "ownerOf",
     "outputs": [
       {
         "internalType": "address",
         "name": "",
         "type": "address"
       }
     ],
     "payable": false,
     "stateMutability": "view",
     "type": "function"
   },
   {
     "constant": false,
     "inputs": [
       {
         "internalType": "address",
         "name": "from",
         "type": "address"
       },
       {
         "internalType": "address",
         "name": "to",
         "type": "address"
       },
       {
         "internalType": "uint256",
         "name": "tokenId",
         "type": "uint256"
       }
     ],
     "name": "safeTransferFrom",
     "outputs": [],
     "payable": false,
     "stateMutability": "nonpayable",
     "type": "function"
   },
   {
     "constant": false,
     "inputs": [
       {
         "internalType": "address",
         "name": "from",
         "type": "address"
       },
       {
         "internalType": "address",
         "name": "to",
         "type": "address"
       },
       {
         "internalType": "uint256",
         "name": "tokenId",
         "type": "uint256"
       },
       {
         "internalType": "bytes",
         "name": "_data",
         "type": "bytes"
       }
     ],
     "name": "safeTransferFrom",
     "outputs": [],
     "payable": false,
     "stateMutability": "nonpayable",
     "type": "function"
   },
   {
     "constant": false,
     "inputs": [
       {
         "internalType": "address",
         "name": "to",
         "type": "address"
       },
       {
         "internalType": "bool",
         "name": "approved",
         "type": "bool"
       }
     ],
     "name": "setApprovalForAll",
     "outputs": [],
     "payable": false,
     "stateMutability": "nonpayable",
     "type": "function"
   },
   {
     "constant": true,
     "inputs": [
       {
         "internalType": "bytes4",
         "name": "interfaceId",
         "type": "bytes4"
       }
     ],
     "name": "supportsInterface",
     "outputs": [
       {
         "internalType": "bool",
         "name": "",
         "type": "bool"
       }
     ],
     "payable": false,
     "stateMutability": "view",
     "type": "function"
   },
   {
     "constant": true,
     "inputs": [],
     "name": "symbol",
     "outputs": [
       {
         "internalType": "string",
         "name": "",
         "type": "string"
       }
     ],
     "payable": false,
     "stateMutability": "view",
     "type": "function"
   },
   {
     "constant": true,
     "inputs": [
       {
         "internalType": "uint256",
         "name": "index",
         "type": "uint256"
       }
     ],
     "name": "tokenByIndex",
     "outputs": [
       {
         "internalType": "uint256",
         "name": "",
         "type": "uint256"
       }
     ],
     "payable": false,
     "stateMutability": "view",
     "type": "function"
   },
   {
     "constant": true,
     "inputs": [
       {
         "internalType": "address",
         "name": "owner",
         "type": "address"
       },
       {
         "internalType": "uint256",
         "name": "index",
         "type": "uint256"
       }
     ],
     "name": "tokenOfOwnerByIndex",
     "outputs": [
       {
         "internalType": "uint256",
         "name": "",
         "type": "uint256"
       }
     ],
     "payable": false,
     "stateMutability": "view",
     "type": "function"
   },
   {
     "constant": true,
     "inputs": [
       {
         "internalType": "uint256",
         "name": "tokenId",
         "type": "uint256"
       }
     ],
     "name": "tokenURI",
     "outputs": [
       {
         "internalType": "string",
         "name": "",
         "type": "string"
       }
     ],
     "payable": false,
     "stateMutability": "view",
     "type": "function"
   },
   {
     "constant": true,
     "inputs": [],
     "name": "totalSupply",
     "outputs": [
       {
         "internalType": "uint256",
         "name": "",
         "type": "uint256"
       }
     ],
     "payable": false,
     "stateMutability": "view",
     "type": "function"
   },
   {
     "constant": false,
     "inputs": [
       {
         "internalType": "address",
         "name": "from",
         "type": "address"
       },
       {
         "internalType": "address",
         "name": "to",
         "type": "address"
       },
       {
         "internalType": "uint256",
         "name": "tokenId",
         "type": "uint256"
       }
     ],
     "name": "transferFrom",
     "outputs": [],
     "payable": false,
     "stateMutability": "nonpayable",
     "type": "function"
   },
   {
     "constant": false,
     "inputs": [
       {
         "internalType": "address",
         "name": "to",
         "type": "address"
       },
       {
         "internalType": "uint256",
         "name": "tokenId",
         "type": "uint256"
       }
     ],
     "name": "mint",
     "outputs": [],
     "payable": false,
     "stateMutability": "nonpayable",
     "type": "function"
   },
   {
     "constant": false,
     "inputs": [
       {
         "internalType": "address",
         "name": "to",
         "type": "address"
       }
     ],
     "name": "_mint",
     "outputs": [],
     "payable": false,
     "stateMutability": "nonpayable",
     "type": "function"
   },
   {
     "constant": false,
     "inputs": [
       {
         "internalType": "address",
         "name": "from",
         "type": "address"
       },
       {
         "internalType": "address",
         "name": "to",
         "type": "address"
       },
       {
         "internalType": "uint256",
         "name": "tokenId",
         "type": "uint256"
       }
     ],
     "name": "transferTokens",
     "outputs": [],
     "payable": false,
     "stateMutability": "nonpayable",
     "type": "function"
   },
   {
     "constant": false,
     "inputs": [
       {
         "internalType": "uint256",
         "name": "tokenId",
         "type": "uint256"
       }
     ],
     "name": "appleGone",
     "outputs": [],
     "payable": false,
     "stateMutability": "nonpayable",
     "type": "function"
   },
   {
     "constant": false,
     "inputs": [
       {
         "internalType": "uint256",
         "name": "index",
         "type": "uint256"
       },
       {
         "internalType": "string",
         "name": "text",
         "type": "string"
       }
     ],
     "name": "setData",
     "outputs": [],
     "payable": false,
     "stateMutability": "nonpayable",
     "type": "function"
   }
]);
apples = CoursesContract.at("0x5DF648fc253Bbdc510C0849588E7866eE57cdaA3");

var CoursesContract1 = web3.eth.contract([
  {
    "inputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "approved",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "Approval",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "operator",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "bool",
        "name": "approved",
        "type": "bool"
      }
    ],
    "name": "ApprovalForAll",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "Transfer",
    "type": "event"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "approve",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "internalType": "address",
        "name": "owner",
        "type": "address"
      }
    ],
    "name": "balanceOf",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "baseURI",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "burn",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "getApproved",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "operator",
        "type": "address"
      }
    ],
    "name": "isApprovedForAll",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "name",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "ownerOf",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "safeTransferFrom",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "_data",
        "type": "bytes"
      }
    ],
    "name": "safeTransferFrom",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "bool",
        "name": "approved",
        "type": "bool"
      }
    ],
    "name": "setApprovalForAll",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "internalType": "bytes4",
        "name": "interfaceId",
        "type": "bytes4"
      }
    ],
    "name": "supportsInterface",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "symbol",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "internalType": "uint256",
        "name": "index",
        "type": "uint256"
      }
    ],
    "name": "tokenByIndex",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "index",
        "type": "uint256"
      }
    ],
    "name": "tokenOfOwnerByIndex",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "tokenURI",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "totalSupply",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "transferFrom",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "mint",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      }
    ],
    "name": "_mint",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "transferTokens",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "jamGone",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "uint256",
        "name": "index",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "text",
        "type": "string"
      }
    ],
    "name": "setData",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }
]);
jams = CoursesContract1.at("0xec35aea5e7159086E70eA7f232726F8747060979");


app.get('/', function(req, res){
  res.render('mint',{data : ""})
});

app.get('/jam', function(req, res){
  res.render('jam',{data : ""})
});

app.get('/mint',function(req,res){  
  minter = req.query.minterAddress
  color = req.query.appleColor
  date = req.query.datePlug
  index = parseInt (apples.totalSupply()) + 1
  a = apples._mint(minter,{from:minter,gas:3000000})
  const process = spawn('python3', ['./ipfs/Apple/ipfsHandler.py',index, color , date]);

  process.stdout.on( 'data', function(data){
    res.render('mint',{ data : data.toString() })
  });

});

app.get('/mintJam',function(req,res){  

  minter = req.query.minterAddress
  date = req.query.datePlug
  apple1 = parseInt(req.query.apple1)
  apple2 = parseInt(req.query.apple2)
  index = parseInt (jams.totalSupply()) + 1
  jams._mint(minter,{from:minter,gas:3000000})

  const process = spawn('python3', ['./ipfs/Jam/ipfsHandlerJam.py',index, date, apple1, apple2]);

  process.stdout.on( 'data', function(data){
    res.render('jam',{data : data.toString()})
  });

});


app.get('/transferFrom',function(req,res){  
      sender = req.query.senderAddress
      reciever = req.query.recieverAddress
      amount = req.query.amount
      index = req.query.index
      web3.eth.defaultAccount = sender;
      web3.eth.sendTransaction({to:sender, from:reciever, value:web3.toWei(amount, "ether")}, function(err, transactionHash){
        if(!err){
          apples.transferFrom(sender, reciever, index, {from:sender,gas:3000000})
          transactionData = apples.tokenURI(index)
          transactionData = transactionData + "Transaction Hash :- " + transactionHash + "</br>"
          transactionData = transactionData + "From:- " + sender + "</br>"
          transactionData = transactionData + "To:- " + reciever + "</br></br>"
          apples.setData(index,transactionData, {gas:3000000})
          res.render('mint',{ data : transactionHash})
        }
        else{
          res.render('mint',{ data : "Transaction not successfull"})
        }
        
      });

});

app.get('/transferFromJam',function(req,res){  
  sender = req.query.senderAddress
  reciever = req.query.recieverAddress
  amount = req.query.amount
  index = req.query.index
  web3.eth.defaultAccount = sender;
  web3.eth.sendTransaction({to:sender, from:reciever, value:web3.toWei(amount, "ether")}, function(err, transactionHash){
    if(!err){
      jams.transferFrom(sender, reciever, index, {from:sender,gas:3000000})
      transactionData = jams.tokenURI(index)
      transactionData = transactionData + "Transaction Hash :- " + transactionHash + "</br>"
      transactionData = transactionData + "From:- " + sender + "</br>"
      transactionData = transactionData + "To:- " + reciever + "</br></br>"
      jams.setData(index,transactionData, {gas:3000000})
      res.render('jam',{ data : transactionHash})
    }
    else{
      res.render('jam',{ data : "Transaction not successfull"})
    }  
  });

});


app.get('/owner',function(req,res){  
  index = req.query.index
  res.render('mint',{ data : apples.ownerOf(index)})
});

app.get('/ownerJam',function(req,res){  
  index = req.query.index
  res.render('jam',{ data : jams.ownerOf(index)})
});


app.get('/destroy',function(req,res){  
  index = req.query.index
  add = req.query.address
  res.render('mint', { data : apples.appleGone(index,{from:add,gas:3000000})})
});

app.get('/destroyJam',function(req,res){  
  index = req.query.index
  add = req.query.address
  res.render('jam', { data : jams.jamGone(index,{from:add,gas:3000000})})
});


app.get('/balance',function(req,res){ 
  address = req.query.address
  res.render('mint', { data : web3.eth.getBalance(address).c[0]/10000})
});

app.get('/balanceJam',function(req,res){ 
  address = req.query.address
  res.render('jam', { data : web3.eth.getBalance(address).c[0]/10000})
});


app.get('/trackApple',function(req,res){  
  index = req.query.index
  const process = spawn('python3', ['./ipfs/Apple/ipfsHandler1.py',index]);

  process.stdout.on( 'data', function(data){
      
    tractData = data.toString() + apples.tokenURI(index)
    res.render('mint',{ data : tractData })

  });

});

app.get('/trackJam',function(req,res){  
  
  index = req.query.index
  
  const process = spawn('python3', ['./ipfs/Jam/ipfsHandlerJam1.py',index]);

  process.stdout.on( 'data', function(data){
    const json = data.toString().trim()
    const obj = JSON.parse(json)

    apple1 = parseInt(obj.appleindex1)
    apple2 = parseInt(obj.appleindex2)
    console.log(apple1 + " " + apple2)

    const process = spawn('python3', ['./ipfs/Apple/ipfsHandler1.py',apple1]);
    process.stdout.on( 'data', function(data){
      
        details = "apple1:-" + data.toString() + apples.tokenURI(apple1)
        
        const process2 = spawn('python3', ['./ipfs/Apple/ipfsHandler1.py',apple2]);
        process2.stdout.on( 'data', function(data){
          
            details = details + "apple2:-" + data.toString() + apples.tokenURI(apple2)

            details = details + "JAM:- " + json + jams.tokenURI(index)
            res.render('jam',{ data : details })

        });

    });
    
  });


});


app.listen(3000);