let dataProfile = JSON.parse(localStorage.getItem('name'));
console.log(dataProfile);

const contentLogin = document.getElementById('login');

if(dataProfile){
    contentLogin.textContent = dataProfile
}

