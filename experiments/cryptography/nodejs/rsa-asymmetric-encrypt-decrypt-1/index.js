/**
 * Basic public/private RSA encrypt/decrypt algorithm
 * 
 * Constraits:
 * Message size limit:
 * The message must be no longer than the length of the public modulus minus twice the hash length, minus a further 2.”
 * 
 * Script usage:
 * node index.js "hello"
 * node index.js
 * 
 * Further reading:
 * OAEP padding: https://en.wikipedia.org/wiki/Optimal_asymmetric_encryption_padding
 */

const crypto = require("crypto");

// Generate public/key par
const { publicKey, privateKey } = crypto.generateKeyPairSync("rsa", {
    modulusLength: 2048, // Modulus length
});

// Message to be encrypted
const secretData = process.argv[2] || "foobar";

// Encrypt data with public key
const encryptedData = crypto.publicEncrypt(
    {
        key: publicKey,
        padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
        oaepHash: "sha256",
    },
    Buffer.from(secretData), 
);

console.log("Encrypted data: \n" + encryptedData.toString("base64") + "\n");

// Decrypt data with public key
const decryptedData = crypto.privateDecrypt(
    {
        key: privateKey,
        padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
        oaepHash: "sha256",
    },
    encryptedData,
);

console.log("Decrypted data: \n" + decryptedData.toString())