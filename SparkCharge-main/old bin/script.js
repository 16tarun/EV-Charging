const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const square = entry.target.querySelector('.title');

    if (entry.isIntersecting) {
      square.classList.add('fade');
      return; // if we added the class, exit the function
    }

    // We're not intersecting, so remove the class!
    square.classList.remove('fade');
  });
});

observer.observe(document.querySelector('.header'));

function visible(){
  document.querySelector('.signup-form').classList.toggle("visible")
  document.querySelector('.content').classList.toggle("blur")
  //preventDefault();
}
function visible1(){
  document.querySelector('.login-form').classList.toggle("visible")
  document.querySelector('.content').classList.toggle("blur")
  //preventDefault();
}
function toggleDark(){
  document.querySelector('.light').classList.toggle("dark")
  // document.querySelector('.box-content').classList.toggle("dark")
  // document.querySelector('.light')

  //preventDefault();
}