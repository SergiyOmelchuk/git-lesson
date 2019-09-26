
let State = {
    dialogsPage: {
        names: [
            { id: 1, name: "Andrey" },
            { id: 2, name: "Sergiy" },
            { id: 3, name: "Valera" },
            { id: 4, name: "Marky" },
            { id: 5, name: "Jack" },
            { id: 6, name: "Alina" }
        ],
        messeges: ["Hi!", "How are you?", "Very goood", "You", "Oh-Oh", "Yooo Yooo"]
    },
    profilePage: {
        posts: []
    }
};

export let store = {
id: ["1","2"],
getId() {alert(this.id);}
}

export default State;