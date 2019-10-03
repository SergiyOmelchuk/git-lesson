let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD-MESSAGE":
            let newMessage = {
                id: 5,
                author: 1,
                text: state.newMessageText
            };
            state.messagesTest.push(newMessage);
            state.newMessageText = "";
            return state;
        case "UPDATE-NEW-MESSAGE":
            state.newMessageText = action.newMessage;
            return state;
        default:
            return state;
    }
};

export let addMessageActiveCreation = () => ({type: "ADD-MESSAGE"});
export let updateNewMessageActiveCreation = (text) => ({type: "UPDATE-NEW-MESSAGE", newMessage: text});

export default dialogsReducer;