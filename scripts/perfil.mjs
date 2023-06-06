
const dataUserProfile = JSON.parse(localStorage.getItem('dataUser'))
console.log(dataUserProfile);
const sectionDataProfile = document.getElementById('dataUserProfile')
sectionDataProfile.innerHTML = ""

const welcome = document.getElementById('login');
if(dataUserProfile){
    welcome.textContent= "Welcome"
}



let contentProfile = `<h2>Hola ${dataUserProfile[0]}</h2>
                    <p>Emal:${dataUserProfile[2]}</p>
                    <p>Número: ${dataUserProfile[3]} </p>
                    <p>Intereres  <a href="">agregar intereses</a></p>
                    <p>Mis reservas:  </p>`;

sectionDataProfile.innerHTML += contentProfile

sectionDataProfile.classList.add('dataProfileUser')
console.log(sectionDataProfile)

