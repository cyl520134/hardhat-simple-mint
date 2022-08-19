const { ethers, getNamedAccounts } = require("hardhat")

const ADDRESS_URL = process.env.ADDRESS
const PUBLIC_KEY = process.env.PUBLIC_KEY

// const url = "https://gateway.pinata.cloud/ipfs/QmSSCaW18zJcfUjEDQzxVk1z8uiiY9juY61BL1Ukbj8abM"

const tokenUrls = [
    "ipfs://QmaVkBn2tKmjbhphU7eyztbvSQU5EXDdqRyXZtRhSGgJGo",
    "ipfs://QmYQC5aGZu2PTH8XzbJrbDnvhj3gVs7ya33H9mqUNvST3d",
    "ipfs://QmZYmH5iDbD6v3U2ixoVAjioSzvWJszDzYdbeCLquGSpVm",
]

// 0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512

// 'https://ipfs.io//ipfs:/QmSDJbvWaG32zij7TEeX45hJmTDmkGziJmZxsTmJJMRmqF',
//   'https://ipfs.io//ipfs:/QmNQMzShe2RwY2qhzkpDZn7mWtcCVT8gLskFdWRvx2otHk',
//   'https://ipfs.io//ipfs:/QmZPmsxrMajZG9ToACbbiJm6xk9ZHopRs4M4gAJEik7f8j'

module.exports = async ({ getNamedAccounts, deployments }) => {
    const { deployer } = await getNamedAccounts()
    console.log(`address is:${deployer}`)
    const basicNft721 = await ethers.getContract("BasicNft721", deployer)
    //单个铸造
    // const basicMintTx = await basicNft721.minNft(deployer, "ipfs://QmS3nZpKdSMe41Hf9QS3H52t9DrnAYcnMqBv73bEwu47t3")
    // await basicMintTx.wait(1)
    const balance = await basicNft721.balanceOf(deployer)
    console.log(`Basic NFT =>tokenURI: ${await basicNft721.getTokenCounter()}`)
    console.log(`Basic NFT =>balance ${balance}`)
}

module.exports.tags = ["mint721"]
