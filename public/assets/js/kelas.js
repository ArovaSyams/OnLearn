// Filter Kelas 

const dropAlur = document.getElementById('dropdown-alur');
const filterAlur = document.getElementById('filter-alur');
const dropTingkat = document.getElementById('dropdown-tingkat');
const filterTingkat = document.getElementById('filter-tingkat');
const dropRating = document.getElementById('dropdown-rating');
const filterRating = document.getElementById('filter-rating');

dropAlur.addEventListener('click', function() {
    dropAlur.classList.toggle('transform');
    dropAlur.classList.toggle('rotate-180');
    filterAlur.classList.toggle('h-40');
});
dropTingkat.addEventListener('click', function() {
    dropTingkat.classList.toggle('transform');
    dropTingkat.classList.toggle('rotate-180');
    filterTingkat.classList.toggle('h-32');
});
dropRating.addEventListener('click', function() {
    dropRating.classList.toggle('transform');
    dropRating.classList.toggle('rotate-180');
    filterRating.classList.toggle('h-48');
});