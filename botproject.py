import telebot;
from telebot import types
bot = telebot.TeleBot('7324357871:AAE3oIZ-akKAEqs5RrWqqVY9JwnBBsNbMzQ')
@bot.message_handler(content_types=['text'])
def get_text_messages(message):
     if message.text == "Приветики":
        bot.send_message(message.from_user/id, "Хей, чем могу помочь?")
     elif message.text == "/help":
         bot.send_message(message.from_user/id, "Напиши приветики")
     else:
        bot.send_message(message.from_user/id, "Я тебя не понял, напиши /help.")
bot.polling(none_stop=True, interval=0)
