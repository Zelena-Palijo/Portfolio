//open close contact form
function openForm(){
  document.getElementById("myForm").style.display="block";
}

function closeForm(){
  document.getElementById("myForm").style.display="none";
}

//close contact form when the user clicks away
// document.addEventListener("click",function(event){
//   if(event.target.matches(".cancel")|| !event.target.closest(".form-popup") && !event.target.closest(".Pop_Up_Button") && !event.target.closest(".contact")){
//     closeForm()
//   }
// }, false)

function scrollToSection(id) {
  var section = document.getElementById(id);
  section.scrollIntoView({ behavior: 'smooth' });
}
