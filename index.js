const express = require("express");
const fs = require("fs");
const path = require("path");
const spawn = require("child_process").spawn;
const app = express();
const port = 3000;
app.set('view engine','ejs')
app.use(express.static(path.join(__dirname,"public")))

app.post("/",(req,res)=>{


process.on('close',(code)=>{
  console.log(code , 'close')
})
res.send('ahan')
})



app.get("/", (req, res) => {
 
  res.send("index.ejs");
});
let UPLOAD_Link = '/home/ahsan/Documents/python/18';
let DOWNLOAD_Link = '/home/ahsan/Documents/তাফসিরে মারেফুল কুরআন/1/1';


const process = spawn('python3',['file.py','/home/ahsan/Documents/python/18','/home/ahsan/Documents/তাফসিরে মারেফুল কুরআন/1/1'])
process.stdout.on('data',function(data){

 let aa = data.toString()
 
let bb = aa.split('\n')


console.log('download:',bb.length)
})

 // let array = [
  //   "তাফসিরে মারেফুল কুরআন",
  //   "তাফসিরে ইবনে কাসির",
  //   "তাফসিরে মাযহারী",
  //   "তাফসীরে জালালাইন",
  //   "তাফসীরে তাবারী শরীফ",
  //   "তাফসীর ফী যিলালিল কোরআন",
  //   "ফসীরে তাওযীহুল কুরআন",
  //   "তফসীরে আনওয়ারুল কুরআন",
  //   "তাফসীরে সূরা তওবা",
  //   "তাফসির সাইদী",
  // ];
  
 
  // for (let index = 0; index < array.length; index++) {
   

    
  //   //book name
  //    let book = array[index];
  //    fs.mkdir(path.join(__dirname,'/..',array[index]),(err)=>{
  //     console.log({message:err})
  //    })
  
  // console.log('book:',book)
  //    let sur = 114
  // for (let surah_index = 0; surah_index < sur; surah_index++) { // surah name


  




  //   const su = sur[surah_index];
  //   fs.mkdir(path.join(__dirname,'/..',array[index],`${surah_index + 1}`),(err)=>{
  //     console.log({message:err})
  //    })
  // console.log('surah:',su)
  
  // let surah_ayat = [7,286,200,176,120,165,206,75,129,109,123,111,43,52,99,128,111,110,98,135,112,78,118,64,77,227,93,88,69,60,34,30,73,54,45,83,182,88,75,85,54,53,89,59,37,35,38,29,18,45,60,49,62,55,78,96,29,22,24,13,14,11,11,18,12,12,30,52,52,44,28,28,20,56,40,31,50,40,46,42,29,19,36,25,22,17,19,26,30,20,15,21,11,8,8,19,5,8,8,11,11,8,3,9,5,4,7,3,6,3,5,4,5,6]
     
  // for (let ayat_index = 0; ayat_index < surah_ayat[surah_index]; ayat_index++) {// ayat name

   
     


  //     const ayat = surah_ayat[ayat_index];
  //      fs.mkdir(path.join(__dirname,'/..',array[index],`${surah_index +1}`,`${ayat_index +1}`),(err)=>{
  //       console.log({message:err})
  //      })
  //   console.log('ayat:',ayat)


      
  //   if(surah_ayat[surah_index] ==  ayat_index){
  //     break
  //    }

      
  //   }

  




  //   if(sur == surah_index){
  //     break
  //    }
      
    
  // }




  // if(array.length == index){
  //   break
  // }
        
  
  // }


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
