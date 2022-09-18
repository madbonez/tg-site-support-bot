import { getConfig } from './config/getConfig';
import { telegramSendMessage } from './tools/telegramSendMessage';
import { putCommand } from './tools/s3PutCommand';
import { S3Client } from '@aws-sdk/client-s3';

const config = getConfig();

const client = new S3Client({
    region: config.S3_REGION,
    endpoint: config.S3_ENDPOINT,
    credentials: {
        accessKeyId: config.SECRET_KEY_ID,
        secretAccessKey: config.SECRET_KEY,
    },
});

export async function initSession(text: string): Promise<number> {
    const messageId = await telegramSendMessage(text);
    const keyName = `${messageId}.json`;

    const initState = {messages: [text]};
    await client.send(putCommand(keyName, initState));

    return Promise.resolve(messageId);
}

module.exports.handler = async function (event, context) {
    try {
        const messageId = await initSession(event.body.text);

        return {
            statusCode: 200,
            body: {
                messageId,
            }
        }
    } catch (e) {
        console.log(e);
        return {
            statusCode: 500,
            body: {
                error: e,
            }
        }
    }
};
