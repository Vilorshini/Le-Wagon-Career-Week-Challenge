// fetch information from api url
const footer = document.querySelector(".footer")
const stations = document.querySelector(".radio");

fetch("https://teclead.de/recruiting/radios")
  .then(response => response.json())
  .then((data) => {
      // interate through array from hash 
      data.radios.map(radio => {
        
        const radioTag = `
        <div class="toggle">
            <div class="radio-info">
            <button>${radio.name}</button>
                <p>${radio.frequency}</p>
            </div>

            <div class="img-display">
                <i class="fas fa-minus-circle"></i>
                <img src="${radio.image}" alt="">
                <i class="fas fa-plus-circle"></i> 
            </div>
        </div>`;

        const footerdisplay =
        `<div class="footer" >
        <h4> Currently Playing</h5>
        <p>${radio.name}</p>
        </div>`;

            stations.insertAdjacentHTML("beforeend", radioTag);
            footer.insertAdjacentHTML("beforeend", footerdisplay);
        
        // const form = document.querySelector('.radio');
        
        // form.addEventListener('click', (event) => {
        // event.preventDefault(); 
        // const input = event.currentTarget.querySelector('.form-control');
        // results.innerHTML = '';
        // searchMovies(input.value);
        // });
    });
   
});


  // collect radio name , frequency and img
  //on click display radio station details (event listener)

const button = document.querySelectorAll('.radio');

button.forEach((button) =>{
      button.addEventListener('click', (event) =>{

      })
})
