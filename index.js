function displayAllChar(){
fetch ("http://localhost:3000/characters")
    .then((resp) => resp.json())
    .then (data => renderChar(data))
}
displayAllChar()


const charURL = 'http://localhost:3000/characters'
    const addCharForm = document.querySelector('#add-character-form')
    const editCharForm = document.querySelector('#edit-character-form')

function renderChar(charArr){
    const charCard = document.querySelector("#character-container")
    charCard.innerHTML = ""

    charArr.forEach((charObj) => {
        const charCardDiv = document.createElement('div')
        charCardDiv.className = "character-card"

        charCardDiv.addEventListener('mouseover', changeColor)
        function changeColor(){
            charCardDiv.style.color = 'blue'
        }

        charCardDiv.addEventListener('mouseout', changeColorBack)
        function changeColorBack(){
            charCardDiv.style.color = 'black'
        }
        
        const img = document.createElement('img')
        const h3 = document.createElement('h3')
        const p = document.createElement('p') 
        const p2 = document.createElement('p')
        const editCharBtn = document.createElement('button')

        img.className = "character-img"
        img.src = charObj.image
        h3.textContent = charObj.name
        p.textContent = charObj.finisher1
        p2.textContent = charObj.finisher2
        editCharBtn.textContent = "Edit Fighter"
        editCharBtn.id = charObj.id
    
        charCardDiv.append(img, h3, p, p2, editCharBtn,)
        charCard.appendChild(charCardDiv)
        
        editCharBtn.addEventListener('click',(e) => {
            const charFound = charArr.find(char => char.id === e.target.id)
            editCharForm.dataset.id = e.target.id
            editChar(charFound)
        })
    })
}

    //! Needs param to be the character being edited
    function editChar(charObjToEdit) {
        editCharForm.name.value = charObjToEdit.name
        editCharForm.image.value = charObjToEdit.image
        editCharForm.finisher1.value = charObjToEdit.finisher1
        editCharForm.finisher2.value = charObjToEdit.finisher2
    }

    editCharForm.addEventListener('submit', e => {
        e.preventDefault()

       const updatedChar = {
        name : e.target.name.value,
        image : e.target.image.value,
        finisher1 : e.target.finisher1.value,
        finisher2 : e.target.finisher2.value
       }

       fetch(charURL + "/" + editCharForm.dataset.id, {
        method : "PATCH", 
        headers : {
            "Content-type" : "application/json"
        },
        body : JSON.stringify(updatedChar)
       })
       .then(res => res.json())
       .then(data => {
        editCharForm.name.value = ""
        editCharForm.image.value = ""
        editCharForm.finisher1.value = ""
        editCharForm.finisher2.value = ""
        displayAllChar()
       })


    })
    
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
        .then(data => displayAllChar())

        addCharForm.name.value = ""
        addCharForm.image.value = ""
        addCharForm.finisher1.value = ""
        addCharForm.finisher2.value = ""
    }
    

