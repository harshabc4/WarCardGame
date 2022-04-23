let deckId = ''
let player1Val=0
let player2Val=0
let currentHand1=''
let currentHand2=''


fetch('https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        deckId = data.deck_id
        document.querySelector('#dealerDeck').src = 'https://deckofcardsapi.com/static/img/back.png'
        // const cardBacks = document.querySelectorAll('.card')
        // cardBacks.forEach(el => el.src = 'https://deckofcardsapi.com/static/img/back.png')
   
        
      })
      .catch(err => {
          console.log(`error ${err}`)
      });


document.querySelector('#battleButton').addEventListener('click', drawTwo)
document.querySelector('#deal-deck').addEventListener('click', deal)

function deal(){
  // fetch('https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
  fetch(`https://www.deckofcardsapi.com/api/deck/${deckId}`)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        console.log('running deal function')
        // console.log(data.remaining)
        deckId = data.deck_id
      //  for(let i=1; i<data.remaining; i++){
      //       if(data.remaining%2===0){deal1()
      //         console.log(i)
      //       }else{deal2()
      //       console.log(i)}
      //     }
// Returns a Promise that resolves after "ms" Milliseconds
const timer = ms => new Promise(res => setTimeout(res, ms))

async function load () { // We need to wrap the loop into an async function for this to work
  for (var i = 1; i <= data.remaining/2; i++) {
    deal1();
    await timer(300);
    deal2();
    await timer(300); // then the created Promise can be awaited
  }
//   console.log('finalhour')
// deal1()
  document.querySelector("#battleButton").classList.toggle('hidden')
}

load();


// document.querySelector("#battleButton").classList.toggle('hidden')
        
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
    }

    // data.subclasses.forEach( obj => {
    //   console.log(obj.name)
    //   // create li
    //   const li = document.createElement('li')
    //   // add text to li
    //   li.textContent = obj.name
    //   // append li to ul
    //   document.querySelector('ul').appendChild(li)

function deal1(){
  // const url = `https://www.deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`
  const player1DeckBuild = `https://www.deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`
  fetch(player1DeckBuild)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        console.log(data.remaining)
        console.log(data.cards[0].code)
          fetch(`https://www.deckofcardsapi.com/api/deck/${deckId}/pile/player1pile/add/?cards=${data.cards[0].code}`)
          // fetch(player1Draw)
          console.log('deal1pile1')
          console.log(data.remaining+'cards left')
          const cardBack = document.createElement('img')
          cardBack.src='https://deckofcardsapi.com/static/img/back.png'
          document.querySelector('#player1Header').appendChild(cardBack).setAttribute('class','player1Img card')
          // document.querySelector('#player1').src='https://deckofcardsapi.com/static/img/back.png'
        
        })
        
      .catch(err => {
          console.log(`error ${err}`)
      });


  }

  function deal2(){
    // const url = `https://www.deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`
    const player1DeckBuild = `https://www.deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`
  
    fetch(player1DeckBuild)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
          console.log(data)
          console.log(data.remaining)
          console.log(data.cards[0].code)
            fetch(`https://www.deckofcardsapi.com/api/deck/${deckId}/pile/player2pile/add/?cards=${data.cards[0].code}`)
            // fetch(player1Draw)
            console.log('deal2pile2')
            console.log(data.remaining+'cards left')
            // deal1()
            const cardBack = document.createElement('img')
            cardBack.src='https://deckofcardsapi.com/static/img/back.png'
            document.querySelector('#player2Header').appendChild(cardBack).setAttribute('class','player2Img card')
            // document.querySelector('#player1').src='https://deckofcardsapi.com/static/img/back.png'
          
          
          })
          
        .catch(err => {
            console.log(`error ${err}`)
        });
  
  
    }

    // async function drawTwo(){
    //   const [data1, data2] = await Promise.all([
    //     fetch(`https://www.deckofcardsapi.com/api/deck/${deckId}/pile/player1pile/draw/?count=1`).then(r => r.json()),
    //     fetch(`https://www.deckofcardsapi.com/api/deck/${deckId}/pile/player2pile/draw/?count=1`).then(r => r.json().then(data=>),
    //   ]);
    
    //   console.log(data1.data);
    // }

