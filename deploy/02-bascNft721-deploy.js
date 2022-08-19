module.exports = async ({ deployments, getNamedAccounts }) => {
    const { deployer } = await getNamedAccounts()
    console.log(`BasicNft721 account is:${deployer}`)
    const { log, deploy } = deployments
    const basicNft721 = await deploy("BasicNft721", {
        from: deployer,
        args: [],
        log: true,
    })

    log(`BasicNft721 deployed at ${basicNft721.address}`)
}

module.exports.tags = ["basicNft721"]
