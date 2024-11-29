//The element.attributes property provides a live collection of attributes available on a specific element.
// element.attributes is a NamedNodeMap, not an Array, therefore, it has no Array’s methods.
let input = document.querySelector('#username');

for (let attr of input.attributes) {
    console.log(`${attr.name} = ${attr.value}`)
}
//When a standard attribute changes, the corresponding property is auto-updated with some exceptions and vice versa.

//If you want to add a custom attribute to an element, you should prefix it with the data- because all attributes start with data- are reserved for the dev's user
let bar = document.querySelector('#main');
bar.setAttribute('data-secured', 'true');
console.log(bar.dataset);// access data-* attributes



//Use the setAttribute(name, value) to set the value of an attribute on a specified element, return undefined
//if the attribute already exists on the elements, method will updates the value and adds a new attribute with the specified name and value
let btnSend = document.querySelector('#btnSend');
if (btnSend) {
    btnSend.setAttribute('name', 'send');// set the value of the name attribute to send 
    btnSend.setAttribute('disabled', '');//set the value of the disabled attribute so that when users click the button, it will do nothing
}
//Setting the value of a Boolean attribute to whatever value, that value will be considered to be true



//Get the value of an attribute of a specified element by calling the getAttribute(name) method on the element
//returns null if the attribute does not exist
let link = document.querySelector('#js');
if (link) {
    let target = link.getAttribute('target');
    console.log(target);
}




//Use the removeAttribute(name) to remove an attribute from a specified element, returns a value of undefined
//To set false to the Boolean attributes, cannot use the setAttribute(), you have to remove the attribute entirely
if (link) {
    link.removeAttribute('target');
}




//Use the hasAttribute() method to check if an element contains a specified attribute
let btn = document.querySelector('#btnSend');
if (btn) {
    let disabled = btn.hasAttribute('disabled');
    console.log(disabled);
}

