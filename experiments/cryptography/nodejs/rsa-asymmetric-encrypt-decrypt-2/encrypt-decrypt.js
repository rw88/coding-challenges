const crypto = require('crypto');
const loadFile = require('./load-file');

const encrypt = async (unencryptedData, publicKeyPath) => {
    const publicKey = await loadFile(publicKeyPath);
    const buffer = Buffer.from(unencryptedData, 'utf8')
    const encrypted = crypto.publicEncrypt(publicKey, buffer)
    return encrypted.toString('base64')
}

const decrypt = async (encryptedData, privateKeyPath) => {
    const privateKey = await loadFile(privateKeyPath);
    const buffer = Buffer.from(encryptedData, 'base64');
    const decrypted = crypto.privateDecrypt(
      {
        key: privateKey.toString(),
        passphrase: '',
      },
      buffer,
    );
    return decrypted.toString('utf8');
}

async function main() {
    const encrypted = await encrypt('foobar', `public.pem`)
    console.log('Encrypted data: ', encrypted)

    const decrypted = await decrypt(encrypted, `private.pem`)
    console.log('Decrypted data: ', decrypted)
}

main()