export class Model {
    user;
    items;

    constructor(){
        this.user = "Toad";
        this.items =[
           new TodoItem("Buy Flowers", false),
           new TodoItem("Get Shoes", false),
           new TodoItem("Collect Tickets", false),
           new TodoItem("Call Seagull", false),
        ];
    }
}

export class TodoItem {
    action;
    done;

    constructor(action, done){
        this.action = action;
        this.done = done;
    }
}