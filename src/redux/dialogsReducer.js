const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
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
    ]
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, { id: 4, message: body }]
            }
        default:
            return state;
    }

}

export const sendMessageCreator = (newMessageBody) => {
    return {
        type: SEND_MESSAGE,
        newMessageBody
    }
}

export default dialogsReducer;