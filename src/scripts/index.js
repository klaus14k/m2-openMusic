function createCard(product){
        const productList = document.getElementById("productList")
        
        const card = document.createElement("li")
        const cardImg = document.createElement("img")
        const cardP = document.createElement("p")
        const cardH2 = document.createElement("h2")
        const cardSpan = document.createElement("span")
        const spanP = document.createElement("p")
        const spanButton = document.createElement("button")
        
        card.setAttribute("class","card")
        cardP.setAttribute("class","cardP")
        cardH2.setAttribute("class","cardH2")
        cardSpan.setAttribute("class","cardSpan")
        spanButton.setAttribute("class","spanButton")

        cardImg.src = `${product.img}`
        cardP.innerText = `${product.band} ${product.year}`
        cardH2.innerText = `${product.title}`
        spanP.innerText = `R$ ${product.price.toFixed(2)}`
        spanButton.innerText = "Comprar"
        
        cardSpan.append(spanP,spanButton)
        card.append(cardImg,cardP,cardH2,cardSpan)
        productList.appendChild(card)
        
        return card
}

const renderCard = (array) => {
    const productList = document.getElementById("productList")
    productList.innerHTML = ""
    array.forEach(card => createCard(card))
}
renderCard(products)

const renderButtons = (array) => {
    const genreList = document.getElementById("genreList")
    array.forEach(category => {
        const listItem = document.createElement("li")
        const item = document.createElement("button")

        item.setAttribute("class","genreButton")

        item.innerText = `${category}`

        listItem.appendChild(item)
        genreList.appendChild(listItem)
    })
    return genreList
}
renderButtons(categories)

const eventsToElements = (categoriesArray, productsArray) => {
    const buttons = document.querySelectorAll(".genreButton")
    const inputRange = document.querySelector("#inputRange")
    const inputRangeVisible = document.querySelector("#irValue")

    let filteredArray = productsArray
    let buttonIndex = 0
    let inputValue = inputRange.value
    
    buttons[0].classList.add("pressed")
    buttons.forEach(button => {
        button.addEventListener("click", (e) => {
            const buttonText = e.target.innerText
            buttonIndex = categoriesArray.indexOf(buttonText)
            if (buttonIndex === 0){
                filteredArray = productsArray.filter(product => product.price <= inputValue)
            }
            else {
                filteredArray = productsArray.filter(product => product.category === buttonIndex && product.price <= inputValue)
            }
            inputRangeVisible.innerText = parseFloat(inputValue).toFixed(2)
            renderCard(filteredArray)
            
            if (button.classList.contains("pressed")){
                button.classList.remove("pressed")
                buttons[0].click()
            }
            else {
                buttons.forEach((button) => {
                    button.classList.remove("pressed")
                })
                button.classList.add("pressed")
            }
        })
    })

    inputRangeVisible.innerText = "--.--"
    inputRange.addEventListener("input", () => {
        inputValue = inputRange.value
        if (buttonIndex === 0){
            filteredArray = productsArray.filter(product => product.price <= inputValue)
        }
        else {
            filteredArray = productsArray.filter(product => product.category === buttonIndex && product.price <= inputValue)
        }
        inputRangeVisible.innerText = parseFloat(inputValue).toFixed(2)
        renderCard(filteredArray)
    })
}
eventsToElements(categories, products)