const quotesCollection =[
{
 name: 'David Allen',
 saying: 'You can do anything, but not everything.'
},
{
 name: 'Antoine de Saint-Exupéry',
 saying: 'Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away.'
},
{
 name: 'Unknown Author',
 saying: 'The richest man is not he who has the most, but he who needs the least.'
},
{
 name: 'Wayne Gretzky',
 saying: 'You miss 100 percent of the shots you never take.'
},
{
 name: 'Ambrose Redmoon',
 saying: ' Courage is not the absence of fear, but rather the judgement that something else is more important than fear.'
},
{
 name: '--Gandhi',
 saying: ' You must be the change you wish to see in the world.'
},
{
 name: '—Lin-Chi',
 saying: 'When hungry, eat your rice; when tired, close your eyes. Fools may laugh at me, but wise men will know what I mean.'
}
,
{
 name: '—A. A. Milne',
 saying: 'The third-rate mind is only happy when it is thinking with the majority. The second-rate mind is only happy when it is thinking with the minority. The first-rate mind is only happy when it is thinking'
}
,
{
 name: '—Abraham Maslow',
 saying: 'To the man who only has a hammer, everything he encounters begins to look like a nail.'
}

,
{
 name: '—Aristotle',
 saying: ' We are what we repeatedly do; excellence, then, is not an act but a habit.'
}

,
{
 name: '—Lao-Tze',
 saying: 'Watch your thoughts, they become words.Watch your words, they become actions.Watch your actions, they become habits.Watch your character, it becomes your destiny'
}



]

const button = document.querySelector('#button');
const quotes = document.querySelector('#quote');
const writer = document.querySelector('#quoteAuthor');

button.addEventListener('click', doQuotes);

function doQuotes(){

	let random = Math.floor(Math.random()*quotesCollection.length);
	quotes.innerHTML= quotesCollection [random].saying;
	writer.innerHTML= quotesCollection [random].name;
}

