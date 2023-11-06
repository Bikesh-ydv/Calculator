var string='';
for(var i=0;i<document.querySelectorAll("button").length; i++){
document.querySelectorAll("button")[i].addEventListener("click", fun1);
function fun1(event)
{

    if(event.target.innerHTML == '=')
    {
        string = eval(string);
        document.querySelector("input").value = string;
    }
    else if(event.target.innerHTML == 'AC'){
        string='';
        document.querySelector("input").value =string;
    }
    else if(event.target.innerHTML == 'DE'){
        string=string.slice(0,-1);
        document.querySelector("input").value =string;
    }
    else{
        string+=event.target.innerHTML;
    document.querySelector("input").value =string;
    
    }
}
}

