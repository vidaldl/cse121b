document.querySelector("#getItems").addEventListener('click', function() {
    let token = document.querySelector("#token").value;

    let todoItems = {};

    getTonightItems(todoItems, token);
})


function getTonightItems(todoItems, token) {
    var data = null;

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
    if (this.readyState === 4) {
        const terms = [];
    if (xhr.status == 200) {
        var responseData = JSON.parse(this.responseText)

        /** Separate body into word and definition **/

        console.log(responseData);

    } else {
        console.log("There was an error with the request");
    }
    //document.write("some more text");
    }
    });

    xhr.open("GET", "https://byui.instructure.com:443/api/v1/users/self/todo", true);   // XXXXXX is correct course ID

    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("Accept", "application/json");
    xhr.setRequestHeader("cache-control", "no-cache");
    xhr.setRequestHeader('Authorization', 'Bearer ' + token);
    // Send HTTPS request
    xhr.send(data);
}


    


