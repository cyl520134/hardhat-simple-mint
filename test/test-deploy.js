const { ethers, getNamedAccounts } = require("hardhat")
const { expect, assert } = require("chai")
describe("BasicNft721-1155", function () {
    let basicNft721, deployer, basicNft1155Third
    beforeEach(async function () {
        const account = await getNamedAccounts()
        deployer = account.deployer
        // console.log(`address is:${deployer}`)
        const basicNft1155Factory = await ethers.getContractFactory("BasicNft1155Third")
        const basicNft721Factory = await ethers.getContractFactory("BasicNft721")

        basicNft721 = await basicNft721Factory.deploy()
        basicNft1155Third = await basicNft1155Factory.deploy()
    })

    it("was deploy", async function () {
        assert(basicNft721.address)
        assert(basicNft1155Third.address)
    })

    it("mintNFT", async function () {
        let gasCost721 = 0
        const transactionResponse7211 = await basicNft721.minNft(
            deployer,
            "https://api.frank.hk/api/nft/demo/1155/marvel/1.json"
        )

        const transactionReceipt7211 = await transactionResponse7211.wait()
        console.log(`721gasCost-1=>${transactionReceipt7211.gasUsed}`)

        for (let index = 0; index < 10; index++) {
            const transactionResponse = await basicNft721.minNft(
                deployer,
                "https://api.frank.hk/api/nft/demo/1155/marvel/index.json"
            )

            const transactionReceipt = await transactionResponse.wait()
            gasCost721 = gasCost721 + parseInt(transactionReceipt.gasUsed)
        }

        // const { gasUsed, effectiveGasPrice } = transactionReceipt.gasUsed
        // const gasCost = gasUsed.mul(effectiveGasPrice)
        console.log(`721gasCost-10=>${gasCost721}`)

        const transaction1155Response = await basicNft1155Third.mintNft(deployer, 1, 1)
        const transaction1155Receipt = await transaction1155Response.wait()
        console.log(`1155gasCost-10=>${transaction1155Receipt.gasUsed.toString()}`)

        const transaction11555Response = await basicNft1155Third.mintNft(deployer, 5, 1)
        const transaction11555Receipt = await transaction11555Response.wait()
        console.log(`1155gasCost5-10=>${transaction11555Receipt.gasUsed.toString()}`)

        // const transaction1155Response1 = await basicNft1155Third.mintNft(deployer, 1, 1)
        // const transaction1155Receipt1 = await transaction1155Response1.wait()
        // console.log(`1155gasCost-1=>${transaction1155Receipt1.gasUsed.toString()}`)

        assert(true)
    })
})
