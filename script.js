const buttonModule = (function(){
    'use strict';

    //buttons
    const addButton = document.querySelector("#add-people")
    const removeButton = document.querySelector("#remove-people")

    //people-counter
    const _peopleCounter = document.querySelector("#people-counter");
    _peopleCounter.innerText = 0;

    const _incrementCounter = () => _peopleCounter.innerText = ++_peopleCounter.innerText;

    const _decrementCounter = () => {

        if (_peopleCounter.innerText === 0){
            return _peopleCounter.innerText;

        }else{
            _peopleCounter.innerText = --_peopleCounter.innerText;
        }
        
    };

    addButton.addEventListener('click', () => _incrementCounter())
    removeButton.addEventListener('click', () => _decrementCounter())

    return {addButton, removeButton};
})();

