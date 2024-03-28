let contactList = document.querySelector(".card-grid");
let contatctForm = document.querySelector(".form");
let phone = document.getElementById("phone");
let nameFull = document.getElementById("full-name");
let output ='';

// let getContact = (contacts) =>{
//     contacts.results.forEach(contact => {
//         output += `
//         <div class="w-full max-w-[300px] h-full">
//             <img class="mb-4" src="${contact.picture}" alt="image">
//             <div class="flex justify-between">
//                 <div>
//                     <h3>${contact.full_name}</h3>
//                     <h4 class="mt-2 "><i class='bx bx-phone '></i>${contact.phone}</h4>
//                 </div>
//                 <button class="mt-8">
//                     <i class='bx bx-user'></i> show user
//                 </button>
//             </div>
//         </div>
//         `;
//        })
    
//        contactList.innerHTML= output;
// }

// fetch('./contact.json')
// .then(res => res.json())
// .then(data => getContact(data))
// .catch(error => {
//     console.error('Error fetching data:', error);
// });



contatctForm.addEventListener('submit', (event) =>{
    event.preventDefault();


    fetch('https://jsonplaceholder.typicode.com/posts',{
        method : 'POST',
        headers : {
            'Content-Type' : " application/json; charset=UTF-8"
        },
        body : JSON.stringify({
            fullName : nameFull.value,
            phone : phone.value
        })
    })
    .then(res => res.json())
    .then(data => {
        let contactArray = [];
        contactArray.push(data);
        getContact(contactArray);

    })
})
