module.exports = async ({ deployments, getNamedAccounts }) => {
    const { deployer } = await getNamedAccounts()
    console.log(`BasicNft1155Third account is:${deployer}`)
    const { log, deploy } = deployments
    const basicNft1155 = await deploy("BasicNft1155Third", {
        from: deployer,
        args: [],
        log: true,
    })

    log(`BasicNft1155Third deployed at ${basicNft1155.address}`)
}

module.exports.tags = ["basicNft1155"]
