const { google } = require('googleapis');
const credentials = require('./credentials/credentials9.json');
const axios = require('axios');

const jwToken = new google.auth.JWT(
    credentials.client_email,
    null,
    credentials.private_key,
    ['https://www.googleapis.com/auth/drive'],
    null
);

jwToken.authorize(err => {
    if (err)
        console.log(err);
    else
        console.log('Auth success');
});

const drive = google.drive({
    version: 'v3',
    auth: jwToken
});

async function download(url) {
    const response = await axios({
        url,
        method: 'GET',
        responseType: 'stream'
    });

    return response.data;
}

module.exports = {
    async list() {
        let parents = '1hoM_J9qt2YnOkV8iyy-N2B7ag4GWWiE8';

        return new Promise(async (resolve, reject) => {
            await drive.files.list({
                auth: jwToken,
                q: "'" + parents + "' in parents and trashed=false",
                fields: 'files(id, name)',
                pageSize: 1000
            }, (err, {data}) => {
                if (err)
                    reject(err);
                else
                    resolve(data.files);
            });
        });
    },

    async upload(url, filename) {
        const buffer = await download(url);

        let folder = '1hoM_J9qt2YnOkV8iyy-N2B7ag4GWWiE8';

        let metadata = {
            'name': filename,
            parents: [folder]
        };

        let media = {
            mimeType: 'video/mp4',
            body: buffer
        };

        return new Promise((resolve, reject) => {
            console.log('Uploading ' + filename + ' ...');

            drive.files.create({
                auth: jwToken,
                resource: metadata,
                media: media,
                fields: 'id'
            }, (err, res) => {
                if (err) {
                    console.log(err);
                    reject(err);
                }
                else {
                    console.log('Uploaded: ' + filename);
                    resolve(res);
                }
            });
        });
    }
};
