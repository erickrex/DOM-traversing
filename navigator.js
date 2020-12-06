/*  
Check if the reference to an element is inside another one
*/
const modal = document.querySelector('.modal');
modal.contains(button);
modal.querySelector('button');
!!modal.querySelector('button');


//Intersection observer, element partially scrolled into viewport
//animate on scroll, play video on scroll, record ad views
const options = {
    //specify the scroller, uses viewport if ommited
    root: document.querySelector('.scrollingDiv'),
    //optional margin offset
    rootMargin: '100px',
    //thresholds as to when you would like it to alert you
    // off, half, and totally on
    threshold:[0,0.5, 1.0]
}

const observer = new IntersectionObserver(callback, options);

const callback = (entries, observer) => {
    //Entries are elements that are within view
    entries.forEach(entry => {
        console.log(entry);
        //only using 1.0 threshold
        if(entry.Intersecting && entry.intersentionRatio >= 1){
            entry.target.classList.add('visible');
        } else {
            entry.target.classList.remove('visible');
        }
        //at this point you can also un observe for a single animation
        observer.unobserve(entry.target);
    })
}

//get elements to observe
const boxes= document.querySelectorAll('.box');
//observe each of those elements
boxes.forEach(box => observer.observe(box));


//RESIZE OBSERVER
function callback(entries, observer){
    entries[0].target.innerHTML = `
    <pre>
        ${JSON.stringify(entries[0].contentRect, null, '')}
    </pre>
    `;
}

const observer = new ResizeObserver(callback);

//get a few elements to observe
const element = document.querySelector('.resize');
observer.observe(element);

//element queries
function callback(entries, observer){
    const {width} = entries[0].contentRect;
    if (width > 400){
        size = 'large';
    } else if (width > 300) {
        size = 'medium';
    } else {
        size= 'small'
    }

    entries[0].target.classList.remove('small', 'medium', 'large');
    entries[0].target.classList.add(size);

}

/* return closest ancestor which is a div and has a parent articke */
el.closest("article > div")

const p = document.querySelector('p');

document.addEventListener('click', e => {
    const isOutside = !e.target.closest('.modeal-inner');
    p.textContent = `You Clicked ${isOutside ? 'Outside' : 'Inside'}!`;
    });

button.addEventListener('click', (e) => {
    //checks if button has a class of available and a set data-price atribute
    if(e.currentTarget.matches('.available[data-price]')){
    //do something here
    }

});

//list is an empty div where we add items with JS
list.addEventListener('click', e => {
    if (e.target.matches('button')) {
        deleteItem(parseFloat(e.target.value));
    }
});

/* check if a reference to an element is inside another*/
const modal = document.querySelector('.modal');
modal.contains(button); //true 
modal.querySelector('button'); // button
!!modal.querySelector('button'); //true


window.$ = document.querySelector.bind(document);
window.$$ = document.querySelectorAll.bind(document);

$('.card'); //<div class="card"></div>
$$('.card');//[<div class="card"></div>, <div class="card"></div>]


Node.prototype.on = window.on = function (name, fn){
    this.addEventListener(name, fn);
}

//instead of
document.querySelector('.card').addEventListener('click', handleClick);
//use
$('.card').on('click', handleClick);


NodeList.prototype.__proto__ = Array.prototype;

//use any array methods on NodeLists
$$('.cards').map(card=>card.textContent); //['card 1', 'card2']

//instead of
document
    .querySelectorAll('.cards')
    .forEach(card => card.addEventListener('click', handleClick));

//use
$$('.cards').on('click', handleClick);

NodeList.prototype.on = function(name, fn) {
    this.forEach(function(elem, i){
        elem.on(name, fn);
    })
}
