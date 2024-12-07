document.getElementById('searchBtn').addEventListener('click', () => {
    const artist = document.getElementById('artist').value;
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = ''; // Clear previous results

    if (!artist) {
        alert('Please enter an artist name');
        return;
    }

    const apiUrl = `https://theaudiodb.com/api/v1/json/{APIKEY}/artist.php?i=112024
${artist}`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            if (data.artists) {
                data.artists.forEach(artist => {
                    const artistDiv = document.createElement('div');
                    artistDiv.classList.add('artist');

                    artistDiv.innerHTML = `
                        <h2>${artist.strArtist}</h2>
                        <img src="${artist.strArtistLogo}" alt="${artist.strArtist}" />
                        <p>Genre: ${artist.strGenre}</p>
                        <p>Country: ${artist.strCountry}</p>
                        <p>Description: ${artist.strBiographyEN ? artist.strBiographyEN.substring(0, 100) + '...' : 'No description available'}</p>
                    `;
                    resultsDiv.appendChild(artistDiv);
                });
            } else {
                resultsDiv.innerHTML = '<p>No results found</p>';
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            resultsDiv.innerHTML = '<p>Error fetching data. Please try again later.</p>';
        });
});