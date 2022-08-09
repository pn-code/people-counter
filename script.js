const buttonModule = (function(){
    'use strict';

    const addButton = document.querySelector("#add-people")
    const removeButton = document.querySelector("#remove-people")

    return {addButton, removeButton};
})();


const counterModule = (function(){
    'use strict';

    const _peopleCounter = document.querySelector("#people-counter");
    _peopleCounter.innerText = 0;

    const incrementCounter = () => _peopleCounter++;

    const decrementCounter = () => _peopleCounter--;


    return {incrementCounter, decrementCounter};

})();

