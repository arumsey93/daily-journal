//function that will select the target for the DOM and display the entries
const renderJournalEntries = (entries) => {
    // console.log(entries)
    let thisPoints = document.querySelector(".entryLog")
    for (let i = 0; i < entries.length; i++) {
         thisPoints.innerHTML += makeJournalEntryComponent(entries[i])
    }
}