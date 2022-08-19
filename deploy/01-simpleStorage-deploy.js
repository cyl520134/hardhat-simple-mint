module.exports = async ({ deployments, getNamedAccounts }) => {
    const { deployer } = await getNamedAccounts()
    console.log(`SimpleStorage account is:${deployer}`)
    const { log, deploy } = deployments
    const SimpleStorage = await deploy("SimpleStorage", {
        from: deployer,
        args: [],
        log: true,
    })

    log(`SimpleStorage deployed at ${SimpleStorage.address}`)
}
