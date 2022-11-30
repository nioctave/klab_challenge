const item= [
    {name: 'Bike', price:100},
    {name: 'TV', price:200},
    {name: 'Album', price:10},
    {name: 'Book', price:5},
    {name: 'Phone', price:500},
    {name: 'Computer', price:1000}
];

function CheapestItem(arr){

    let lowPrice = arr[0].price;
    let LowName= arr[0].name;

    for(let i=0; i<arr.length; i++){
        
        if(arr[i].price<=lowPrice){

            lowPrice= arr[i].price;
            LowName=arr[i].name;
        }

    }
    return `The cheapest product is ${LowName}. it costs $${lowPrice}.`;
}

function ExpensiveItem(arr){

    let highPrice = arr[0].price;
    let highName= arr[0].name;

    for(let i=0; i<arr.length; i++){
        
        if(arr[i].price >= highPrice){

            highPrice= arr[i].price;
            highName=arr[i].name;
        }

    }
    return `The most expensive product is ${highName}. it costs $${highPrice}.`;
}

function TotalPrice(arr){
    let total = 0;

    for (let i=0; i<arr.length; i++){

        total += arr[i].price;

    }

    return `The total price combined is $${total}.`;
}

function TotalAboveTen(arr){
    let total = 0;

    for (let i=0; i<arr.length; i++){

        if (arr[i].price < 10)
            continue;

        else
            total += arr[i].price;
    }

    return `The total price of products above $10 is $${total}`;
}


console.log(CheapestItem(item));
console.log(ExpensiveItem(item));
console.log(TotalPrice(item));
console.log(TotalAboveTen(item));