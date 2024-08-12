function fetchCustom(url, download){
    console.log("starting donwloading")
    setTimeout(function process(){
        console.log("download completed");
        let response ="data";
        download(response)
    },3000)
    

}

const downlaod = (res)=>{
    console.log(res)
    
}
const writeFile =  ()=>{
     
}

fetchCustom( "www.google.com",download)