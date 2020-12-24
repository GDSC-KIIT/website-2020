const fs = require('fs');
const crypto = require('crypto');
const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

var cryptoSecret = "";

function getPassword() {
    console.log("\x1b[31m", 'Now, trying to decrypt backend.env for env variables', "\x1b[0m \n");

    if (process.env.TESTING === "TRUE") {
        console.log('skipping env variables in production env');
    } else if (process.env.NODE_ENV !== 'production') {
        rl.question('enter password = ', pass => {
            cryptoSecret = pass;
            console.log("\n \x1b[34m", "\x1b[45m", 'trying now to DECRYPT .env with given passphrase', "\x1b[0m \n");
            rl.close();
            decrypter();
        });
    }
}

function decrypter() {

    const fileContent = fs.readFileSync('backend.env', { encoding: 'utf8' });

    // decrypt this using cryptojs

    const secret = cryptoSecret;
    const algo = 'aes-192-cbc';
    const key = crypto.scryptSync(secret, 'salt', 24);
    const iv = Buffer.alloc(16, 0);


    const decipher = crypto.createDecipheriv(algo, key, iv);
    let decryptedText = decipher.update(fileContent, 'base64', 'utf8');
    decryptedText += decipher.final('utf8')

    // make the file

    fs.writeFileSync('.env', decryptedText, { encoding: 'utf8' });

    console.log("\x1b[43m", '.env file created', "\x1b[0m \n");
}

getPassword();