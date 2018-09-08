document.addEventListener('DOMContentLoaded' ,()=>{
    document.querySelector("#form").onsubmit=()=>{
        var data = document.querySelector("#data").value;
        const request = new XMLHttpRequest();
        request.open("POST",`/exchange/${data}`);
        request.onload = ()=>{
            var raw= request.responseText;
            console.log(raw);
        var data = document.querySelector("#data").value;
        }
       const sent =new FormData();
       sent.append("target",data);
       request.send(sent);
       return false; 
    }}
)