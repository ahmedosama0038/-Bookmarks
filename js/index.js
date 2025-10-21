
document.getElementById("name");
document.getElementById("Url");
document.getElementById("Supmit");
document.getElementById("Visit");
document.getElementById("Delete");

var  pname = document.getElementById("name");
var  pUrl = document.getElementById("Url");
var pSupmit = document.getElementById("Supmit");
var pVisit = document.getElementById("Visit");
var pDelete = document.getElementById("Delete");


 var allBookmark =[];

 if(localStorage.getItem("bookmarks") ){
    
 allBookmark = JSON.parse(localStorage.getItem("bookmarks") );
 displyData();

 }

 JSON.parse(  localStorage.getItem("bookmarks") );

//  allBookmark = JSON.parse(  localStorage.getItem("bookmarks") );
//  displyData();

function addBookmark() {
 var masaga= document.getElementById("masaga")
    var numName= pname.value.trim().toLowerCase();
    for(var i=0 ; i<allBookmark.length; i++){
        if(allBookmark[i].names.toLowerCase()===numName){
              pname.classList.add("is-invalid") 
              masaga.classList.remove("d-none")
              masaga.innerText= "This name already exists. Please choose anothe name"

            return 

        }

    }

   if(vildname()==true && validurl()== true ){

     var bookmark ={
     names : pname.value,
     linkurl :pUrl.value,
    }
    allBookmark.push(bookmark)
    localStorage.setItem("bookmarks",JSON.stringify(allBookmark));
    displyData();

   }
}

function displyData(){

    var cartona =""

for (let i = 0; i < allBookmark.length; i++) {
    
    cartona+= `
    
    

<tr>
<td>${i+1}</td>
<td>${allBookmark[i].names}</td>
<td><button  onclick="visitData(${i})" class=" btn btn-success ps-3 pe-3" id="Visit"> <i class="fa-solid fa-eye"></i> Visit</button></td>
<td><button   onclick="deleteData(${i})" class=" btn btn-danger" id="Delete"> <i class="fa-solid fa-trash"></i> Delete</button></td>

</tr>

    
    `

}
  
document.getElementById("body").innerHTML =cartona;

}


function deleteData(index){
   allBookmark.splice(index , 1) 
       localStorage.setItem("bookmarks",JSON.stringify(allBookmark));
displyData()

}


function visitData(index){

    window.open( allBookmark[index].linkurl);
    
}

function sitData(){
    
}



function vildname(){
    var text = pname.value;
    var regex =/^[A-Za-z]{3,30}$/
    var pmasaga =document.getElementById("pmasaga")
    if(regex.test(text)){
    pname.classList.remove("is-invalid")    
    pname.classList.add("is-valid") 
    pmasaga.classList.add("d-none")
     pname.style.boxShadow = "0 0 5px green"
    return true   

    }
else{
     pname.classList.remove("is-valid")    
    pname.classList.add("is-invalid") 
    pmasaga.classList.remove("d-none")
      pname.style.boxShadow = "0 0 5px red"

    return false
}
}


function validurl(){
 var urltext= pUrl.value; 
 var pattrn= /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/
 var pmurl= document.getElementById("pmurl")
if( pattrn.test(urltext)){
   pUrl.classList.remove("is-invalid")    
    pUrl.classList.add("is-valid")
    pmurl.classList.add("d-none") 
     pUrl.style.boxShadow = "0 0 5px green"
    return true
}

else{
     pUrl.classList.remove("is-valid")    
    pUrl.classList.add("is-invalid") 
   pmurl.classList.remove("d-none")
   pUrl.style.boxShadow = "0 0 5px red"
   return false
     
}
}