
document.querySelector("#getItems").addEventListener('click', function() {


    getRandomNames();
    
})



function getRandomNames() {
    let firstNames = fetch(`https://www.randomlists.com/data/names-surnames.json`);

    console.log(firstNames);
}

    
    


