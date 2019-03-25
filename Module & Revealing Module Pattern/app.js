// Basic Structure

// (function() {
//     // Declare private vars and functions

//     return {
//         // Declare public vars and functions
//     }
// })();

// STANDARD MODULE PATTERN
// const UICtrl = (function() {
//     let text = 'Hello World';

//     const changeText = function() {
//         const element = document.querySelector('h1');
//         element.textContent = text;
//     }

//     return {
//         callChangeText: function() {
//             changeText();
//             // console.log(text);
//         }
//     }
// })();

// UICtrl.callChangeText();
// // UICtrl.changeText();

// console.log(UICtrl.text);

// REVEALING MODULE PATTERN
const ItemCtrl = (function() {
    let _data = []; // This is a private var

    function add(item) {
        _data.push(item);
        console.log('item added.....');
    }

    function get(id) {
        return _data.find(item => {
            return item.id === id;
        });
    }

    return {
        add: add,
        get: get // Reveling these methods
    }
})();

ItemCtrl.add({ id: 1, name: 'John' });
ItemCtrl.add({ id: 2, name: 'Mark' });
console.log(ItemCtrl.get(2));