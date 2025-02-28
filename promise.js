function hi(){
  let p=new Promise(function (resolve){
    setTimeout(function(){
      resolve("hellloooo")
    },3000)
  })
  return p
}

async function ye(){
 const h= await hi()
console.log("im here");

}

ye()