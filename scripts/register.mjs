let exposureSelect = JSON.parse(localStorage.getItem('eventsData'));
const eventTarget = document.getElementById('eventTarget');
eventTarget.innerHTML = exposureSelect;

const btn_openForm = document.getElementById('openForm');
const btn_closeForm = document.getElementById('closeForm');
const form_open = document.querySelector('#form_register')

const nameForm = document.getElementById('name');
const lastNameForm = document.getElementById('lastName');
const emailForm = document.getElementById('email');
const countPeople = document.getElementById('friends');
const registerAccept = document.getElementById('login_question');
const codAreaNumber = document.getElementById('codArea')
const conctacNumber = document.getElementById('contactNum')
const formRegister = document.getElementById('form_register');
const errorForm = document.getElementById('error')

//validations

formRegister.addEventListener('submit', (e) => {
    e.preventDefault()
    let dataUser = []
    let errorValidation = ""
    let invalidIncome = false
    let regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/
    let regexName = /^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$/
    let validName = regexName.test(nameForm.value);
    let validLastName = regexName.test(lastNameForm.value);
    let validEmail = regexEmail.test(emailForm.value);
    let numberContact = ""
    let validNumContact = false
    let validCodArea = false
    let numberOfPeople = false
    errorForm.innerHTML = ""

    if (!validName) {
        errorValidation += `El nombre no es válido <br>`
        invalidIncome = true
    } else {
        dataUser.push(nameForm.value)
    }

    if (!validLastName) {
        errorValidation += `El apellido no es válido <br>`
        invalidIncome = true
    } else {
        dataUser.push(lastNameForm.value)
    }
    if (!validEmail) {
        errorValidation += `El email no es valido`
        invalidIncome = true
    } else {
        dataUser.push(emailForm.value)
    }
    if(codAreaNumber.value.length > 4){
        errorValidation += "El código de área no es valido <br>"
        invalidIncome = true
    } else{
        validCodArea = true
    }
    
    if(conctacNumber.value.length != 8){
        errorValidation += "El número de telefono no es válido <br>";
        invalidIncome = true
    } else{
        validNumContact = true
        numberContact = codAreaNumber.value + conctacNumber.value
        dataUser.push(numberContact)
    }
     
    if(countPeople.value >10){
        errorValidation += "Podes agregar menos de 10 personas"
        invalidIncome = true
    } else{
        numberOfPeople = true
        dataUser.push(countPeople.value);
    }
    
    if (invalidIncome) {
        errorForm.innerHTML += errorValidation
    }

    if (registerAccept.checked && validName && validLastName && validEmail && validCodArea && validNumContact && numberOfPeople  ) {
        
        localStorage.setItem('dataUser',JSON.stringify(dataUser));
        console.log(dataUser)
    } else {
        console.log('no quiso el registro')
    }
})



