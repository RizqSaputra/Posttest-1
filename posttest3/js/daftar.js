console.log(sessionStorage)
const form = document.getElementById('frm')
const daftarNama = document.getElementById("nama")
const daftarEmail = document.getElementById("email")
const daftarPass = document.getElementById("pass")
const dataUser = []

daftar.onclick = function(event){
    event.preventDefault()

    if(daftarPass.value < 8){
        console.log("Password Kurang Dari 8 Huruf")
        alert("Password kurang dari 8 Huruf")
    }else{
    dataUser.push({
        "Nama": daftarNama.value,
        Email: daftarEmail.value,
        Pass: daftarPass.value 
    })

    let UbahString = JSON.stringify(dataUser);
    sessionStorage.setItem('user', UbahString);
    console.log("Berhasil daftar")
    alert("Berhasil daftar")    
    window.location.href = "login.html"
}}
