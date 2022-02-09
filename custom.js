// function myFunction(){
//     var url="";
//     var response=Ur1FetchApp. fetch(url);
//     var json=response.getContentText();
//     var data=JSON.parse (json);
//     Logger.log(data);
// }

// function myFunction(){
//     var url="https://my.api.mockaroo.com/first_scheme.json?key=7d463ae0";
//     var response = Ur1FetchApp.fetch(url);
//     var json = response.getContentText();
//     var data = JSON.parse(json);
//     Logger.log(data);
// }
// myFunction();


function getIt(){
    fetch('https://fakestoreapi.com/products')
                .then(res=>res.json())
                .then(json=>console.log(json))
                .then(json)
}
getIt();


