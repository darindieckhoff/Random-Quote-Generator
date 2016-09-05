// Random Quote Generator.

var quotes = [
  { 
    quote: 'The mountains are calling and I must go.',
    source: 'John Muir',
    citation: 'Letter to Sarah Muir Galloway',
    year: '1873',
    tags: ['Nature', 'Inspirational']
  },
  { 
    quote: '...the only thing we have to fear is fear itself...',
    source: 'Franklin D. Roosevelt',
    citation: 'First Inaugural Address',
    year: '1933',
    tags: ['Politics', 'Inspirational']
  },
  {
    quote: 'National parks are the best idea we ever had. Absolutely American, absolutely democratic, they reflect us at our best rather than our worst.',
    source: 'Wallace Stegner',
    year: '1983',
    tags: ['Nature', 'Inspirational', 'National Parks']
  },
  { 
    quote: 'The wilderness and the idea of wilderness is one of the permanent homes of the human spirit.',
    source: 'Joseph Wood Krutch',
    citation: 'Grand Canyon: Today and All Its Yesterdays',
    year: '1958', 
    tags: ['Nature', 'Inspirational']
  },
  { 
    quote: 'Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.',
    source: 'Albert Einstein',
    citation: 'Smithsonian',
    year: '1979',
    tags: ['Imagination', 'Knowledge', 'Inspirational', 'Science']
  },
  {
    quote: 'We are not simply in the universe, we are part of it. We are born from it.',
    source: 'Neil deGrasse Tyson',
    citation: 'The Greatest Story Ever Told.',
    year: '1998',
    tags: ['Physics', 'Universe', 'Science']
  }
];

var message = '';
var randomObject;
var property;
var value;
var ranNum;
var usedRanNum = [];

function print (message) { //print function to put final constructed message string into HTML
  var outputDiv = document.getElementById('quote-box');
  outputDiv.innerHTML = message;  
}

function getRandomQuote (randomObject) { //function to get random quote object
   ranNum = Math.floor(Math.random() * quotes.length); //random number generator form 0 to length of quotes array
   if (usedRanNum.length < quotes.length) { //check to see if all quotes have been used
     while (usedRanNum.indexOf(ranNum) !== -1) { //while loop to generate new random number if random number has been used
     ranNum = Math.floor(Math.random() * quotes.length); //random number generator from 0 to length of quotes array
     }
   } else { 
     usedRanNum.length = 0; //resets random number array if all quotes have been used
   }
   usedRanNum.push(ranNum); //puts random number into array to check for replicates
   randomObject = quotes[ranNum]; //getting random array object and storing it in variable
   return randomObject; 
   }

function quoteMessage (prop) { //function to construct a string using different properties of quote object
  if (prop === 'quote') { // if statement to construct string if property exists
    message += '<p class="quote">' + value + '</p>';
  }
  if (prop === 'source') {
    message += '<p class="source">' +  value;
  }
  if (prop === 'citation') {
    message += '<span class="citation">' +  value + '</span>';
  }
  if (prop === 'year') {
    message += '<span class="year">' +  value + '</span>' + '</p>';
  }
  if (prop === 'tags') {
    message += '<p class="tags">' + 'Tags: ' + value.join(', '); //tags property is an array so is joined for string contruction.
  }
}

function printQuote () { //printQuote displays the final HTML string to the page.
  var randomQuoteObject = getRandomQuote(randomObject); //calls getRandomQuote function ot get random array object
  for (var prop in randomQuoteObject) { //for in loop to cycle through properties of random array object
    if (randomQuoteObject.hasOwnProperty(prop)) {
      value = randomQuoteObject[prop]; //random quotes array object property value stored in variable
      quoteMessage (prop); //calls randomQuoteObject function to construct string
    }
  }  
  message += '</p>'; //adding ending paragraph tag
  print(message); //calls print function to display final HTML string to page
  message = ''; //clears message from screen for next quote
  var hue = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')'; // creates a random rgb color set
  document.body.style.background = hue; //changes background to random color
  document.getElementById('loadQuote').style.background = hue; //changes button color to color of background 
}

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called 

document.getElementById('loadQuote').addEventListener("click", printQuote, false);

setInterval('printQuote()', 30000); //sets timer to change quotes every 30 seconds 
  
