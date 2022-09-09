/* Implementação dos elementos em variáveis */
var loginBtn = document.getElementById("logarBtn");
var emailInput = document.getElementById("email");
var passInput = document.getElementById("password");
var forgoP = document.querySelector(".forgot");

/* Verifica se há algum valor escrito no input email, para liberar o botão Logar */
function Verificar() {
    if (emailInput.value != ""){
        loginBtn.removeAttribute("disabled")
    } else loginBtn.setAttribute("disabled", "")
}

/* Adiciona vários inputs em um array e adiciona por um for, a execução da function Login() se pressionar o botão Logar */
var keyPress = [emailInput, passInput];
for (i = 0; i < keyPress.length; i++) {
    keyPress[i].addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            Login()
        }
    })
}

/* Verifica se há algum valor no input password, e dispara alertas na tela se tiver ou não valores */
function Login() {
    if (passInput.value == "") {
        alert("Por favor, digite sua SENHA!")
    } else {
        alert("Página não encontrada!")
    }
}

/* Em breve */
function ForgotPass() {
    alert("Iremos implementar esta função no site em breve!")
}