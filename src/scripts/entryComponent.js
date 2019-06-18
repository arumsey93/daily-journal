/*
    Define the keys and value for a JavaScript object that
    represents a journal entry about what you learned today
*/
const objectsJournalEntry = {

}
const journalEntry = ["Manipulating the DOM"]

console.log(journalEntry)

journalEntry.push("JS Objects", "Functions and Logic", "Building DOM Components")

const makeJournalEntryComponent = (journalEntry) => {
   // function that returns the html code
   return`
    <h2> ${journalEntry.concept} </h2>
   <section>
       <article>
           <p> ${journalEntry.entry} <br> ${journalEntry.mood} <br> ${journalEntry.date} </p>
       </article>
   </section>`
}