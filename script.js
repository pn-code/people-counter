const buttonModule = (function(){
    'use strict';

    //buttons as public variables
    const addButton = document.querySelector("#add-people")
    const removeButton = document.querySelector("#remove-people")

    //people-counter as private variables
    const _peopleCounter = document.querySelector("#people-counter");
    _peopleCounter.innerText = 0;

    //private functions only accessed by buttons
    const _incrementCounter = () => _peopleCounter.innerText = ++_peopleCounter.innerText;

    const _decrementCounter = () => {
        
        if (_peopleCounter.innerText === 0){
            return;

        } else if (_peopleCounter.innerText > 0){
            _peopleCounter.innerText = --_peopleCounter.innerText;
        }
    };

    //links public buttons to private functions
    addButton.addEventListener('click', () => _incrementCounter())
    removeButton.addEventListener('click', () => _decrementCounter())

    return {addButton, removeButton};
})();

