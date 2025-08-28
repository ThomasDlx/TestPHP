document.addEventListener('DOMContentLoaded', function() {
        
    document.getElementById('searchForm').addEventListener('submit', function(e) {
        e.preventDefault();

        let formData = new FormData(this);

        fetch('api.php', { method: 'POST', body: formData })
            .then(res => res.json())
            .then(data => {
                let resultsDiv = document.getElementById('results');
                resultsDiv.innerHTML = '';

                if (data.results && data.results.length > 0) {
                    data.results.forEach(movie => {
                        let col = document.createElement('div');
                        col.classList.add('col-md-4', 'mb-4');

                        col.innerHTML = `
                            <div class="card h-100 shadow-sm">
                                ${movie.poster_path ? `<img src="https://image.tmdb.org/t/p/w300${movie.poster_path}" class="card-img-top" alt="Poster">` : ""}
                                <div class="card-body">
                                    <h5 class="card-title">${movie.title}</h5>
                                    <p class="card-text">${movie.overview || "Pas de description disponible"}</p>
                                    <p><strong>Date de sortie :</strong> ${movie.release_date || "Inconnue"}</p>
                                </div>
                            </div>
                        `;
                        resultsDiv.appendChild(col);
                    });
                } else {
                    resultsDiv.innerHTML = "<p class='text-muted'>Aucun résultat trouvé.</p>";
                }
            });
    });
});
