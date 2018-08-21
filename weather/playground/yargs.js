const yargs=require('yargs');
const axios=require('axios');
//const argv=yargs.argv;
//const prc =process.argv;
//console.log("yargs : ",argv.body); //{ _:[cmd] ,flag:[data] }
const ar=yargs
.options({
    address:{
        demand:true,
        alias:'a',
        description:"address"   
    },
    temp:{
        description:"unit of temp",
        alias:"t",
        string:true
    }
})
.help()
.argv;
axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${ar.address}`)
.then((response)=>{
    const lat=response.data.results[0].geometry.location.lat;
    const lng=response.data.results[0].geometry.location.lng;
    const uri= `https://api.darksky.net/forecast/f6ba5641cc7962e78edab46fff541d90/${lat},${lng}`;
    console.log("Address : "+response.data.results[0].formatted_address);
    return axios.get(uri);
})
.then((response)=>{
   console.log("Current Temperature : ");
   if(ar.t=='C'){
    const tem =(response.data.currently.temperature -32)*0.55;
    console.log(tem+" C");}
    else
    console.log(response.data.currently.temperature+" F" );
})
.catch((error)=>{console.log("Error in connecting to API")});
//console.log(ar);