async function drawTwo(){
  const player1Draw = `https://www.deckofcardsapi.com/api/deck/${deckId}/pile/player1pile/draw/?count=1`
  const player2Draw = `https://www.deckofcardsapi.com/api/deck/${deckId}/pile/player2pile/draw/?count=1`

  const allCards = document.querySelectorAll('.card')
  allCards.forEach(el => el.classList.add('hidden'))

  await fetch(player1Draw)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        // console.log(data)
        document.querySelector('.player1Img').src = data.cards[0].image 
        currentHand1 = data.cards[0].image
        // document.querySelector('#player2').src = data.cards[1].image
        console.log(data.cards[0].value)
        player1Val = convertToNum(data.cards[0].value)
        // let player2Val = convertToNum(data.cards[1].value)
        // if(player1Val > player2Val){
        //   document.querySelector('h3').innerText = 'Player 1 Wins'
        // }else if(player1Val < player2Val){
        //   document.querySelector('h3').innerText = 'Player 2 Wins'
        // }else{
        //   document.querySelector('h3').innerText = 'Time for War!'
        //   // war here
        // }
        const currentImg1 = document.createElement('img')
        currentImg1.src=data.cards[0].image 
        document.querySelector('#player1Header').appendChild(currentImg1).setAttribute('class','player1Img')

        
      })
      .catch(err => {
          console.log(`error ${err}`)
      });

      await fetch(player2Draw)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        // console.log(data)
        document.querySelector('.player2Img').src = data.cards[0].image
        currentHand2 = data.cards[0].image
        // document.querySelector('#player2').src = data.cards[1].image

        // console.log(data.cards[0].value)
        // player2Val = convertToNum(data.cards[0].value)

        console.log(data.cards[0].value)
        player2Val = data.cards[0].value
        console.log(player2Val)
        player2Val=convertToNum(player2Val)
        console.log(player2Val)

        // let player2Val = convertToNum(data.cards[1].value)
        const currentImg2 = document.createElement('img')
        currentImg2.src=data.cards[0].image
        document.querySelector('#player2Header').appendChild(currentImg2).setAttribute('class','player2Img')

        console.log('asdf')
        console.log(player1Val)
        console.log('asdfagain')
        console.log(player2Val)
        if(player1Val > player2Val){
          document.querySelector('h3').innerText = 'Player 1 Wins'
        }else if(player1Val < player2Val){
          document.querySelector('h3').innerText = 'Player 2 Wins'
        }else{
          document.querySelector('h3').innerText = 'Time for War!'

// Returns a Promise that resolves after "ms" Milliseconds
const timer = ms => new Promise(res => setTimeout(res, ms))

async function load () { // We need to wrap the loop into an async function for this to work
  for (var i = 0; i <= 3; i++) {
    war();
    await timer(300); // then the created Promise can be awaited
  }
//   console.log('finalhour')
// deal1()
  document.querySelector("#battleButton").classList.toggle('hidden')
}

load();
          
          //    war();
          //   war();
          //  war();
           
          // war here
        }
  

        
      })

      
      .catch(err => {
          console.log(`error ${err}`)
      });
    }
  // console.log('asdf')
  // console.log(player1Val)
  // console.log('asdfagain')
  // console.log(player2Val)
  // if(player1Val > player2Val){
  //   document.querySelector('h3').innerText = 'Player 1 Wins'
  // }else if(player1Val < player2Val){
  //   document.querySelector('h3').innerText = 'Player 2 Wins'
  // }else{
  //   document.querySelector('h3').innerText = 'Time for War!'
  //   // war here
  // }
// }

function convertToNum(val){
  if(val === 'ACE'){
    return 14
  }else if(val === 'KING'){
    return 13
  }else if(val === 'QUEEN'){
    return 12
  }else if(val === 'JACK'){
    return 11
  }else{
    return Number(val)
  }
}

async function war(){
  const player1Draw = `https://www.deckofcardsapi.com/api/deck/${deckId}/pile/player1pile/draw/?count=1`
  const player2Draw = `https://www.deckofcardsapi.com/api/deck/${deckId}/pile/player2pile/draw/?count=1`

  await fetch(player1Draw)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        document.querySelector('.player1Img').src = data.cards[0].image 
        currentHand1 = data.cards[0].image
        player1Val = convertToNum(data.cards[0].value)
        const currentImg1 = document.createElement('img')
        currentImg1.src=data.cards[0].image 
        document.querySelector('#player1Header').appendChild(currentImg1).setAttribute('class','player1Img')

        
      })
      .catch(err => {
          console.log(`error ${err}`)
      });

      await fetch(player2Draw)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        // console.log(data)
        document.querySelector('.player2Img').src = data.cards[0].image
        currentHand2 = data.cards[0].image
        player2Val = data.cards[0].value
        player2Val=convertToNum(player2Val)

        // let player2Val = convertToNum(data.cards[1].value)
        const currentImg2 = document.createElement('img')
        currentImg2.src=data.cards[0].image
        document.querySelector('#player2Header').appendChild(currentImg2).setAttribute('class','player2Img')

        if(player1Val > player2Val){
          document.querySelector('h3').innerText = 'Player 1 Wins'
        }else if(player1Val < player2Val){
          document.querySelector('h3').innerText = 'Player 2 Wins'
        }else{
          document.querySelector('h3').innerText = 'Time for War!'
        }

        
      })

      
      .catch(err => {
          console.log(`error ${err}`)
      });
    }