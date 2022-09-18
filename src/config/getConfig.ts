import * as dotenv from 'dotenv';
import { Environment } from './Environment';

dotenv.config();

console.log('Environment: ');
console.log(process.env);

export const getConfig = (): Environment => {
    return {
        TELEGRAM_BOT_ID: process.env.TELEGRAM_BOT_ID,
        TELEGRAM_CHAT_ID: process.env.TELEGRAM_CHAT_ID,
        S3_ENDPOINT: process.env.S3_ENDPOINT,
        S3_REGION: process.env.S3_REGION,
        S3_BUCKET: process.env.S3_BUCKET,
        SECRET_KEY: process.env.SECRET_KEY,
        SECRET_KEY_ID: process.env.SECRET_KEY_ID,
        PRODUCTION: process.env.NODE_ENV === 'production',
    }
}
