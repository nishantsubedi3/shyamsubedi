function sendmail() {
  Email.send({
    SecureToken : "07c079ee-bddc-4a2b-ac64-b730a71ef41e",
    To : "moviesbaba123@gmail.com",
    From : document.getElementById("mail").value,
    Subject : "This is the subject",
    Body : "And this is the body"
}).then(
  message => alert("SORRY THE SERVICE YOU ARE TRYING TO USE IS CURRENTLY UNAVIABLE :(")
);
}