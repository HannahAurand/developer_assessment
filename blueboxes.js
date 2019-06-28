

// 2. Make it so when someone clicks either of the two blue buttons below the checkboxes and the checkboxes are not checked an alert appears asking the user to check the checkbox before proceeding.

//I realize I need to make these reusable so that I can put them all into one function and save space. Currently going for "done," not "perfect."

const button1 = document.getElementById('button1');
button1.addEventListener('click', function () {
    let isChecked = document.getElementById('checkbox1').checked;
    if (!isChecked) {
        alert("Please check one of the Checkmarks for the newsletter to continue.")
    } else if (isChecked) {
        apiCall();
    }
});

const button2 = document.getElementById('button2');
button2.addEventListener('click', function () {
    let isChecked = document.getElementById('checkbox2').checked;

    if (!isChecked) {
        alert("Please check one of the Checkmarks for the newsletter to continue.")
    } else {
        apiCall();
    }
});


let apiCall = function () {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let obj = this.responseText;
            const text = "Congratulations! Your spot is reserved"
            const regex = /Congratulations! Your spot is reserved/;
            const found = text.match(regex);
            console.log(found[0]);
            let success = document.getElementsByClassName('success');
            console.log(success);
            success.textContent = found[0];
            alert(found[0]);
      

        }
    };
    xhttp.open("GET", "https://bl45immth4.execute-api.us-east-1.amazonaws.com/production/", true);
    xhttp.send();


}

// When the user clicks either of the two blue buttons below the checkboxes and the checkboxes are checked make a call to the following endpoint: 
// https://bl45immth4.execute-api.us-east-1.amazonaws.com/production/

// AJAX call to the above endpoint

// After receiving a response from this call on button click please parse the response of the call and place the value of submitok below the buttons. 

//parse returned data and get the submitok key's value. Place it in the dom below the blue buttons. 