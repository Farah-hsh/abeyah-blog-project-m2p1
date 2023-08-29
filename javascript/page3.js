let input = document.getElementById("addcomment");

let submit = document.getElementById("submit")

let listTasks = document.getElementById("listcomment")



submit.addEventListener('click',addComment);

function addComment(e){
   e.preventDefault();
   if(input.value!=''){
       let value = input.value;
       

       let newItem = document.createElement("li");
       newItem.id = "newcomment" ;

       

       newItem.innerText = value;
       listTasks.appendChild(newItem);
       input.value= '';

          let deletecomment = document.createElement("button");
   deletecomment.id = "delcomment" ;
   deletecomment.innerText = "حذف";


   deletecomment.addEventListener("click" , function(){
    newItem.remove();
    deletecomment.remove();
})
newItem.appendChild(deletecomment);
   }

}
