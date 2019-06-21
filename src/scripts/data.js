const API = {
    getJournalEntries: () => {
        return fetch("http://localhost:3000/entries")
            .then(response => response.json())
    },
    postNewJournal: (newJournalEntry) => {
    return fetch("http://localhost:3000/entries", { // Replace "url" with your API's URL
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(newJournalEntry)
})
    }
}

function deleteEntry(id) {
    return fetch(`http://localhost:3000/entries/${id}`, {
      method: "DELETE",
      headers:{
        "Content-Type": "application/json"
      }
    })
  }

function updateEntry(updatedEntry) {
    return fetch(`http://localhost:3000/entries/${updatedEntry.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(updatedEntry)
  })
  .then( (data) => data.json())
}

function buildJournalEntry(date, concept, entry, mood) {
    return ({
        date: date,
        concept: concept,
        entry: entry,
        mood: mood
    })
  }