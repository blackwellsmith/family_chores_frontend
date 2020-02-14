class Chore{
    constructor(chore) {
        const { id, name, notes, priority } = chore
        this.id = id
        this.name = name
        this.notes = notes
        this.priority = priority
    }

    get liAndLinkHTML() {
       return `<li data-id="${this.id}"><a href="#" data-id="${this.id}">${this.name} - Notes: ${this.notes} - Priority: ${this.priority}</a></li>` 
        
    }
}