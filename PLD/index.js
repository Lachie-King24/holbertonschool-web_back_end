const express = require('express')
const app = express()
const port = 3000

app.get('/', async (req, res) => {
  const response = await fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
  const body = await response.json()
  console.log(body)
  res.send(`Your deck ID is ${body.deck_id}`)
})


app.get('/draw/:deck_id{/:num_of_cards}', async (req, res) => {
// Fetch draw a card API and format the answer
    const deck_id = req.params.deck_id
    const num_of_cards = Number(req.params?.num_of_cards ?? 1)
    const response = await fetch(`https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=${num_of_cards}`)
    const body = await response.json()
    
    let cardNames = [], cardCodes = [];
    for (card of body.cards) {
        cardNames.push(`${card.value} ${card.suit}`);
        cardCodes.push(card.code);
    }
    res.json({cards: cardNames.join(', '), codes: cardCodes.join(',')})
})

app.get('/deal/:deck_id/:play_num', async (req, res) => {
    const deck_id = req.params.deck_id
    const play_num = req.params.play_num
    const cards = req.params.cards
    for (num in play_num) {
        const response_draw = await fetch(`http://localhost:3000/draw/${deck_id}/2`);
        const cards_to_add = await response_draw.json()['codes'];
        
        const response_pile_add = await fetch(`https://deckofcardsapi.com/api/deck/${deck_id}/pile/${play_num}/add/?cards=${cards_to_add}`)
        console.log(await response_pile_add.text())
    }
    res.end()
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})