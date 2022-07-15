let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");

let sizePassword = document.querySelector("#valor");
let password = document.querySelector("#password");

let containerPassword = document.querySelector("#container-input");


let charset = "abcdefghijklmnopqrstvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!#$%&"
let novasenha = "";

sizePassword.innerHTML = sliderElement.value;

slider.oninput = function(){
    sizePassword.innerHTML = this.value;
}

function generatePassword(){
    let pass = "";
    for(let x = 0, i = charset.length; x < sliderElement.value; ++x){
        pass += charset.charAt(Math.floor(Math.random() * i));
    }

    /*containerPassword.classList.remove("hide");*/
    password.innerHTML = pass;
    novasenha = pass;
}

function copyPassword(){
    navigator.clipboard.writeText(novasenha);
    alert("Senha copiada com sucesso!");
    
}