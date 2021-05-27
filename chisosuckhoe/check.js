function check_bmi(){
    let weight=+document.getElementById("weight").value;
    let height=+document.getElementById("height").value;
    bmi = weight / height ;
    
    if(bmi<18){
        document.getElementById("conclude").innerHTML="Gầy";
    }
    else if(bmi>=18 && bmi<=25){
        document.getElementById("conclude").innerHTML="Bình thường";
    }
    else if(bmi>25){
        document.getElementById("conclude").innerHTML="Bình thường";
    }
    else{
        document.getElementById("conclude").innerHTML="Xin hãy nhập lại";
    }
}

