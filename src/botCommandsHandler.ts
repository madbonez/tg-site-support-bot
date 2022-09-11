import { Telegraf } from 'telegraf';
import { InlineKeyboardMarkup } from 'telegraf/typings/core/types/typegram';
import { InlineKeyboardButton } from 'typegram/markup';

const bot = new Telegraf('5631577407:AAH2HV9aNRkR1fui0A-hwi6bwzijaKZhfe8');

bot.use(async (ctx, next) => {
    // console.time(`Processing update ${ctx.update.update_id}`);
    console.log(ctx.updateType)
    console.log(ctx.update['callback_query'])

    const updateQuery = ctx.update['callback_query'];
    if (updateQuery) {
        // ctx.editMessageText(ctx.message)
        const serviceMessage = updateQuery.message['text'];
        const inWorkStatusMessage = serviceMessage.slice(0, serviceMessage.length - 2) + `[${updateQuery.from.username}] 🔴`;
        await ctx.editMessageText(inWorkStatusMessage)
    }

    await next() // runs next middleware
    // runs after next middleware finishes
    // console.timeEnd(`Processing update ${ctx.update.update_id}`);
})

bot.hears('hi', ctx => ctx.reply('Hey there11!!!!!'));
bot.on('message', async (ctx) => {
    const message = ctx.message;
    console.log(message)
    const replyMarkup: InlineKeyboardMarkup = {
        inline_keyboard: [
            [
                {
                    text: 'tap me to get in work 😱',
                    callback_data: 'EVENT_TO_WORK'
                } as InlineKeyboardButton.CallbackButton,
                {
                    text: 'tap me to get in work 😱',
                    callback_data: 'EVENT_TO_WORK'
                } as InlineKeyboardButton.CallbackButton,
                {
                    text: 'tap me to get in work 😱',
                    callback_data: 'EVENT_TO_WORK'
                } as InlineKeyboardButton.CallbackButton
            ],
            [
                {
                    text: 'tap me to get in work 😱',
                    callback_data: 'EVENT_TO_WORK'
                } as InlineKeyboardButton.CallbackButton,
                {
                    text: 'tap me to get in work 😱',
                    callback_data: 'EVENT_TO_WORK'
                } as InlineKeyboardButton.CallbackButton,
                {
                    text: 'tap me to get in work 😱',
                    callback_data: 'EVENT_TO_WORK'
                } as InlineKeyboardButton.CallbackButton
            ]
        ]
    }
    // ctx.telegram.editMessageReplyMarkup('-1001719567342', message['forward_from_message_id'], null, replyMarkup)

    // ctx.telegram.editMessageText('-1001719567342', message['forward_from_message_id'], null, 'EDITED').then(res => {
    //     console.log('asdasd?')
    //     console.log(res)
    // })
    //     .catch(err => {
    //         // console.log(err)
    //     })
})


bot.launch({
    // webhook: {
    //     domain: 'https://functions.yandexcloud.net',
    //     hookPath: '/d4e3vchlacs7egrd4k4l',
    //     port: 443
    // }
})

module.exports.handler = async function (event, context) {
    if (event['type'] === 'TEXT_FROM_SITE') {
        // bot.context.sendMessage()
    } else {
        const tmp = JSON.parse(event.body); // get data passed to us
        bot.handleUpdate(tmp); // make Telegraf process that data
    }
    return {
        statusCode: 200,
        body: 'Hello World!'
    }
};
