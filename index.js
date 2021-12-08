// const gameBoard = (() => {
//     //   should be a module
//     const create = () => {
//         let contents = [];
//         for (let i = 0; i < 0; i++) {
//             contents.push("");
//         };
//         return contents;
//     };
//     return create();
// })();

// const player = (name, marker) => {
//     // factory
// }

// const gameFlow = () => {

// }

// displayController = () => {
//     // make module
// }


// Places X marker on clicked box if empty and updates the box's class to correct marker 
const cells = document.querySelectorAll(".box").forEach(box => box.addEventListener('click', turn));

function turn(clickedBoxEvent) {
    const clickedBox = clickedBoxEvent.target;
    if (!clickedBox.classList.contains("circle")) {
        clickedBox.classList.add('x');
        clickedBox.textContent = 'X'
    } else {
        clickedBox.classList.add('circle');
        clickedBox.textContent = 'O'
    };
};

const resetBtn = document.querySelector("#restartButton").addEventListener('click', function () {
    const getClassNames = document.getElementById('board');
    const allClasses = getClassNames.children;
    for (let i = 0; i < allClasses.length; i++) {
        allClasses[i].textContent = ""
        if (allClasses[i].classList.contains('x')) {
            allClasses[i].classList.remove("x")
        } else {
            if (allClasses[i].classList.contains('circle')) {
                allClasses[i].classList.remove("circle")
            }
        }
    }
});





// const restart = document.getElementById('restartButton');

// restart.addEventListener('click', function () {
//     let clear = document.querySelectorAll('.box')
//     let attr = clear.getAttributeNode("class");
//     console.log(attr)
    // clear.forEach(() => {
    //     return className.remove = 'box';
    // })
    //     if (clear.classList.contains())
    //         clear.classList.remove("x", "circle").textContent = '';

// })






