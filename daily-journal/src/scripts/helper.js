import { API } from "./data.js"
import { renderJournalEntries } from "./entriesDOM.js"

function getAndDisplayEntries() {
    document.querySelector(".entryLog").innerHTML = ""
    API.getJournalEntries()
        .then( entryData => renderJournalEntries(entryData))
  }

  export {getAndDisplayEntries}