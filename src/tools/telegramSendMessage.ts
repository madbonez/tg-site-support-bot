import { Telegram } from 'telegraf';
import { InlineKeyboardButton } from 'typegram/markup';
import { getConfig } from '../config/getConfig';

const config = getConfig();

export async function telegramSendMessage(text: string): Promise<number> {
    const telega = new Telegram(config.TELEGRAM_BOT_ID)
    const response = await telega.sendMessage(config.TELEGRAM_CHAT_ID, text, {
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

    return response.message_id;
}

