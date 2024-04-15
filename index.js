fetch ("http://localhost:3000/characters")
    .then((resp) => resp.json())
    .then (data => renderChar(data))

function renderChar(charArr){
    const charCard = document.querySelector("#character-container")

    charArr.forEach((charObj) => {
        const div = document.createElement('div')
        div.className = "character-card"
        
        const img = document.createElement('img')
        img.className = "character-img"
        let imgUrl = charObj.image
        img.src = imgUrl

        const h3 = document.createElement('h3')
        let charName = charObj.name
        h3.textContent = charName

        div.append(img, h3)

        charCard.appendChild(div)
    })
}


















// function renderCharacters(charArr) {
//     const ul = document.querySelector('ul')
//     charArr.forEach((charObj) => {
//         const li = document.createElement('li')

//         // grabs name from object and places it within <p> tag
//         const p = document.createElement('p')
//         let name = charObj.name
//         p.textContent = name
//         p.style.color = '#7a2d96'

//         // grabs image URL from object and sets it to <img> tag src
//         const img = document.createElement('img')
//         let imgURL = charObj.image
//         img.src = imgURL
//         img.style.margin = '5px'
//         img.style.border = 'solid 2px #7a2d96'

//         // combine DOM tree to render to screen
//         li.appendChild(p)
//         li.appendChild(img)
//         // li.append(p, img)

//         ul.append(li)

//     })
// }