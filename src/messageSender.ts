import { Telegram } from 'telegraf';
import { InlineKeyboardButton } from 'typegram/markup';


function sendMessage(text: string) {

    const telega = new Telegram('5631577407:AAH2HV9aNRkR1fui0A-hwi6bwzijaKZhfe8')
    telega.sendMessage('-1001719567342', text, {
        reply_markup: {
            inline_keyboard: [
                [
                    {
                        text: 'Взять в работу ✋',
                        callback_data: 'EVENT_IN_WORK'
                    } as InlineKeyboardButton.CallbackButton,
                ],
            ]
        }
    })

}

sendMessage(`Новое обращение [xqdasd] ${new Date().toISOString()} 🔵`)
