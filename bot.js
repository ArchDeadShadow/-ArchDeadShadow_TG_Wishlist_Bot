const {Telegraf} = require('telegraf')
const {message} = require('telegraf/filters')
const fs = require('fs')
require('dotenv').config()

const BOT_TOKEN = process.env.BOT_TOKEN

const ADMIN_ID = Number(process.env.ADMIN_ID)

const wishlist = JSON.parse(fs.readFileSync('wishlist.json', 'utf8'))

const bot = new Telegraf(process.env.BOT_TOKEN)
bot.start((ctx) => ctx.reply('Вас приветствует ваш список подарков'))
bot.command('wishlist', (ctx) => {
    const gifts = wishlist.map((gift, index) => {
        const bought = gift.boughtBy ? `(куплено${gift.boughtBy})` : `(не куплено)`
        const row = `${index + 1}. ${gift.title} ${bought}`
        return row
    })
    ctx.reply(`Список подарков:\n${gifts.join('\n')}`)
})
bot.command('add', (ctx) => {
    const giftTitle = ctx.message.text.split(' ').slice(1).join(' ')
    const gift = {title: giftTitle, boughtBy: null}
    wishlist.push(gift)
    fs.writeFileSync('wishlist.json', JSON.stringify(wishlist, null, 2), 'utf8')
    ctx.reply(`Подарок ${giftTitle} был успешно добавлен`)
})
bot.command('delete', (ctx) => {
    const giftIndex = Number(ctx.message.text.split(' ')[1])
    const [deletedGift] = wishlist.splice(giftIndex -1, 1)
    fs.writeFileSync('wishlist.json', JSON.stringify(wishlist, null, 2), 'utf8')
    ctx.reply(`Подарок ${deletedGift.title} успешно удален`)
})
bot.command('buy', (ctx) => {
    const giftIndex = Number(ctx.message.text.split(' ')[1])
    wishlist[giftIndex - 1].boughtBy = ctx.from.username
    fs.writeFileSync('wishlist.json', JSON.stringify(wishlist, null, 2), 'utf8')
    ctx.reply(`Подарок ${wishlist[giftIndex - 1].title} будет куплен ${ctx.from.username}`)
})
bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))