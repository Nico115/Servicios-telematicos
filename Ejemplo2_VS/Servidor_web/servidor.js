const express = require("express");
const app = express();
const puerto= 5000;
const path = require('path');
const bodyParser = require('body-parser');

var nombre= []
var genero= []
var telefono= []
var edad = []
var i=0
app.use(bodyParser.urlencoded({extended:false}));
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'/formulario.html'));
});
app.post('/',(req,res)=>{    
    nombre.push(req.body.name);    
    edad.push(parseInt(req.body.edad,10));  
    genero.push(req.body.genero);
    telefono.push(parseInt(req.body.telefono,10)); 
    i++    
              
});

app.get('/all',(req,res)=>{
    res.send("Datos exportados a la consola de VSC")   
    if(i<=10){  
        for(j=1;j<=i;j++){
        console.log("Datos del usuario #"+j)
        console.log("Nombre:"+nombre[j-1]+". Edad:"+edad[j-1]+". Genero:"
        +genero[j-1]+". Telefono:"+telefono[j-1])}}
    else{
        console.log("No se permite ingresar más de 10 usuarios")}
});
app.get('/names',(req,res)=>{ 
    let cadena = ""  
    if(i<=10){
        for(j=1;j<=i;j++){
        cadena=cadena+"Usuario#"+j+": "+nombre[j-1]+"<br/>"        
    }
    res.send(cadena) 
}
    else{
        res.send("No se permite ingresar más de 10 usuarios")}
});
app.get('/names&gender',(req,res)=>{ 
    let cadena = ""  
    if(i<=10){
        for(j=1;j<=i;j++){
        cadena=cadena+"Usuario#"+j+": "+nombre[j-1]+",Genero "+genero[j-1]+"<br/>"
    }
    res.send(cadena) 
}
    else{
        res.send("No se permite ingresar más de 10 usuarios")}
});
app.get('/names&phone',(req,res)=>{
    res.send("Datos exportados a la consola de VSC")   
    if(i<=10){  
        for(j=1;j<=i;j++){
        console.log("Datos del usuario #"+j)
        console.log("Nombre:"+nombre[j-1]+". Telefono:"+telefono[j-1])}}
    else{
        console.log("No se permite ingresar más de 10 usuarios")}
});

app.listen(puerto,()=>{
    console.log("Servidor en ejecución");
})

