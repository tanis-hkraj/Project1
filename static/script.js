// document.getElementById('prediction-form').addEventListener('submit', function(event) {
//     event.preventDefault();
//     var movieName = document.getElementById('movie_name').value;
//     fetch('/predict', {
//         method: 'POST',
//         body: new URLSearchParams({ movie_name: movieName }),
//         headers: {
//             'Content-Type': 'application/x-www-form-urlencoded'
//         }
//     })
//     .then(response => response.json())
//     .then(data => {
//         var recommendations = data.movies.join('<br>');
//         document.getElementById('recommendations').innerHTML = '<h2>Recommended Movies:</h2>' + recommendations;
//     })
//     .catch(error => console.error('Error:', error));
// });
document.getElementById('prediction-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var movieName = document.getElementById('movie_name').value;
    // Show loading animation
    document.getElementById('recommendations').innerHTML = '<div class="loader"></div>';
    fetch('/predict', {
        method: 'POST',
        body: new URLSearchParams({ movie_name: movieName }),
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
    .then(response => response.json())
    .then(data => {
        var recommendations = data.movies.join('<br>');
        document.getElementById('recommendations').innerHTML = '<h2>Recommended Movies:</h2>' + recommendations;
    })
    .catch(error => console.error('Error:', error));
});
document.addEventListener('DOMContentLoaded', function() {
    // Show initial message
    document.getElementById('recommendations').classList.add('initial-message');

    document.getElementById('prediction-form').addEventListener('submit', function(event) {
        event.preventDefault();
        var movieName = document.getElementById('movie_name').value;
        // Show loading animation
        document.getElementById('recommendations').innerHTML = '<div class="loader"></div>';
        fetch('/predict', {
            method: 'POST',
            body: new URLSearchParams({ movie_name: movieName }),
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
        .then(response => response.json())
        .then(data => {
            var recommendations = data.movies.join('<br>');
            document.getElementById('recommendations').innerHTML = '<h2>Recommended Movies:</h2>' + recommendations;
        })
        .catch(error => console.error('Error:', error));
    });
});
