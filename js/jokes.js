// use this api for the in class lecture. https://icanhazdadjoke.com/

$(document).ready(()=>{
    console.log('Hello from Digital Crafts')
})

const $jokeWrapper = $('.joke-wrapper') // document.getElementById('joke-wrapper')
const $jokeBtn = $('.joke-btn')


// add an event listener 
$jokeBtn.on('click', () => {
    // $.get('https://icanhazdadjoke.com/').then(()=>{})
    $.ajax({
        url: 'https://icanhazdadjoke.com/', 
        headers: {
            Accept: 'application/json'
        }
    }).then((response)=>{
        console.log(response.joke);
        $('.joke').remove()
        const $joke = $('<div>', {text:response.joke});
        $joke.addClass('joke');
        $jokeWrapper.append($joke);
    });
})

