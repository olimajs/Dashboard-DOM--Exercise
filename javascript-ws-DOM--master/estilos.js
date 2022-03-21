let h1 = document.querySelector('h1');

console.log(h1);

h1.style.backgroundColor = 'purple';

console.log(h1.className);
console.log(h1.classList);

h1.classList.add('new-class')
h1.classList.remove('bg-violet');
// classList.toggle