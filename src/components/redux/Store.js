import profileReducer from "./Profile-reducer";
import dialogsReducer from "./Dialogs-reducer";

let store = {
    _state: {
        dialogsPage: {
            names: [
                {
                    id: 1, name: "Andrey", likes: 15, messages: [
                        {id: 1, text: "Hello", author: 1},
                        {id: 2, text: "How are you?", author: 1},
                        {id: 3, text: "Ohh! Very good", author: 2},
                        {id: 4, text: "I want buy a new car", author: 2},
                        {id: 4, text: "I want buy a new car", author: 2},
                        {id: 5, text: "Its good news", author: 1}
                    ]
                },
                {id: 2, name: "Sergiy", likes: 0},
                {id: 3, name: "Valera", likes: 8},
                {id: 4, name: "Marky", likes: 9},
                {id: 5, name: "Jack", likes: 7},
                {id: 6, name: "Alina", likes: 1}
            ],
            messagesTest: [
                {id: 1, text: "Hello", author: 1},
                {id: 2, text: "How are you?", author: 1},
                {id: 3, text: "Ohh! Very good", author: 2},
                {id: 4, text: "I want buy a new car", author: 2},
                {id: 5, text: "Its good news", author: 1},
                {id: 5, text: "Its good news", author: 2},
                {id: 6, text: "Thanks", author: 2}
            ],
            newMessageText: ""
        },
        profilePage: {
            posts: [
                {
                    id: 1,
                    message: "Eu pariatur voluptate reprehenderit ad tempor velit id exercitation. Nisi occaecat incididunt\n" +
                        "                exercitation aliqua esse deserunt ipsum esse in.",
                    likesCount: 0
                },
                {
                    id: 2,
                    message: "Eu pariatur voluptate reprehenderit ad tempor velit id exercitation. Nisi occaecat incididunt\n" +
                        "                exercitation aliqua esse deserunt ipsum esse in.",
                    likesCount: 15
                },
                {
                    id: 3,
                    message: "Eu pariatur voluptate reprehenderit ad tempor velit id exercitation. Nisi occaecat incididunt\n" +
                        "                exercitation aliqua esse deserunt ipsum esse in.",
                    likesCount: 5
                },
                {id: 4, message: "Круть", likesCount: 7}
            ],
            newPostText: "",
        }
    },
    _callSubscriber() {
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._callSubscriber(this.getState());
    }
};


window.store = store;

export default store;