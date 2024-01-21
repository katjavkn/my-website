let form = document.querySelector('form');
let errorContainer = document.querySelector('.message-error');
let errorList = document.querySelector('.message-error ul');
let email = document.querySelector('#email');
let successContainer = document.querySelector('.message-success');
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

document.addEventListener('DOMContentLoaded', function() {
    let form = document.querySelector('form');

    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            validateForm();
        });

        form.addEventListener('submit', function(event) {
            event.preventDefault();
            let email = document.querySelector('#email');
            
            if (email.value == '') {
                console.log('invalide');
                displayErrorMessage('Le champ "Email" est obligatoire.');
            } else {
                console.log('valide');
                email.classList.add('success');
                displaySuccessMessage('Formulaire soumis avec succès!');
            }
        });
    } else {
        console.error("Le formulaire n'a pas été trouvé dans le document.");
    }
    
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;

    darkModeToggle.addEventListener('change', () => {
        if (darkModeToggle.checked) {
            body.classList.add('dark-mode');
        } else {
            body.classList.remove('dark-mode');
        }
    });

    function displayErrorMessage(message) {
        errorList.innerHTML = ''; 
        const li = document.createElement('li');
        li.textContent = message;
        errorList.appendChild(li);
        errorContainer.classList.add('visible'); 
        successContainer.classList.remove('visible'); 
    }

    function displaySuccessMessage(message) {
        successContainer.innerHTML = ''; 
        const li = document.createElement('li');
        li.textContent = message;
        successContainer.appendChild(li);
        successContainer.classList.add('visible');
        errorContainer.classList.remove('visible'); 
    }

    function validateForm() {
        let isValid = true;
        const formFields = document.querySelectorAll('input:not([type="radio"]), textarea');

        formFields.forEach(function (field) {
            if (field.value.trim() === '') {
                isValid = false;
                displayErrorMessage(`Le champ "${field.name}" est obligatoire.`);
            }
        });

        if (isValid) {
            displaySuccessMessage('Formulaire soumis avec succès!');
        
        } else {
            displayErrorMessage('Veuillez remplir tous les champs obligatoires.');
        }
    }
});