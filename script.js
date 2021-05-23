//1.create a XHR object
var req = new XMLHttpRequest();
//2.open a connection
req.open('GET','https://restcountries.eu/rest/v2/all',true);//GET - recieve information which is already there in server,true-if any part of data missing the other part need not affect the rest part of the execution of program
//3.send the connection or request
req.send();
//4.onload is an event,once the data recieved successfully from the server , we need to perform some task that operation is done using this function

req.onload=function(){
   var data=JSON.parse(this.response);//data recieving from server will be of string format to convert it into a json object , this.response-the response recieving from server
//user defined statements

var country =[]
var lat =[]
var long =[]

for(i=0;i<data.length;i++){
  country[i] = data[i].name;
  lat[i]=data[i].latlng[0];
  long[i]=data[i].latlng[1];
  weatherdata(country[i],lat[i],long[i]);
  
 
}
}

function weatherdata(country,lat,lon){
  
   
   var request = new XMLHttpRequest();
   var url='https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lon+'&appid=c9fc1affd0f5bee2e9d5e6c02a0364b2';
   request.open('GET',url,true);
   request.send();
   request.onload=function(){
      var temperature=JSON.parse(this.response);
   
      var temp=temperature.main.temp;
      console.log(country+" "+temp);
      
   }
}