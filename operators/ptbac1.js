let a = +prompt('Nhap vao so a:');
let b = +prompt('Nhap vao so b:');

if(a==0){
    if(b==0){
        document.write("Phuong trinh co vo so nghiem.");
    } else{
        document.write("Phuong trinh vo nghiem.");
    }
}else{
    x=-b/a;
    document.write("Phuong trinh co nghiem: " +x);
}