
 function getFormValue() {
    const a = document.getElementsByName("fname")[0].value;
    const b = document.getElementsByName("lname")[0].value;

    // When submit button is clicked
    document.getElementById("submit").addEventListener("click", function() {
        alert(a + " " + b);
    });
}


