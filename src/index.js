console.log('project is up')

// 👉 TASK 1- Select the following elements from the DOM:

// A- BUTTONS
const launchButton = document.querySelector('#launchButton')
const confirmButton = document.querySelector('#confirmButton')
const cancelButton = document.querySelector('#cancelButton')

// B- MESSAGES
const successMessage = document.querySelector('.success')
const failureMessage = document.querySelector('.failure')

// C- MODAL
const modal = document.querySelector('.modal')


// 👉 TASK 2- Demo handling click events on button#launchButton, using:
//  A- HTML inside index.html
//  B- The DOM's element.onclick attribute
        // this ordide inside html event all of them
launchButton.onclick = function() {
    console.log('only hting is only one click per element')
}

//  C- element.addEventListener('click', callback)

launchButton.addEventListener('click',function(event) {
console.log('we can attach as many clcik as we want ')
console.log(event)
console.log(`
event type: ${event.type}
event target : ${event.target.nodeName}

`);
})
// document.addEventListener('click',function(event) {
//     if(event.target === launchButton) {
//         console.log('click the launch button')
//     } else {
//         console.log('click somewher else')}
//     })

// 👉 TASK 3- Create a function that launches!
// It should open the confirmation modal.
// Add it as an event listener for click events on the launch button.

function launch(event) {
    modal.classList.remove('off');  // modal has two class we are removing off from its class name
}
launchButton.addEventListener('click', launch)

// 👉 TASK 4- Create a function to confirm the launch.
// It should close the modal and display a success report.
// Add it as a listener for clicks on the confirmation button.
function confirm (event) {
    modal.classList.add('off');
    successMessage.classList.remove('off');
}

confirmButton.addEventListener('click', confirm);


// 👉 TASK 5- Create a function to cancel the launch.
// It should close the modal and display a failure report.
// Add it as a listener for clicks on the cancellation button.
function cancel (event) {
    modal.classList.add('off')
    failureMessage.classList.remove('off');
}


cancelButton.addEventListener('click',cancel);


// 👉 TASK 6- Create a function that closes the modal if
// the user hits the Escape key on their keyboard.
// Add it as an event listener for 'keydown' events on document.

// we are targeting  document itself
function escKey (event) {
    console.log(event.key)
    if (event.key === 'Escape') {
        modal.classList.add('off');
    }
}

document.addEventListener('keydown', escKey)


// 👉 TASK 7- Add to ALL ELEMENTS ON THE PAGE an event listener for click events.
// It should console.log the target 🎯 of the event.
// It should also console.log the CURRENT target 🧭 of the event.
// Play with stopPropagation and stopImmediatePropagation.

// console.log(document.all)
document.querySelectorAll('*').forEach(item => item.addEventListener('click',(event) => {
    console.log(`🥶 ` ,event.target)
    console.log("🤪", event.currentTarget)
    console.log('\n')
}));
modal.addEventListener('click',(event) => {
    console.log('👹👹👹👹👹👹👹👹👹👹propation stop👹👹👹👹👹👹👹👹👹👹👹');
    event.stopPropagation();
})


// 👉 TASK 8- [STRETCH] Create helper functions to make the code
// more readable in tasks 3, 4, 5, 6
function openModal() {

}

function closeModal() {

}

function killReports() {

}


// 👉 TASK 9- [STRETCH] Using the mouseover event on 'document',
// log to the console the X and Y coordinates
// of the mouse pointer, as it moves over the screen it.
