let initialState = {
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
    newPostText: ""
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case "ADD-POST":
            let newPost = {
                id: 5,
                likesCount: 0,
                message: state.newPostText
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ""
            }
        case "UPDATE-NEW-POST":
            return {
                ...state,
                newPostText: action.newText
            }
        default:
            return state;
    }
};

export let addPostActiveCreation = () => ({type: "ADD-POST"});
export let updateNewPostActiveCreation = (text) => ({type: "UPDATE-NEW-POST", newText: text});

export default profileReducer;