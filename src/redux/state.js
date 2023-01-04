import dialogsReducer from './dialogsReducer';
import profileReducer from './profileReducer';


const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';
const SEND_MESSAGE = 'SEND_MESSAGE';
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEST = 'UPDATE-NEW-POST-TEST';

let store = {
    _state: {
        dialogsPage: {
            dialogs: [
                { id: 1, name: 'Vova' },
                { id: 2, name: 'Vika' },
                { id: 3, name: 'Sasha' },
                { id: 4, name: 'Masha' }
            ],
            messages: [
                { id: 1, message: 'Hi!' },
                { id: 2, message: 'Hello' },
                { id: 3, message: 'Bye' }
            ],
            newMessageBody: ""
        },
        profilePage: {
            posts: [
                { id: 1, message: 'Hi, how are you?', likeCount: 15 },
                { id: 2, message: 'Hi, ok!', likeCount: 20 }
            ],
            newPostText: 'it-kamasutra'
        }
    },
    _callSubscriber() {
        console.log('ddd')
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

        this._callSubscriber(this._state)
    }

}

export default store;