const { storeImages, storeTokeUriMetadata } = require("../utils/uploadToPinata")
const imagesLocation = "./images/randomNft/"

const { verify } = require("../utils/verify")

const metadataTemplate = {
    name: "",
    description: "",
    image: "",
    attributes: [
        {
            trait_type: "Cuteness",
            value: 100,
        },
    ],
}

// [
//     'ipfs://QmSbccn9wZssYdvYicxqQ48TxLpBqWY55RBKWtaxTHisqo',
//     'ipfs://QmS3nZpKdSMe41Hf9QS3H52t9DrnAYcnMqBv73bEwu47t3',
//     'ipfs://QmVLVcQfQz78c4CPoZXhhaPXBZmy7swyf1SGsLqktNVqCs'
//   ]
async function handleTokenUris() {
    // Check out https://github.com/PatrickAlphaC/nft-mix for a pythonic version of uploading
    // to the raw IPFS-daemon from https://docs.ipfs.io/how-to/command-line-quick-start/
    // You could also look at pinata https://www.pinata.cloud/
    tokenUris = []
    const { responses: imageUploadResponses, files } = await storeImages(imagesLocation)

    for (imageUploadResponseIndex in imageUploadResponses) {
        let tokenUriMetadata = { ...metadataTemplate }
        tokenUriMetadata.name = files[imageUploadResponseIndex].replace(".png", "")
        tokenUriMetadata.description = `An adorable ${tokenUriMetadata.name} pup!`
        tokenUriMetadata.image = `https://ipfs.io/ipfs/${imageUploadResponses[imageUploadResponseIndex].IpfsHash}`
        console.log(`Uploading ${tokenUriMetadata.name}...`)
        const metadataUploadResponse = await storeTokeUriMetadata(tokenUriMetadata)
        tokenUris.push(`ipfs://${metadataUploadResponse.IpfsHash}`)
    }
    console.log("Token URIs uploaded! They are:")
    console.log(tokenUris)
    return tokenUris
}

function main() {
    verify("0xf1049fa89051a6d7f6a0bdf1dfb1223e28e9f087", [])
}

main()

// handleTokenUris()
