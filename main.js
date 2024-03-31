let contactList = document.querySelector(".card-grid");

let output ='';

let getContact = (contacts) =>{
    contacts.results.forEach(contact => {
        output += `
        <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div class="flex flex-col items-center pb-10">
                <img class="w-[9.1rem] h-[9.3rem] mb-3 mt-5 rounded-full shadow-lg" src="${contact.picture}" alt="Contact image"/>
                <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">${contact.full_name}</h5>
                <div class="flex items-center">
                    <i class='mx-2  bx bx-phone text-lg text-gray-500 dark:text-gray-400 w-6 h-6'></i>
                    <span class="text-xl text-gray-500 dark:text-gray-400">${contact.phone}</span>
                </div>
                <div class="flex mt-4 md:mt-6">
                    <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">show profile</a>
                </div>
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
        <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div class="flex flex-col items-center pb-10">
                <img class="w-[9.1rem] h-[9.3rem] mb-3 mt-5 rounded-full shadow-lg" src="${contact.picture}" alt="Contact image"/>
                <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">${contact.fullName}</h5>
                <div class="flex items-center">
                    <i class='mx-2  bx bx-phone text-lg text-gray-500 dark:text-gray-400 w-6 h-6'></i>
                    <span class="text-xl text-gray-500 dark:text-gray-400">${contact.phone}</span>
                </div>
                <div class="flex mt-4 md:mt-6">
                    <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">show profile</a>
                </div>
            </div>
        </div>
        `;

        contactList.innerHTML= output;
    })

}

document.onload = afficherInfos();


let imageInput = document.querySelector(".image");
let file = document.getElementById("imageUpload");


file.onchange = function(){
    if(file.files[0].size < 1000000 ){
        var fileReader = new FileReader();
        fileReader.onload = function(e){
            urlImage = e.target.result;
            imageInput.src = urlImage;
        }

        fileReader.readAsDataURL(file.files[0])
    }else{
        alert("tooooooooooooo large");
    }
}


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
            picture : imageInput.src == undefined ? "/images/Sample_User_Icon.png" : imageInput.src,
        });

        localStorage.setItem("contactArray", JSON.stringify(contactArray));
        afficherInfos();
    }
}


// search fonction
let searchBtn = document.querySelector("#search-input");

searchBtn.addEventListener("keypress", function(event){
    if (event.key === "Enter"){
        let searchValue = searchBtn.value.toLowerCase().trim();
        let cardContacts = document.querySelectorAll(".card-grid  div");

        cardContacts.forEach(card => {
            let nameContact = card.querySelector("h5").textContent.toLowerCase();

            if (searchValue === ""){
                card.style.display = "block";
            }else{
                if(nameContact.includes(searchValue)){
                    card.style.display = "block";
                }else{
                    card.style.display = "none";
                }
            }
        });
    }
});





















