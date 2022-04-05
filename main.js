//1. COMPLETE VARIABLE AND FUNCTION DEFINITIONS

const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

//2. RAW TEXT STRINGS

//Store the first, big long, string of text inside a variable called storyText.
//Store the first set of three strings inside an array called insertX.
//Store the second set of three strings inside an array called insertY.
//Store the third set of three strings inside an array called insertZ.


let storyText='It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';
let insertX=[
'Willy the Goblin',
'Big Daddy',
'Father Christmas'
];
let insertY=[
'the soup kitchen',
'Disneyland',
'the White House'
];
let insertZ=[
'spontaneously combusted',
'melted into a puddle on the sidewalk',
'turned into a slug and crawled away'
];

randomize.addEventListener('click', result);

//For the remainder of the assessment, you'll be filling in lines inside this function to complete it and make it work properly:

function result() {

  if(customName.value !== '') {
    const name = customName.value;

  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(300);
    const temperature =  Math.round(94);

  }

  story.textContent = ;
  story.style.visibility = 'visible';
}


/*
Completing the result() function:

1.   Create a new variable called newStory, and set its value to equal storyText.
This is needed so we can create a new random story each time the button is pressed and the function is run.
If we made changes directly to storyText, we'd only be able to generate a new story once.

2.   Create three new variables called xItem, yItem, and zItem, and make them equal to the result of calling randomValueFromArray() 
on your three arrays (the result in each case will be a random item out of each array it is called on).
For example you can call the function and get it to return one random string out of insertX by writing randomValueFromArray(insertX).

3.   Next we want to replace the three placeholders in the newStory string — :insertx:, :inserty:, and :insertz: — with the strings stored in xItem, yItem, and zItem.
There is a particular string method that will help you here — in each case, make the call to the method equal to newStory, so each time it is called, newStory
is made equal to itself, but with substitutions made. So each time the button is pressed, these placeholders are each replaced with a random silly string.
As a further hint, the method in question only replaces the first instance of the substring it finds, so you might need to make one of the calls twice.

4.   Inside the first if block, add another string replacement method call to replace the name 'Bob' found in the newStory string with the name variable.
In this block we are saying "If a value has been entered into the customName text input, replace Bob in the story with that custom name."

5.   Inside the second if block, we are checking to see if the uk radio button has been selected.
If so, we want to convert the weight and temperature values in the story from pounds and Fahrenheit into stones and centigrade. What you need to do is as follows:
    I.   Look up the formulae for converting pounds to stone, and Fahrenheit to centigrade.
    II.  Inside the line that defines the weight variable, replace 300 with a calculation that converts 300 pounds into stones.
            Concatenate ' stone' onto the end of the result of the overall Math.round() call.
    III. Inside the line that defines the temperature variable, replace 94 with a calculation that converts 94 Fahrenheit into centigrade.
            Concatenate ' centigrade' onto the end of the result of the overall Math.round() call.
    IV.  Just under the two variable definitions, add two more string replacement lines that replace '94 fahrenheit' with the contents of the temperature variable,
         and '300 pounds' with the contents of the weight variable.

6.   Finally, in the second-to-last line of the function, make the textContent property of the story variable (which references the paragraph) equal to newStory.
*/

/*
Hints and tips:

*   You don't need to edit the HTML in any way, except to apply the JavaScript to your HTML.

*   If you are unsure whether the JavaScript is applied to your HTML properly, try removing everything else from the JavaScript file temporarily,
    adding in a simple bit of JavaScript that you know will create an obvious effect, then saving and refreshing.
    The following for example turns the background of the <html> element red — so the entire browser window should go red if the JavaScript is applied properly:
                document.querySelector('html').style.backgroundColor = 'red';

*   Copy to Clipboard
    Math.round() is a built-in JavaScript method that rounds the result of a calculation to the nearest whole number.

*   There are three instances of strings that need to be replaced. You may repeat the replace() method multiple times, or you can use regular expressions.
    For instance, let text = 'I am the biggest lover, I love my love'; text.replace(/love/g,'like'); will replace all instances of 'love' to 'like'. Remember, Strings are immutable!
*/