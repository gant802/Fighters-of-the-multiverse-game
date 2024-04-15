function displayAllChar(){
    fetch ("http://localhost:3000/characters")
        .then((resp) => resp.json())
        .then (data => renderChar(data))
    }
    displayAllChar()
    function renderChar(charArr){
        const charCard = document.querySelector("#character-container")
        charCard.innerHTML = ""
    
        charArr.forEach((charObj) => {
            const div = document.createElement('div')
            div.className = "character-card"
    
            div.addEventListener('mouseover', changeColor)
            function changeColor(){
                div.style.color = 'blue'
            }
    
            div.addEventListener('mouseout', changeColorBack)
            function changeColorBack(){
                div.style.color = 'black'
            }
    
            const img = document.createElement('img')
            img.className = "character-img"
            let imgUrl = charObj.image
            img.src = imgUrl
    
            const h3 = document.createElement('h3')
            let charName = charObj.name
            h3.textContent = charName
    
            const p = document.createElement('p')
            let charFinisher = charObj.finisher1
            p.textContent = charFinisher
    
            const p2 = document.createElement('p')
            let charFinisher2 = charObj.finisher2
            p2.textContent = charFinisher2
    
            div.append(img, h3, p, p2)
    
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
            .then(data => displayAllChar())
        }
    //! Needs param to be the character being edited
        function editChar(charObjToEdit) {
            editCharForm.name.value = charObjToEdit.name
            editCharForm.image.value = charObjToEdit.image
            editCharForm.finisher1.value = charObjToEdit.finisher1
            editCharForm.finisher2.value = charObjToEdit.finisher2
        }