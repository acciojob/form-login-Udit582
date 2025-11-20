function getFormvalue(event) {
    event.preventDefault(); // stops page from refreshing

    const a = document.getElementsByName("fname")[0].value;
    const b = document.getElementsByName("lname")[0].value;

    alert(a + " " + b);
}
