// Your code here
document.addEventListener('DOMContentLoaded',() => {
    const base1Url = 'http://localhost:3000/films/1'
    fetch(base1Url)
    
      .then(res => res.json())
      .then(movieData => {
        // Update movie details in the DOM
        const poster = document.getElementById('poster');
        poster.src = movieData.poster;
  
        const title= document.getElementById('title');
        title.innerText = movieData.title;
  
        const runtime = document.getElementById('runtime');
        runtime.innerText = `${movieData.runtime} minutes`;
  
        const Description = document.getElementById('film-info');
        Description.innerText = movieData.description;
  
        const showtime = document.getElementById('showtime');
        showtime.innerText = movieData.showtime;
        
       
        
    
        })
        //film details
        function showFilmDetails(filmId) {
            fetch(`baseUrl${filmId}`)
                .then(response => response.json())
                .then(film => {
                    // Display film details
                    document.getElementById('title').innerText = film.title;
                    document.getElementById('runtime').innerText = `${film.runtime} minutes`;
                    document.getElementById('film-info').innerText = film.description;
                    document.getElementById('showtime').innerText = film.showtime;


                    const availableTickets = film.capacity - film.tickets_sold;
                    document.getElementById('ticket-num').innerText = `${availableTickets} remaining tickets`;
                    document.getElementById('poster').src = film.poster;
    
                    // Update Buy Ticket button based on ticket availability
                    const buyTicketButton = document.getElementById('buy-ticket');
                    if (availableTickets === 0) {
                        buyTicketButton.innerText = 'Sold Out';
                        buyTicketButton.disabled = true;
                    } else {
                        buyTicketButton.innerText = 'Buy Ticket';
                        buyTicketButton.disabled = false;
                    }
                })

                .catch(error => console.error('Error fetching film details:', error));
        }
    //add films 
    const baseUrl ='http://localhost:3000/films'

function fetchFilms() {
    fetch(baseUrl)
        .then(res => res.json())
        .then(films => {
            // Populate films list
            const filmsList = document.getElementById('films');
            filmsList.innerHTML = '';
            films.forEach(film => {
                const liFilm = document.createElement('li');
                liFilm.classList.add('film', 'item');
                liFilm.innerText = film.title;
                if (film.tickets_sold === film.capacity) {
                    liFilm.classList.add('sold-out');
                }
                filmsList.append(liFilm);
            
            let deleteButton = document.createElement('button')
            deleteButton.innerText = 'Delete'
            deleteButton.classList = 'ui blue button'
            deleteButton.addEventListener('click', () => {
                liFilm.remove(deleteButton)
            })
            liFilm.append(deleteButton)

            })
        
        })


}
fetchFilms()






   


})
