pragma solidity ^0.5.16;

import "/openzeppelin-solidity/contracts/token/ERC721/ERC721Full.sol";
import "/openzeppelin-solidity/contracts/token/ERC721/ERC721Burnable.sol";

contract Jam is ERC721Full, ERC721Burnable{

    uint totalTokenToBeMinted = 5;
  
    constructor() 
      ERC721Full("JAM", "JAM")
      public {}

    
    function mint(address to, uint256 tokenId) public {
      _mint(to, tokenId);
    }


    function _mint(address to) public{
      require((totalSupply()+1) <= totalTokenToBeMinted , "Cant mint more");
      mint(to, totalSupply().add(1));
    }

    
    function transferTokens(address from, address to,uint256 tokenId) public{
      transferFrom(from,to,tokenId);
    }

    function jamGone(uint256 tokenId) public{
      burn(tokenId);
    }

    function setData(uint256 index, string memory text) public {
      _setTokenURI(index,text);
    }

}