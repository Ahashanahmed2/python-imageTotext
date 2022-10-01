// let upload = document.querySelector("#upload")
// let download = document.querySelector("#download")
// let text = document.querySelector("#text")
// upload.addEventListener('change',(v)=>{
//    text.textContent = 'v.target.value'
  
// })
const output = document.getElementById('output');
const filepicker = document.getElementById('filepicker');

filepicker.addEventListener('change', (event) => {
  const files = event.target.files;
 
console.log(files[0].name)

  
});