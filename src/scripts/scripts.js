/*
    Define the keys and value for a JavaScript object that
    represents a journal entry about what you learned today
*/
const objectsJournalEntry = {

}
const journalEntry = ["Manipulating the DOM"]

console.log(journalEntry)

journalEntry.push("JS Objects", "Functions and Logic", "Building DOM Components")

const journalEntries = [
    {
        date: "07/24/2018",
        concept: "Array methods",
        entry: "We learned about 4 different array methods today. forEach made sense, but the others still confuse me.",
        mood: "Ok"
    },
    {
        date: "6/5/2019",
        concept: "APIs",
        entry: "Learning to use Postman with APIs, and learning more about objects and the DOM.",
        mood: "happy"
    }
]

const makeJournalEntryComponent = (date, concept, entry, mood) => {
    return `
    <p>
        On ${date} we learned about ${concept} and my notes included that we ${entry} and after learning the concept I feel ${mood}
        about the content and my ability to apply the methods daily.
    </p>
    `
}

const newEntry = document.querySelector(".entryLog")

for (let i = 0; i < journalEntries.length; i++) {
    newEntry.innerHTML += makeJournalEntryComponent(
        journalEntries[i].date,
        journalEntries[i].concept,
        journalEntries[i].entry,
        journalEntries[i].mood
    );
}

