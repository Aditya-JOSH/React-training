// ● Create a promise that makes a fetch call, but resolves with the data only 2 seconds after
// the data has been received in the fetch.
// ● Complete the above tasks with async/await.


// Answer:
async function fetchDataWithDelay() {
    try {
        const response = await fetch('https://reqres.in/api/users');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        console.log("Received Data after delay:", data);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}
fetchDataWithDelay();

//Output:

// client.js:1 Received Data after delay: {page: 1, per_page: 6, total: 12, total_pages: 2, data: Array(6), …}