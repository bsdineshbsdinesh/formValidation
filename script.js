const loginForm = document.getElementById("loginForm");
const name = document.getElementById("name");
const pass = document.getElementById("pass");
let userData = null;
let error = null;
const response = document.getElementById("response");

const showResponse = function(userData){
    response.innerHTML = userData;
}

const verifyLogin = function(name , pass){
    return new Promise((resolve , reject) => {
        setTimeout(() => {
            if(name == "B.S.Dinesh" && pass == 194403){
                userData = "Login Successfully Processed";
                resolve(userData);
            }else{
                error = "Login Un-successfully Processed";
                reject(error);
            }
        } , 4000);
    });
}

loginForm.addEventListener("submit" , (e) => {
    e.preventDefault();
    async function login(){
        try{
            await verifyLogin(name.value , pass.value);
            showResponse(userData);
        }catch{
            showResponse(error);
        }
    }
    login();
});