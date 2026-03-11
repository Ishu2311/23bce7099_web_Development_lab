const API="http://localhost:3000/notes";

function addNote(){

let title=document.getElementById("title").value;
let subject=document.getElementById("subject").value;
let description=document.getElementById("description").value;

fetch(API,{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({title,subject,description})
})
.then(res=>res.json())
.then(()=>{
document.getElementById("title").value="";
document.getElementById("subject").value="";
document.getElementById("description").value="";
loadNotes();
});
}

function loadNotes(){

fetch(API)
.then(res=>res.json())
.then(data=>{

let html="";

data.forEach(note=>{

html+=`
<div class="note">
<h3>${note.title}</h3>
<p><b>Subject:</b> ${note.subject}</p>
<p>${note.description}</p>

<button class="delete-btn" onclick="deleteNote('${note._id}')">Delete</button>

</div>
`;

});

document.getElementById("notes").innerHTML=html;

});
}

function deleteNote(id){

fetch(API+"/"+id,{
method:"DELETE"
})
.then(()=>{
loadNotes();
});

}

loadNotes();
