let contactList = document.querySelector(".card-grid");

let output ='';

let getContact = (contacts) =>{
    contacts.results.forEach(contact => {
        output += `
        <div class="w-full max-w-[300px] h-full">
            <img class="mb-4" src="${contact.picture}" alt="image">
            <div class="flex justify-between">
                <div>
                    <h3>${contact.full_name}</h3>
                    <h4 class="mt-2 "><i class='bx bx-phone '></i>${contact.phone}</h4>
                </div>
                <button class="mt-8">
                    <i class='bx bx-user'></i> show user
                </button>
            </div>
        </div>
        `;
       })
    
       contactList.innerHTML= output;
}

fetch('./contact.json')
.then(res => res.json())
.then(data => getContact(data))
.catch(error => {
    console.error('Error fetching data:', error);
});


// post data to an api


// contatctForm.addEventListener('submit', (event) =>{
//     event.preventDefault();


//     fetch('./contact.json',{
//         method : 'POST',
//         headers : {
//             'Content-Type' : "application/json; charset=UTF-8"
//         },
//         body : JSON.stringify({
//             fullName : nameFull.value,
//             phone : phone.value
//         })
//     })
//     .then(res => res.json())
//     .then(data => {
//         let contactArray = [];
//         contactArray.push(data);
//         getContact(contactArray);
//     })
// })


// dealing with ajouter une contact
    
    
    
    
    

function validerNom(){
    let fullName = document.getElementById("name").value;
// validation du name
    if ( fullName == "" ){
        alert("name is required");
        return false;
    }else if (!fullName.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        alert("ecrire full name");
        return false;
    }else{
        alert("full name est valid");
        return true;
    }
}

function validerEmail(){
    let email = document.getElementById("email").value;
    // validation du email
        if ( email == "" ){
            alert("email is required");
            return false;
        }else if (!email.match(/^[a-zA-Z0–9. _-]+@[a-zA-Z0–9. -]+\.[a-zA-Z]{2,4}$/)){
            alert("ecrire a valid email");
            return false;
        }else{
            alert("your email est valid");
            return true;
        }
}

function validerPhone(){
    let phone = document.getElementById("phone").value;
    // validation du phone
        if ( phone == "" ){
            alert("phone is required");
            return false;
        }else if (!phone.match(/(\+212|0)([ \-_/]*)(\d[ \-_/]*){9}/)){
            alert("ecrire a valid phone");
            return false;
        }else{
            alert("your phone est valid");
            return true;
        }
}

function validerAdresse(){
    let adresse = document.getElementById("adresse").value;
    // validation du adresse
        if ( adresse == "" ){
            alert("adresse is required");
            return false;
        }else{
            alert("your adresse est valid");
            return true;
        }
}

function validerWork(){
    let work = document.getElementById("work").value;
    // validation du work
        if ( work == "" ){
            alert("work is required");
            return false;
        }else{
            alert("your work est valid");
            return true;
        }
}

function afficherInfos(){
    let contactArray;
    if(localStorage.getItem("contactArray") == null){
        contactArray = [];
    }else{
        contactArray = JSON.parse(localStorage.getItem("contactArray"));
    }

    contactArray.forEach(function(contact){
        output += `
        <div class="w-full max-w-[300px] h-full">
            <img class="mb-4" src="${contact.picture}" alt="image">
            <div class="flex justify-between">
                <div>
                    <h3>${contact.fullName}</h3>
                    <h4 class="mt-2 "><i class='bx bx-phone '></i>${contact.phone}</h4>
                </div>
                <button class="mt-8">
                    <i class='bx bx-user'></i> show user
                </button>
            </div>
        </div>
        `;

        contactList.innerHTML= output;
    })

}

document.onload = afficherInfos();

function ajouterInfos(){

    let fullName = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let adresse = document.getElementById("adresse").value;
    let work = document.getElementById("work").value;
    
    if(!validerNom() || !validerEmail() || !validerPhone() || !validerAdresse() || !validerWork() ){
        alert("please check your inputs");
    }else{
        let contactArray;
        if(localStorage.getItem("contactArray") == null){
            contactArray = [];
        }else{
            contactArray = JSON.parse(localStorage.getItem("contactArray"));
        }

        contactArray.push({
            fullName : fullName,
            email : email,
            phone : phone,
            adresse : adresse,
            work : work,
        });

        localStorage.setItem("contactArray", JSON.stringify(contactArray));
        afficherInfos();
    }
}















