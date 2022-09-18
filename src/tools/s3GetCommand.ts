import { getConfig } from '../config/getConfig';
import { GetObjectCommand } from '@aws-sdk/client-s3';

const config = getConfig();
const BUCKET_NAME = config.S3_BUCKET;

export const getCommand = (keyName: string) => {
    return new GetObjectCommand({
        Bucket: BUCKET_NAME,
        Key: keyName,
        ResponseContentType: 'json'
    });
}
