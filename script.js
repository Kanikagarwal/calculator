let string = "";
let box = document.querySelectorAll(".box");
Array.from(box).forEach(e => {
    e.addEventListener("click",function () {
        if(this.innerText == "="){
            string = eval(string);
            document.querySelector(".result").value = string ;

        }
        else if(this.innerText == "x"){
            this.value = "*";
            string = eval(string);
            document.querySelector(".result").value = string ;
        }
        else{
            string = string + this.innerText;
            document.querySelector(".result").value = string ;
            
        }
    })
})



document.querySelector(".clear").addEventListener("click",function () {
    string = "";
    document.querySelector(".result").value = string;
    
})

