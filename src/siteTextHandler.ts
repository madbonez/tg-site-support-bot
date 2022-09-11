import * as https from 'https';
import { IncomingMessage } from 'http';

export function siteTextHandler(text: string) {
    // comment
    const postData = JSON.stringify({
        // chat_id: '-1001719567342',
        chat_id: '-1001792438679',
        text: 'comment and bye 5',
        reply_to_message_id: 171,
        reply_to_top_id: 171,
    });

    // new message
    // const postData = JSON.stringify({
    //     chat_id: '-1001719567342',
    //     // chat_id: '-1001792438679',
    //     text,
    //     // reply_to_message_id: 110,
    //     // reply_to_top_id: 110
    // });


    const options = {
        hostname: 'api.telegram.org',
        port: 443,
        path: '/bot5631577407:AAH2HV9aNRkR1fui0A-hwi6bwzijaKZhfe8/sendMessage',
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Content-Length': postData.length
        }
    };

    const req = https.request(options, (res) => {
        console.log('statusCode:', res.statusCode);
        console.log('headers:', res.headers);

        res.on('data', (d) => {
            process.stdout.write(d);
        });
    });

    req.on('error', (e) => {
        console.error(e);
    });

    req.write(postData);
    req.end();
}

siteTextHandler('Пользователь с ывдлаьывждаывх ывжадбывабы фвыджлаывждаывждабывж д 🔴🟢🔵')
