//CHECKBOX

//IT IS BEST TO MAKE THESE FUNCTIONS TO BE REUSABLE, BUT IN THE INTEREST OF TIME, I'M MOVING ON. 
//DONE IS BETTER THAN PERFECT.

//Retrieving the first checkbox from the dom.
var checkbox1 = document.getElementById('checkbox1');
//Setting an event listener that triggers the code to check if the checkmark has been checked, and gets the second checkbox and sets it to "checked. Then, vice-versa."
checkbox1.addEventListener('change', function CheckForm() {
    // console.log('listener called');
    var isChecked = checkbox1.checked;
    if (isChecked) {
        let checkbox2 = document.getElementById('checkbox2').checked = true;
        // alert('checked');
    } else { //unchecked
        //execute code here
        let checkbox2 = document.getElementById('checkbox2').checked = false;
        // console.log('not checked');
    }
})

//Vice-Versa: 
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

