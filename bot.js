const {Telegraf} = require('telegraf')
const {message} = require('telegraf/filters')
const fs = require('fs')
require('dotenv').config()

const BOT_TOKEN = process.env.BOT_TOKEN

const ADMIN_ID = Number(process.env.ADMIN_ID)

const wishlist = JSON.parse(fs.readFileSync('wishlist.json', 'utf8'))

const bot = new Telegraf(process.env.BOT_TOKEN)
bot.start((ctx) => ctx.reply('Этот список желаний содержит:'))
bot.command('wishlist', (ctx) => {
    const gifts = wishlist.map((gift, index) => {
        const bought = gift.boughtBy ? `(куплено${gift.boughtBy})` : `(не куплено)`
        const row = `${index + 1}. ${gift.title} ${bought}`
        return row
    })
    ctx.reply(`Список подарков:\n${gifts.join('\n')}`)
})
bot.command('add', (ctx) => {
    ctx.reply('Добавить желаемое')
})
bot.command('delete', (ctx) => {
    ctx.reply('Удалить')
})
bot.command('buy', (ctx) => {
    ctx.reply('Купить')
})
bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))