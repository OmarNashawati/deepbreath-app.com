
const quotes = [
    {
        "quote":`You just have to take a <span class="quote_brand"></span>, relax and let the game come to you.`,
        "writer":"A. J. Green"
    },
    {
        "quote":`I have so much chaos in my life, it's become normal. You become used to it. You have to just relax, calm down, take a <span class="quote_brand"></span> and try to see how you can make things work rather than complain about how they're wrong.`,
        "writer":"Tom Welling"
    },
    {
        "quote":`I always like it when I eat myself out of breath. That's a good boost to my day. You know, I'm eating, and I go, 'Oooohhh.' It's better a few moments later when you get to think about it, when you're like, 'Why did I just stop to take a <span class="quote_brand"></span>? Oh yeah, my body also needs air.'`,
        "writer":"Tom Segura"
    },
    {
        "quote":`I just want people to take a step back, take a <span class="quote_brand"></span> and actually look at something with a different perspective. But most people will never do that.`,
        "writer":"Brian McKnight"
    }
]

const quoteContainer = document.getElementById('qoute-div')
// const quoteElement = document.getElementById('quote')
// const quoteWriterElement = document.getElementById('quote_writer')

const random = Math.floor( Math.random()*quotes.length )
const selectedQuote = quotes[random]


// const quoteDiv  = `
// <div id='quote'>
//     <span class="quote_comma quote_open "></span>
//     ${selectedQuote.quote}
//     <span class="quote_comma quote_close "></span>
// </div>`

const quoteDiv  = `
<div id='quote'>
    ${selectedQuote.quote}
</div>`

const quoteWriterDiv = `
<div id='quote_writer'>
    ${selectedQuote.writer}
</div>`
quoteContainer.innerHTML = quoteDiv + quoteWriterDiv


const email_form = document.getElementById('email_form')
const email_input = document.getElementById('email_input')


email_form.addEventListener('submit',async (e)=> {
    e.preventDefault()
    
    const email = email_input.value

    if(!email || email === ''){
        console.log('please enter an email');
        return
    }

    try {
        await axios.post('/website/submitEmail',{email})
        email_input.value = ''
    } catch (error) {
        console.log(error);
    }
})