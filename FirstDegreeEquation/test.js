let a = +prompt("Nhap a:");
let b = +prompt("Nhap b:");

if(a==0){
    if(b==0){
        alert("Phuong trinh vo so nghiem");
    } else{
        alert("Phuong trinh vo nghiem");
    }
}else{
    x=-b/a;
    alert("Phuong trinh co nghiem:" +x);
}