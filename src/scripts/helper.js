function getAndDisplayEntries() {
    document.querySelector(".entryLog").innerHTML = ""
    API.getJournalEntries()
        .then( entryData => renderJournalEntries(entryData))
  }