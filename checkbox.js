//CHECKBOX

//1. Sync up the two checkboxes on the page so both check and uncheck at the same time.

//Need a checked: y/n boolean that is available to the blue button for the alert to request the user to check the box before they can proceed.
//Both checkboxes need to have the same class. Grab them by the class, access their value


// function myFunction() {

//     var inputs, index;

//     inputs = document.getElementsByTagName('input');
//     // for (index = 0; index < inputs.length; ++index) {
//     // deal with inputs[index] element.
//     inputs.forEach({
//         if(checked) {
//             return
//         }
//     })

//     console.log(checkmark.checked);
// };

//IT IS BEST TO MAKE THESE FUNCTIONS TO BE REUSABLE, BUT IN THE INTEREST OF TIME, I'M MOVING ON. 
//DONE IS BETTER THAN PERFECT.
var checkbox1 = document.getElementById('checkbox1');
checkbox1.addEventListener('change', function CheckForm() {
    // console.log('listener called');
    var isChecked = checkbox1.checked;
    if (isChecked) {
        let checkbox2 = document.getElementById('checkbox2').checked = true;
        // alert('checked');
    } else { //unchecked
        //execute code here
        let checkbox2 = document.getElementById('checkbox2').checked = false;
        console.log('not checked');
    }
})

var checkbox2 = document.getElementById('checkbox2');
checkbox2.addEventListener('change', function CheckForm() {
    var isChecked = checkbox2.checked;
    if (isChecked) {
        let checkbox1 = document.getElementById('checkbox1').checked = true;
    } else { //unchecked
        //execute code here
        let checkbox1 = document.getElementById('checkbox1').checked = false;
        console.log('not checked');
    }
})




// }

// checkbox.addEventListener("change", functionname, false);
// const checkboxes = [document.body.querySelector(input[type = 'checkbox'])];

// console.log(checkboxes[0, 1]);
// return checkboxes;
// }





//if either checkbox's state is true, set the other to true as well. 

