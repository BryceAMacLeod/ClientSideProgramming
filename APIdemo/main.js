(function(){

    let myFunction = function() { return "hello"};
    let myFunction2 = () => "hello"; // arrow functions

    // METHOD 1 - AJAX: XMLHttpRequest - DO NOT USE
    const xhttp = new XMLHttpRequest(); // Main T

    xhttp.onload = function() { // MT
        // second T
        var myObjects = JSON.parse(this.responseText);

        document.querySelector("#demo").innerHTML = "<ul>";
       for(let i = 0; i < myObjects.length; i++) {
           //document.querySelector("#demo").innerHTML += "<li>" + myObjects[i].id + " - " + myObjects[i].title +"</li>";
       }
        document.querySelector("#demo").innerHTML += "</ul>";
        
    }
    
    //xhttp.open("GET","https://jsonplaceholder.typicode.com/posts",true); // MT
    //xhttp.send(); // MT

    // METHOD 2 - jQuery - DO NOT USE
    $(document).ready(function(){
        $("button").click(function(){
          $.ajax({url: "https://jsonplaceholder.typicode.com/albums", success: function(result){
            
            let outputHTML = '';

            outputHTML = '<ul>';
            result.forEach(function(element){
                outputHTML += "<li>" + element.id + ' - ' + element.title + "</li>";
            });
            outputHTML += "</ul>";

            $("#div1").html(outputHTML);
          }});
        });
      });

    // METHOD 3 - FETCH API - USE
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(data => console.log(data));

    // following is equivalent to above
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(function(response) {
        return response.json()
    })
    .then(function(data){
        console.log(data)
    })
    
})();