document.addEventListener('DOMContentLoaded' ,()=>{
    document.querySelector("#form").onsubmit=()=>{
        var data = document.querySelector("#data").value;
        const request = new XMLHttpRequest();
        request.open("POST",'/exchange');
        request.onload = ()=>{
            var raw= JSON.parse(request.responseText);
            if(raw.success)
                console.log(raw);
            else
                console.log("Error");    

        }

       const sent =new FormData();
       sent.append("target",data);
       request.send(sent);
       return false; 
    }
})