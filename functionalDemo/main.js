(function () {
    var myObject = {
        name:"michael",
        address: {
            street:"123 main street"
        }
    }

    console.log(myObject["address.street"]);
})();