// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.9;
import "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155URIStorage.sol";

contract BasicNft1155Third is ERC1155 {
    uint256 public constant CAPTAIN_AMERICA = 0;
    uint256 public constant THOR = 1;
    uint256 public constant IRON_MAN = 2;
    uint256 public constant SPIDER_MAN = 3;

    constructor() ERC1155("https://api.frank.hk/api/nft/demo/1155/marvel/{id}.json") {
        // _mint(msg.sender, CAPTAIN_AMERICA, 10**18, "");
        // _mint(msg.sender, THOR, 1, "");
        // _mint(msg.sender, IRON_MAN, 5, "");
        // _mint(msg.sender, SPIDER_MAN, 10, "");
    }

    function mintNft(
        address deployer,
        uint256 id,
        uint256 qty
    ) public {
        _mint(deployer, id, qty, "");
    }

    function mintNftBatch(
        address deployer,
        uint256[] memory idArray,
        uint256[] memory qytArray
    ) public {
        _mintBatch(deployer, idArray, qytArray, "");
    }
}
