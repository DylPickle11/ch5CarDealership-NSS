const API = {
    getcars: () => {
        return fetch("http://localhost:3000/cars")
            .then(response => response.json())
    }
}

API.getcars().then(cars => {
    /*
    Your job is to produce the following reports for
    the dealership based on their total 2017 sales.
     */

    //Total profit for 2017

    //In which month did they sell the most cars?
    //Which salesperson sold the most cars?
    //Which salesperson made the most profit?
    //Which model was the most popular?
    //Which bank provided the most loans to our customers?
    //In which month did zero cars get sold?



});