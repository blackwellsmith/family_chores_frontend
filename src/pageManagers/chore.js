

class ChorePage extends PageManager {

  constructor(container, adapter) {
      super(container)
      this.adapter = new ChoreAdapter(adapter)
  }

  initBindingsAndEventListeners() { 
      return null
  }

  get staticHTML() {
      (`
      <br>
      <h2>Time for another?</h2>
      <form id="chore">
      <div class="form-group">
        <label for="name">Name</label>
        <input type="name" class="form-control" id="name" placeholder="name" required>
      </div>
      <div class="form-group">
        <label for="notes">Notes</label>
        <input type="notes" class="form-control" id="name" placeholder="note" required>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
      </form>
      <br>

  `)
  }
}