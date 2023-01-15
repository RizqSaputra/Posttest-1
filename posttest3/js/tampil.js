const data_ni = sessionStorage.getItem('user')
const user_ni = JSON.parse(data_ni)
const namaTampil = document.getElementById('nama')

namaTampil.innerHTML = user_ni[0]["Nama"]

const dataForm = sessionStorage.getItem('dataUserKey')
const userForm = JSON.parse(dataForm)

const form = document.getElementById('frm')
const nama = document.getElementById('name')
const hari= document.getElementById('hari')
const email = document.getElementById('email')
const nomor = document.getElementById('nomor')
const keluhan = document.getElementById('keluhan')
const meranti = document.getElementById('meranti')
const ulin = document.getElementById('ulin')
const bengkirai = document.getElementById('bengkirai')
const kapur = document.getElementById('kapur')
const gambar = document.getElementById('gambar')
const jenis = document.getElementById('jenis-kelamin')

nama.innerHTML = ": " + userForm[0]["Nama"]
hari.innerHTML = ": " + userForm[0]["Hari"]
email.innerHTML = ": " + userForm[0]["Email"]
nomor.innerHTML = ": " + userForm[0]["Nomor"]
keluhan.innerHTML = ": " + userForm[0]["Keluhan"]
meranti.innerHTML = "  - " + userForm[0]["Meranti"]
ulin.innerHTML = "- " + userForm[0]["Ulin"]
bengkirai.innerHTML = "  - " + userForm[0]["Bengkirai"]
kapur.innerHTML = "  - " + userForm[0]["Kapur"]
jenis.innerHTML = ": " + userForm[0]["Wanita"]
jenis.innerHTML = ": " + userForm[0]["Pria"]
gambar.innerHTML = ": "+ userForm[0]["Gambar"]

var span = document.createElement('span');
  span.innerHTML = '<img class="thumb" src="' + userForm[0]["Gambar"] + '"/>';
  document.getElementById('gambar').insertBefore(span, null);