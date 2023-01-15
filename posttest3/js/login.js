try {
    let masuk = document.getElementById("masuk")
    masuk.onclick = login
} catch (error) {
    
}
console.log(sessionStorage)

function login(e){
    e.preventDefault()
    
    const dataLog = []
    const userKey = sessionStorage.getItem('user');
    const objUser = JSON.parse(userKey);

    let loginNama = document.getElementById("nama")
    let loginEmail = document.getElementById("email")
    let loginPass = document.getElementById("pass")

    for (let i = 0; i <= objUser.length - 1; i++){
        if (loginNama.value == objUser[i].Nama && loginEmail.value == objUser[i].Email && loginPass.value == objUser[i].Pass){
            dataLog.push({
                Nama: objUser[i]["Nama"]
            })
            console.log("Berhasil login")
            alert("Berhasil Login")
            window.location.href = "beranda.html"
        } else if (i == objUser.length - 1){
            console.log("Gagal Login")
            alert("Duh tidak bisa masuk")
        }else{
            console.log("Gagal Login")
            alert("Duh tidak bisa masuk")
        }
    }
}


