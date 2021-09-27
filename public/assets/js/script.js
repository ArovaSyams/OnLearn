
// Single-Kursus
const penjelasanBtn = document.getElementById('penjelasan-btn');
const catatanBtn = document.getElementById('catatan-btn');
const forumBtn = document.getElementById('forum-btn');

const catatan = document.getElementById('catatan');
const penjelasan = document.getElementById('penjelasan');
const forum = document.getElementById('forum');

const isiPesan = document.getElementById('isi-pesan');

penjelasanBtn.addEventListener('click', function () {
    penjelasanBtn.classList.add('border-indigo-900');
    penjelasanBtn.classList.add('text-indigo-900');    
    catatanBtn.classList.remove('border-indigo-900');
    catatanBtn.classList.remove('text-indigo-900');   
    forumBtn.classList.remove('border-indigo-900');
    forumBtn.classList.remove('text-indigo-900');   
    
    penjelasan.classList.remove('hidden');
    catatan.classList.add('hidden');
    forum.classList.add('hidden');
    isiPesan.classList.add('hidden');
});

catatanBtn.addEventListener('click', function() {
    catatanBtn.classList.add('border-indigo-900');
    catatanBtn.classList.add('text-indigo-900');   
    penjelasanBtn.classList.add('border-white');    
    penjelasanBtn.classList.remove('border-indigo-900');
    penjelasanBtn.classList.remove('text-indigo-900');    
    forumBtn.classList.remove('border-indigo-900');
    forumBtn.classList.remove('text-indigo-900');   
    
    catatan.classList.remove('hidden');
    penjelasan.classList.add('hidden');
    forum.classList.add('hidden');
    isiPesan.classList.add('hidden');
});

forumBtn.addEventListener('click', function() {
    forumBtn.classList.add('border-indigo-900');
    forumBtn.classList.add('text-indigo-900');   
    penjelasanBtn.classList.add('border-white');    
    catatanBtn.classList.remove('border-indigo-900');
    catatanBtn.classList.remove('text-indigo-900');   
    penjelasanBtn.classList.remove('border-indigo-900');
    penjelasanBtn.classList.remove('text-indigo-900');    
    
    forum.classList.remove('hidden');
    catatan.classList.add('hidden');
    penjelasan.classList.add('hidden');
    isiPesan.classList.add('hidden');
});

// Catatan

const buatCatatan = document.getElementById('buat-catatan');
const batalCatatan = document.getElementById('batal-catatan');
const bodyCatatan = document.getElementById('body-catatan');
const simpanCatatan = document.getElementById('simpan-catatan');
// const formCatatan = document.getElementById('form-catatan');


buatCatatan.addEventListener('click', function() {
    buatCatatan.classList.add('hidden')
    bodyCatatan.classList.remove('hidden');
    // formCatatan.classList.remove('h-10');
    // formCatatan.classList.add('h-32');
});
batalCatatan.addEventListener('click', function() {
    buatCatatan.classList.remove('hidden')
    bodyCatatan.classList.add('hidden');
});


// TANYA JAWAB FORUM

const judulKomen = document.getElementById('judul-komen');

judulKomen.addEventListener('click', function() {
    forum.classList.add('hidden');
    isiPesan.classList.remove('hidden');
});

// card video kursus
const cardModul = document.querySelector('.card-modul');
const dropIcon = document.querySelector('.drop-icon');
const toggle = document.querySelector('.toggle');
const cardModul2 = document.querySelector('.card-modul-2');
const dropIcon2 = document.querySelector('.drop-icon-2');
const toggle2 = document.querySelector('.toggle-2');
const cardModul3 = document.querySelector('.card-modul-3');
const dropIcon3 = document.querySelector('.drop-icon-3');
const toggle3 = document.querySelector('.toggle-3');
const cardModul4 = document.querySelector('.card-modul-4');
const dropIcon4 = document.querySelector('.drop-icon-4');
const toggle4 = document.querySelector('.toggle-4');
const cardModul5 = document.querySelector('.card-modul-5');
const dropIcon5 = document.querySelector('.drop-icon-5');
const toggle5 = document.querySelector('.toggle-5');



dropIcon.addEventListener('click', function() {
    toggle.classList.toggle('transform');
    toggle.classList.toggle('rotate-180');
    cardModul.classList.toggle('h-60');
});
dropIcon2.addEventListener('click', function() {
    toggle2.classList.toggle('transform');
    toggle2.classList.toggle('rotate-180');
    cardModul2.classList.toggle('h-44');
});
dropIcon3.addEventListener('click', function() {
    toggle3.classList.toggle('transform');
    toggle3.classList.toggle('rotate-180');
    cardModul3.classList.toggle('h-96');
});
dropIcon4.addEventListener('click', function() {
    toggle4.classList.toggle('transform');
    toggle4.classList.toggle('rotate-180');
    cardModul4.classList.toggle('h-44');
});
dropIcon5.addEventListener('click', function() {
    toggle5.classList.toggle('transform');
    toggle5.classList.toggle('rotate-180');
    cardModul5.classList.toggle('h-60');
});

