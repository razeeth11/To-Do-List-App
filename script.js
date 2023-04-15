const input = document.querySelector(".input")
const button = document.querySelector(".button")
const list = document.querySelector(".list")

button.addEventListener('click' , ()=>{
  if(input.value == ""){
    alert("You Must Write Something")
  } else{
    var li = document.createElement("li")
    list.append(li)
    li.innerHTML = input.value
    let span = document.createElement("span")
    span.innerHTML = "\u00d7" ;
    li.append(span)
  }
  input.value = ""
})

list.addEventListener("click" , (event)=>{
   if(event.target.tagName == "LI"){
    event.target.classList.toggle("checked")
   } else if(event.target.tagName == "SPAN"){
    event.target.parentElement.remove()
   }
}) 