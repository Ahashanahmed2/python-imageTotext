const express = require("express");
const fs = require("fs");
const path = require("path");
const spawn = require("child_process").spawn;
const app = express();
const port = 3000;
app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, "public")))
app.use(express.static(path.join(__dirname, "node_modules/axios/dist")))

const { urlencoded, json } = require("body-parser");
const { default: axios } = require("axios");
app.use(urlencoded({ extended: true }));
app.use(json())

//sockat io
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

io.on("connection",(con)=>{
  console.log('con')
})



app.post("/",(req, res) => {

  let upload = req.body.upload;
  let download = req.body.download;
   


   const process = spawn('python3', ['file.py',upload,download])
   process.stdout.on('data', function (data) {
   
    let aa = data.toString()
   
    let bb = aa.split('\n')
   
   
   
    fs.readdir(path.join(upload), (err, dat) => {
      err && console.log({ message: err })
      if (dat.length == bb.length - 1) {

        let up = { upload: dat, download: bb, len: bb.length - 1 } //send_data
     
          
        ff(up)
        
      
        console.log("convert is complited")
      }
      
   
   
   
    })
    function ff(up){
      io.emit("send_data",up)
    }
   })
   process.on('close', (err) => { console.log({ message: err }) })
   



  res.send('upd')
})


    
  

app.get("/", (req, res) => {

 
 


  res.render("index.ejs");
});

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


server.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
