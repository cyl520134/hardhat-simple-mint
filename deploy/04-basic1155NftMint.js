const { ethers, getNamedAccounts } = require("hardhat")
const ADDRESS_URL = process.env.ADDRESS
const PUBLIC_KEY = 0x426ba2c2d5d57e0bfb4fb75362617ea1b8b6202d

module.exports = async ({ getNamedAccounts, deployments }) => {
    const { deployer } = await getNamedAccounts()
    console.log(`deploy address is:${deployer}`)
    //
    const basicNft115503 = await ethers.getContract("BasicNft1155Third", deployer)
    // const basicNft1155 = await ethers.getContract("BasicNft1155", deployer)

    const transactionResponse = await basicNft115503.mintNft(deployer, 1, 1)
    const transactionReceipt = await transactionResponse.wait()
    const { gasUsed, effectiveGasPrice } = transactionReceipt
    const gasCost = gasUsed.mul(effectiveGasPrice)
    console.log(`gasCost=>${gasCost.toString()}`)

    const amount03 = await basicNft115503.balanceOf(deployer, 1)
    // const amount01 = await basicNft1155.balanceOf(deployer, 1)

    const url03 = await basicNft115503.uri(1)
    // const url01 = await basicNft1155.uri(1)

    console.log(`Basic NFT115503 index 0 tokenID-1,ammount is:${amount03},url is ${url03}`)
    // console.log(`Basic NFT115501 index 0 tokenID-1,ammount is:${amount01},url is ${url01}`)

    //如何ERC-1155允许替代品和非替代品共存，同时允许【可替代token】可以被"转换"为【不可替代Token】
}
module.exports.tags = ["mint1155"]
