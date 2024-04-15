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

const charURL = 'http://localhost:3000/characters'
    const addCharForm = document.querySelector('#add-character-form')
    const editCharForm = document.querySelector('#edit-character-form')
    
    addCharForm.addEventListener('submit', e => handleAddNewChar(e))
    
    
    function handleAddNewChar(e){
        e.preventDefault()
        
        const newCharObj = {
            name: e.target.name.value,
            image: e.target.image.value,
            wins: " ",
            loses: " ", 
            finisher1: e.target.finisher1.value,
            finisher2: e.target.finisher2.value
        }
    
        fetch(charURL, {
            method : 'POST',
            headers : {
                'Accept' : 'application/json',
                'content-type' : 'application/json'
            },
            body : JSON.stringify(newCharObj)
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }
    

    //! Needs param to be the character being edited
    function editChar(charObjToEdit) {
        editCharForm.name.value = charObjToEdit.name
        editCharForm.image.value = charObjToEdit.image
        editCharForm.finisher1.value = charObjToEdit.finisher1
        editCharForm.finisher2.value = charObjToEdit.finisher2
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