let hoten = prompt("Nhap ten sinh vien:");
let ly = +prompt("Nhap diem mon vat ly: ");
let hoa = +prompt("Nhap diem mon hoa hoc:");
let sinh = +prompt("Nhap diem mon sinh hoc:");

let tb = ( ly  +hoa + sinh ) / 3;

document.writeln("Ho va ten hoc sinh: ", hoten,"<p></p>");
document.write("Diem trung binh la: " +tb);