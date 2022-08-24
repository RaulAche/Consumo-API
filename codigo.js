const apiUrl = "https://breakingbadapi.com/api/"

const fakeQuotes = [
    {
        quote: "Esse duis ex ipsum ullamco quis tempor anim id sunt fugiat non.",
        author: "Nombre de autor 1",
        id: 1
    },
    {
        quote: "Exercitation dolor adipisicing velit eu.",
        author: "Nombre de autor 2",
        id: 2
    },
    {
        quote: "Laboris amet nisi ea laboris irure anim consequat minim labore consequat deserunt culpa.",
        author: "Nombre de autor 3",
        id: 3
    },
    {
        quote: "Veniam dolor Lorem deserunt magna magna.",
        author: "Nombre de autor 4",
        id: 4    
    }
]

function doQuery( url, displayFunction ){

    const request = fetch(apiUrl + url)
    
    request.then( function(response) {
        console.log("response", response)

        response.json().then( function(data){
            console.log("data", data)
            
            if( typeof displayFunction == "function"){
            
            displayFunction(data)
            
            }
        })
    })

    console.log("request", request )

}

function displayQuotes( data ) {

    console.log("display",data);

    const body = document.querySelector("body")
    
    data.forEach(function(quote){

        const body = document.querySelector("body")
        
        const quoteBox = createQuoteHTML(quote)
        
        body.append(quoteBox)

    })
}

function createQuoteHTML( quote ) {

    const quoteBox = document.createElement("blockquote")
    const textBox = document.createElement("p")
    const authorBox = document.createElement("p")

    textBox.innerHTML = quote.quote
    authorBox.innerHTML = quote.author

    quoteBox.append( textBox )
    quoteBox.append( authorBox )

    quoteBox.classList.add("quote")


    return quoteBox

}


doQuery("quotes", displayQuotes)
doQuery("episodes")
doQuery("characters")



