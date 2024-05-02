function doLogin() {
var username = document.getElementByld ("username") •value;
var password = document-getElementByld("password") .value;
if (username == "" Il password == "*) {
    alert ("Username e password sono obbligatori");
}
els {

fetch ( "https://www.cacciaapi.altervista.org/login.php/loginIpad', {
method: "POST', // o 'GET'
headers: {
'Content-Type': 'application/json',
},
body: JSON. stringify({
"username": username,
"password": password
})
})
-then (response => response. json())
-then (data →> console. log(data))
•catch((error) →> {
console.error ('Errore:', error);
｝
