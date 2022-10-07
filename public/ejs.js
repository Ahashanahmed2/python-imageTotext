let i = io()

let submit = document.querySelector(".submit")
let pcload =document.querySelector(".pcload")


   i.on("curren",v=>{
  pcload.textContent = `${v.toFixed(2)}%`;
   })

 

let num = 0
submit.addEventListener('click',async(v)=>{
  v.preventDefault()

  
submit.classList.add('d-none')

//chack boxb
  let output = [];
  let checke = document.querySelectorAll('input[name="inlineRadioOptions"]:checked');
checke.forEach((v)=>{
output.push(v.value)


})
   if(output.length == 0){
     
      
      alert('check the checkbox')
     return;
    }


  

let form = document.querySelector("#form")

let form_data ={}
Array.from(form).forEach(e=>{
  form_data[e['name']] = e['value']
})
console.log(form_data)
await axios({
method:'post',
url:'/',
data:{name:form_data,language:output}
})
.then(e=>{
  console.log(e.data)
})
.catch(err=>{message:err})
  
})




let item_num = 0
i.on('send_data',(msg)=>{
  let badge = document.querySelector(".badge")
let badge_background = document.querySelector('.badge_background')



if(msg['download'].length-1 == msg['upload'].length){
  item_num += msg['len']
  badge.textContent=item_num;
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

let s = document.querySelector('#s')
let m = document.querySelector('#m')
let h= document.querySelector('#h')
let seconed = 0
let minute = 0
let houre = 0
i.on('timeset',value=>{
console.log(value)




seconed+=value


s.textContent = `${seconed}`;
m.textContent = `${minute}:`;
h.textContent = `${houre}:`;

if(seconed === 60){
seconed = 0;
minute +=1
   }else if(minute === 60){
    minute = 0
    houre +=1
   }

})

i.on("converted_err",e=>{
  submit.classList.remove('d-block')
})