let input = document.getElementById("input")
let list = document.getElementById("unorder")
let ad=document.getElementById("ad")

function add(event){
    event.preventDefault  //prevent items by default clicks
    let create1 =document.createElement('ul')  //creating element
    create1.innerHTML=
    `
     <div class="lists">
       
              <li>  ${input.value}  <button id='listbtn' onclick='clearitem(event)'><i class='fa-solid fa-trash'></i></button></li>
            
     </div>
    `
    list.appendChild(create1)

  
}

function clearitem(event)
{
  event.target.parentElement.parentElement.remove();
}

input.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
      ad.click();
  }
});