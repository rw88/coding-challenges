/**
 * 
 */

const crypto = require("crypto");

// Generate public/key par
const { publicKey, privateKey } = crypto.generateKeyPairSync("rsa", {
    modulusLength: 2048,
});

// The secret data
const secretData = "foobar";

// Encrypt data with public key
const encryptedData = crypto.publicEncrypt(
    {
        key: publicKey,
        padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
        oaepHash: "sha256",
    },
    Buffer.from(secretData), 
);

console.log("Encrypted data: " + encryptedData.toString("base64"));


const decryptedData = crypto.privateDecrypt(
    {
        key: privateKey,
        padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
        oaepHash: "sha256",
    },
    encryptedData,
);

console.log("Decrypted data: " + decryptedData.toString());