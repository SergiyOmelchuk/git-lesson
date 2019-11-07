import React from "react";
import profileReducer, {addPost, deletePost} from "./Profile-reducer";


let initialState = {
    posts: [
        {id: 1, message: "Eu pariatur ", likesCount: 0},
        {id: 2, message: "Eu pariatur voluptate reprehenderit  ", likesCount: 15},
        {id: 3, message: "Eu pariatur voluptate reprehend ", likesCount: 5},
        {id: 4, message: "Круть", likesCount: 7}
    ]
}
it('length of posts should be incremented', () => {
    // 1. start data
    let action = addPost("Hello my friends");
    // 2. action

    let newState = profileReducer(initialState, action)
    // 3. expectation

    expect(newState.posts.length).toBe(5);

});
it('message of new post should be correct', () => {
    // 1. start data
    let action = addPost("Hello my friends");
    // 2. action

    let newState = profileReducer(initialState, action)
    // 3. expectation

    expect(newState.posts[4].message).toBe("Hello my friends");
});
it('likesCount of new posts should be zero', () => {
    // 1. start data
    let action = addPost("Hello my friends");
    // 2. action

    let newState = profileReducer(initialState, action)
    // 3. expectation

    expect(newState.posts[4].likesCount).toBe(0);

});
it('after deleting length of posts should be decremented', () => {
    // 1. start data
    let action = deletePost(1);
    // 2. action

    let newState = profileReducer(initialState, action)
    // 3. expectation

    expect(newState.posts.length).toBe(3);

});
it('after deleting of incorrect postId length of posts should be not decremented', () => {
    // 1. start data
    let action = deletePost(1000000);
    // 2. action

    let newState = profileReducer(initialState, action)
    // 3. expectation

    expect(newState.posts.length).toBe(4);

});
it('if symbols of new post more then 50 length of posts should be not decremented', () => {
    // 1. start data
    let action = addPost("hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh");
    // 2. action

    let newState = profileReducer(initialState, action)
    // 3. expectation

    expect(newState.posts.length).toBe(4);

});