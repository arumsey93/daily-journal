/*
    Define the keys and value for a JavaScript object that
    represents a journal entry about what you learned today
*/

import { API } from "./data.js"
import {renderJournalEntries, makeJournalObj } from "./entriesDOM.js"

function eventListener() {
    document.querySelector("#record-btn").addEventListener("click", () => {
        let dateID = document.querySelector("#journalDate")
        let conceptID =  document.querySelector("#conceptsCovered")
        let entryID = document.querySelector("#journalEntry")
        let moodID = document.getElementById("mood")
        let moodValue = moodID.options[moodID.selectedIndex]
                    let conceptCharacters = conceptID.value
                    let long_formCharacters = entryID.value
                    let x = /[^a-zA-Z0-9(){}:;\s.?!,"']/g
                    let conceptContain = conceptCharacters.match(x)
                    let long_formContain = long_formCharacters.match(x)
        if (conceptContain === null && long_formContain === null) {
            document.querySelector(".entryLog").innerHTML = ""
            let newObj = makeJournalObj()
            API.postNewJournal(newObj).then(data => API.getJournalEntries().then(renderJournalEntries))
        }
            dateID.value = ""
            conceptID.value = ""
            entryID.value = ""
            moodValue.value = ""
            })
    }

document.getElementsByName("moodFilter").forEach( event => {
    event.addEventListener("click", event => {
        const radioMood = event.target.value
        console.log(radioMood)
        API.getJournalEntries()
        .then(entries => {
            let moodString = entries.filter(entry => entry.mood === radioMood)
            console.log(moodString)
            renderJournalEntries(moodString)
        })
    })
})

document.querySelector("#inputSearch").addEventListener("keypress", (event) => {
    if (event.keyCode === 13) {
        const searchTerm = event.target.value
        API.getJournalEntries()
            .then(journalEntry => {
                const matchingEntries = []

                journalEntry.forEach(entry => {
                    let match = false
                    for (const prop of Object.values(entry)) {
                        if (!match && typeof prop === "string" && prop.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())) {
                            match = true
                            matchingEntries.push(entry)
                        }
                    }
                })
                event.target.value = ""
                renderJournalEntries(matchingEntries)
            })
    }
})

export { eventListener }
