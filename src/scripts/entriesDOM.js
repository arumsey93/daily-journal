//function that will select the target for the DOM and display the entries
const renderJournalEntries = (entries) => {
    entries.forEach(entry => {
        makeJournalEntryComponent(entry)
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
    let moodInput = document.querySelector("#mood")
    let objArr = [dateInput.value, conceptInput.value, long_formInput.value, moodInput.value]
    let journalObj = createJournalObj(objArr)
    return journalObj
}
const makeJournalEntryComponent = (journalEntry) => {
    document.querySelector(".entryLog").innerHTML +=
    `
     <h2> ${journalEntry.concept} </h2>
    <section>
        <article>
            <p> ${journalEntry.entry} <br> ${journalEntry.mood} <br> ${journalEntry.date} </p>
        </article>
    </section>`
 }