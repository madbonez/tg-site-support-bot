import { PutObjectCommand } from '@aws-sdk/client-s3';
import { getConfig } from '../config/getConfig';

const config = getConfig();
const BUCKET_NAME = config.S3_BUCKET;

export const putCommand = (keyName: string, body: object) => {
    return new PutObjectCommand({
        Bucket: BUCKET_NAME,
        Key: keyName,
        Body: JSON.stringify(body),
    });
}
