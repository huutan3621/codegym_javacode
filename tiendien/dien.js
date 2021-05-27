function cal(){
    let elt=+document.getElementById("elec_num").value;
    m = 2000 * elt;
    document.getElementById("result").innerHTML= m + " VND"
}