
//function that will select the target for the DOM and display the entries
const renderJournalEntries = (entries) => {
    document.querySelector(".entryLog").innerHTML = ""
    entries.forEach(entry => {
        document.querySelector(".entryLog").appendChild(makeJournalEntryComponent(entry))
    });
}   

const createJournalObj = ( arr) => {
    let newObj = {
        date: "",
        concept: "",
        entry: "",
        mood: ""
    }
    newObj.date = arr[0]
    newObj.concept = arr[1]
    newObj.entry = arr[2]
    newObj.mood = arr[3]
    return newObj
}

const makeJournalObj = () => {
    let dateInput = document.querySelector("#journalDate")
    let conceptInput = document.querySelector("#conceptsCovered")
    let long_formInput = document.querySelector("#journalEntry")
    let moodInput = document.getElementById("mood")
    console.log(moodInput)
    let objArr = [dateInput.value, conceptInput.value, long_formInput.value, moodInput.value]
    console.log(moodInput.value)
    let journalObj = createJournalObj(objArr)
    return journalObj
}
const makeJournalEntryComponent = (journalEntry) => {
    let deleteDiv = document.createElement("div")
    let editDiv = document.createElement("div")
    let editBtn = document.createElement("button")
    editDiv.setAttribute("id", `editFormContainer-${journalEntry.id}`)
    editBtn.textContent = "Edit"
    deleteDiv.innerHTML = 
    `
     <h2> ${journalEntry.concept} </h2>
    <section>
        <article>
            <p> ${journalEntry.entry} <br> ${journalEntry.mood} <br> ${journalEntry.date} </p>
        </article>
    </section>`
    let deleteBtn = document.createElement("button")
    deleteBtn.textContent= "Delete"
    deleteBtn.addEventListener("click", () => {
        deleteEntry(journalEntry.id)
        .then( data => {
            getAndDisplayEntries()
        })
    })
    editBtn.addEventListener("click", () => {
        console.log("edit clicked")
        let editForm = createEditForm(journalEntry)
        addEditFormToDOM(journalEntry.id, editForm)
    })

    deleteDiv.appendChild(editDiv)
    deleteDiv.appendChild(editBtn)
    deleteDiv.appendChild(deleteBtn)
    return deleteDiv
 }

 const addToDOM = (obj) => {
    document.querySelector(".entryLog").appendChild(makeJournalEntryComponent(obj))
}


function createEditForm(entries) {
    return `
    <input id="date-edit" name="date-editor" type="hidden" value=${entries.date}>
    <input type="hidden" id="entries-id" value=${entries.id}>
    <input id="concept-edit" name="concept-editor" type="text" value=${entries.concept}>
    <input id="entry-edit" name="entry-editor" type="text" value=${entries.entry}>
    <select type="text" id="mood-edit">
        <option value="happy" ${entries.mood === "happy" ? "selected" : ""}>happy</option>
        <option value="sad" ${entries.mood === "sad" ? "selected" : ""}>sad</option>
        <option value="ok" ${entries.mood === "ok" ? "selected" : ""}>ok</option>
    </select>
    <button id="edit-form-btn">Save Entry</button>
    `
}

function addEditFormToDOM(editContainer, editForm) {
    document.querySelector(`#editFormContainer-${editContainer}`).innerHTML = editForm
    document.querySelector("#edit-form-btn").addEventListener("click", () => {
        let date = document.querySelector("#date-edit").value
        let concept = document.querySelector("#concept-edit").value
        let entry = document.querySelector("#entry-edit").value
        let mood = document.querySelector("#mood-edit").value 
        let newentryID = document.querySelector("#entries-id").value
        let updatedEntry = buildJournalEntry(date, concept, entry, mood)
        updatedEntry.id = newentryID
        updateEntry.date = date
        console.log(updateEntry)
        updateEntry(updatedEntry)
        .then( () => {
            API.getJournalEntries().then(renderJournalEntries)
        })              
    })
}

