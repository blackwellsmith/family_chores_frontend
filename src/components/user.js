class User {
  constructor(user) {
    const { id, name, email, chores } = user
    this.id = id
    this.email = email
    this.name = name
    this.chores = chores.map(c => new Chore(c))
    //console.log(chores)
  }

  get profileHTML() {
    if (this.chores.length === 1) {
      return (`
        <div>
          <br>
            <h1>Welcome ${this.name}!</h1>
              <br>
                <h2>Looks like you have ${this.chores.length} goal left. </h2>
                  <br>
                    <h2 id="delete">!!Click on Task to delete when finished!!</h2>
                      <ul id="chores-container">
                        ${this.chores.map(c => c.liAndLinkHTML).join()}
                      </ul>
                      <br>
                    <h2>Set a goal for today....</h2>
                    <form id="chore-form">
                      <div class="form-group">
                        <label for="name">New Task</label>
                        <input type="name" class="form-control input-lg" id="name" placeholder="New Task" required>
                      </div>
                      <div class="form-group">
                        <label for="notes">Notes</label>
                        <input type="notes" class="form-control input-lg" id="notes" placeholder="Notes" required>
                      </div>
                      <div class="form-group">
                        <label for="priority">Please select a priority for this task</label>
                        <select type="priority" class="form-control input-lg" id="priority">
                        <option value="!!!Urgent!!!">!!!Urgent!!!</option>
                        <option value="Semi-urgent">Semi-urgent</option>
                        <option value="less urgent">less urgent</option>
                        <option value="low priority">low priority</option>
                        <option value="Long term goal">Long term goal</option>
                        </select>
                        <br>
                      </div>
                <button type="submit" class="btn btn-primary">Submit</button>
              </form>
              </br>
            </div>
          </br>
        `)
    } else {
      return (`
      <div>
          <br>
            <h1>Welcome ${this.name}! </h1>
              <br>
                <h2>Looks like you have ${this.chores.length} goals left. </h2>
                  <br>
                    <h2 id="delete">!!Click on Task to delete when finished!!</h2>
                      <ul id="chores-container">
                        ${this.chores.map(c => c.liAndLinkHTML).join()}
                      </ul>
                      <br>
                    <h2>Set a goal for today....</h2>
                    <form id="chore-form">
                      <div class="form-group">
                        <label for="name">New Task</label>
                        <input type="name" class="form-control input-lg" id="name" placeholder="New Task" required>
                      </div>
                      <div class="form-group">
                        <label for="notes">Notes</label>
                        <input type="notes" class="form-control input-lg" id="notes" placeholder="Notes" required>
                      </div>
                      <div class="form-group">
                        <label for="priority">Please select a priority for this task</label>
                        <select type="priority" class="form-control input-lg" id="priority">
                        <option value="!!!Urgent!!!">!!!Urgent!!!</option>
                        <option value="Semi-urgent">Semi-urgent</option>
                        <option value="less urgent">less urgent</option>
                        <option value="low priority">low priority</option>
                        <option value="Long term goal">Long term goal</option>
                        </select>
                        <br>
                      </div>
                <button type="submit" class="btn btn-primary">Submit</button>
              </form>
            </br>
          </div>
        </br>
     `)

      }
    }
  }
