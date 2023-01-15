const data_ni = sessionStorage.getItem('user');
const user_ni = JSON.parse(data_ni);
const namaTampil = document.getElementById('nama')

namaTampil.innerHTML = user_ni[0]["Nama"]

const form = document.getElementById('frm')
const nama = document.getElementById('name')
const hari= document.getElementById('hari')
const email = document.getElementById('email')
const nomor = document.getElementById('nomor')
const ikeluhan = document.getElementById('ikeluhan')
const meranti = document.getElementById('meranti')
const ulin = document.getElementById('ulin')
const bengkirai = document.getElementById('bengkirai')
const kapur = document.getElementById('kapur')
const gambar = document.getElementById('gambar')
const pria = document.getElementById('dot-1')
const wanita = document.getElementById('dot-2')
const validasiHuruf = /^[a-zA-Z ]+$/;

const dataForm = []	

// const box = document.querySelector('.checkbox:checked').value;
function save(){
    
}

form.addEventListener('submit', function(event){
    event.preventDefault()

    var checkbox = document.getElementsByClassName("checkbox");
    localStorage.setItem('program', checkbox.checked);
    if(nama.value.match(validasiHuruf)){
        dataForm.push({
            "Nama": nama.value,
            "Hari": hari.value,
            "Email": email.value,
            "Nomor": nomor.value,
            "Keluhan": ikeluhan.value,
            "Meranti": meranti.value,
            "Ulin": ulin.value,
            "Bengkirai": bengkirai.value,
            "Kapur": kapur.value,
            "Gambar": gambar.value,
            "Pria": pria.value,
            "Wanita": wanita.value
        })

        let dataUserString = JSON.stringify(dataForm);
        sessionStorage.setItem('dataUserKey', dataUserString);

        alert("Keluhan Anda Berhasil Dikirim")
        window.location.href = "keluhanisi.html"
    }else{
        alert("Masukkan data dengan benar")
    }
})