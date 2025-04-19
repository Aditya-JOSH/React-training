// ● Using promises - write a function that fetches data from an API endpoint (GET
//     https://reqres.in/api/users ). Log the data into the console once it is received 

//Answer:

function fetchData() {
    fetch('https://reqres.in/api/users')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log("Received Data:", data);
        })
        .catch(error => {
            console.error("Error fetching data:", error);
        });
}

fetchData();

//
// Output:

// {page: 1, per_page: 6, total: 12, total_pages: 2, data: Array(6), …}
// data
// : 
// (6) [{…}, {…}, {…}, {…}, {…}, {…}]
// page
// : 
// 1
// per_page
// : 
// 6
// support
// : 
// {url: 'https://contentcaddy.io?utm_source=reqres&utm_medium=json&utm_campaign=referral', text: 'Tired of writing endless social media content? Let Content Caddy generate it for you.'}
// total
// : 
// 12
// total_pages
// : 
// 2
// [[Prototype]]
// : 
// Object