Hooks.on('preUpdateJournalEntry', (a,b,c) => {
    let content = b.content
    content = content.replace(/<div class="phb">/g, '')
    content = content.replace(/<\/DIV>/g, '')
    b.content = '<div class="phb">' + content + '</DIV>'
})