

let submit = document.querySelector(".submit")

let i = io()
// badge_background.classList.add("d-none")
submit.addEventListener('click',async(v)=>{
  v.preventDefault()

let form = document.querySelector("#form")

let form_data ={}
Array.from(form).forEach(e=>{
  form_data[e['name']] = e['value']
})

await axios({
method:'post',
url:'/',
data:form_data
})
.then(e=>{
  console.log(e.data)
})
.catch(err=>{message:err})
  
})




i.on('send_data',(msg)=>{
  let badge = document.querySelector(".badge")
let badge_background = document.querySelector('.badge_background')

console.log('download:',msg['download'])
console.log('upload:',msg['upload'])


if(msg['download'].length-1 == msg['upload'].length){
  badge.innerHTML=msg['len']-1;
  badge_background.classList.remove('d-none')

  let item_image = document.querySelector('#item_image')
  let item = document.createElement("div");
  item.className ="d-flex gap-3 justify-content-center flex-wrap"
  msg['download'].pop()
  msg['download'].forEach(v=>{
   
    item.innerHTML +=`<div class="px-3 mx-1 my-2 border border-warning bg-dark text-light">${v}</div>`;
   
  })
  
  item_image.appendChild(item)
}

})