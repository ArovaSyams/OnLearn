
const paket1 = document.getElementById('paket-1');
const paket2 = document.getElementById('paket-2');
const paket3 = document.getElementById('paket-3');
const paket4 = document.getElementById('paket-4');
const diskon1 = document.getElementById('diskon-1');
const diskon2 = document.getElementById('diskon-2');
const diskon3 = document.getElementById('diskon-3');
const diskon4 = document.getElementById('diskon-4');

paket1.addEventListener('click', function () {
    
})
paket2.addEventListener('click', function () {
    paket2.classList.toggle('text-white');
    paket2.classList.toggle('text-indigo-900');
    paket2.classList.toggle('bg-indigo-600');
    diskon2.classList.toggle('bg-indigo-200');
    diskon2.classList.toggle('text-white');

    paket1.classList.toggle('text-white');
    paket1.classList.toggle('text-indigo-900');
    paket1.classList.toggle('bg-indigo-600');
    diskon1.classList.toggle('bg-indigo-200');
    diskon1.classList.toggle('text-white');

    
})