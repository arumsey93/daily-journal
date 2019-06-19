/*
    Define the keys and value for a JavaScript object that
    represents a journal entry about what you learned today
*/

function eventListener() {
    document.querySelector("#record-btn").addEventListener("click", () => {
        let dateID = document.querySelector("#journalDate").value
        let conceptID =  document.querySelector("#conceptsCovered").value
        let entryID = document.querySelector("#journalEntry").value
        let moodID = document.getElementById("mood")
        let moodValue = moodID.options[moodID.selectedIndex].text
                    let conceptCharacters = conceptID
                    let long_formCharacters = entryID
                    let x = /[^a-zA-Z0-9(){}:;\s.?!,"']/g
                    let conceptContain = conceptCharacters.match(x)
                    let long_formContain = long_formCharacters.match(x)
        if (conceptContain === null && long_formContain === null) {
            document.querySelector(".entryLog").innerHTML = ''
            let newObj = makeJournalObj()
            console.log(newObj)
            API.postNewJournal(newObj).then(data => API.getJournalEntries().then(renderJournalEntries))
        }
            dateID.value = ""
            conceptID.value = ""
            entryID.value = ""
            moodValue.value = ""
            console.log("This works") 
    })
    }