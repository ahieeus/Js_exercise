//DOM stands for Document Object Model
//DOM API provides a set of function and methods to modify the HTML document dynamically via Js

//get the element with id 'first', if multiple elements have the same id, return the first element, if no element found return null
//It's a live object that update auto when the document change
const elem = document.getElementById('first');

//getElementById returned a single HTML element object
console.log(typeof(elem));

//add a class to an element
elem.classList.add('active');

//change the text content
elem.innerHTML = "Copyright";
//or
elem.innerText = "Copyright1";
//or
elem.textContent = "Copyright2";

console.log(elem.textContent);
console.log(elem);




//To get all elements with a specified name, returns a live NodeList of elements, if no element found return an empty NodeList object
//It's a live object that update auto when the document change
//NodeList is an array-like object
let rates = document.getElementsByName('rate');
console.log(typeof(rates));




//accepts a tag name such as h1, a, img and return a live HTMLCollection, if no element found return an empty HTMLCollection[]
//HTMLCollection is an array-like object
let headings = document.getElementsByTagName('h2');
alert(headings[0].textContent);
console.log("The number of H2 tags: " + headings.length);

//to create an array of elements for array-like object
const array = Array.of(...headings);




//return HTMLCollection, if no element found return an empty HTMLCollection[]
//when call getElementsByClassName() method on the document element, it will search the entire document and return the matched elements
//when call getElementsByClassName() method on the specific element, it will return the descendant of that particular element 
let menu = document.getElementById('menu');
let items = menu.getElementsByClassName('item');
console.log(items);
let data = Array.of(...items).map((item) => item.textContent);
console.log(data);

let items1 = document.getElementsByClassName('secondary');
let data1 = Array.of(...items1).map(item => item.textContent);
console.log(data1);




//select the first element that matched one or more CSS selectors: let element = parentNode.querySelector(selector);
//the selector is a CSS selector, if the selector is not valid CSS syntax, the method return a SyntaxError exception, if no element found return null
//available on the document object of any Element object

//select all elements that match a CSS selector or a group of CSS selectors: let elementList = parentNode.querySelectorAll(selector);
//return static NodeList of elements, if no element found return empty NodeList

let element = document.querySelector('*') //matchs all elements of any type
let heading1 = document.querySelector('h1');
let note = document.querySelector('.item'); //for element with a given CSS class
let logo = document.querySelector('#first')//for element with a given CSS id

//To select all elements that have a given attribute, use one of the following attribute selector syntaxes:
/*[attribute]
[attribute=value]
[attribute~=value]
[attribute|=value]
[attribute^=value]
[attribute$=value]
[attribute*$*=value]
 */

let elements = document.querySelectorAll('div, p') //grouping selector
let links = document.querySelector('p a')//match <a> inside p element
let listItems = document.querySelectorAll('ul > li');//finds all li elements that are directly inside a <ul> element
let listItems1 = document.querySelectorAll('ul.nav > li');//To select all li elements that are directly inside a <ul> element with the class nav
let links1 = document.querySelectorAll('p ~ a');//The ~ combinator selects siblings that share the same parent
let links2 = document.querySelectorAll('h1 + a');//The + adjacent sibling combinator selects adjacent siblings