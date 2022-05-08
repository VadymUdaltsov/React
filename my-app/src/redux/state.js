let state = {
    profilePage: {
        postData: [
            { message: 'Hi, how are you?', likesCount: 5 },
            { message: "It's my first post.", likesCount: 15 }
        ],
    },
    dialogsPage: {
        dialogsData: [
            { url: '/dialogs/1', name: 'Vadym' },
            { url: '/dialogs/2', name: 'Kirill' },
            { url: '/dialogs/3', name: 'Yasya' },
            { url: '/dialogs/4', name: 'Galina' },
            { url: '/dialogs/5', name: 'Sergey' },
            { url: '/dialogs/6', name: 'Kolya' }
        ],
        messagesData: [
            { message: 'Hi', id: 1 },
            { message: 'How are you?', id: 2 },
            { message: 'What are you doing?', id: 3 },
        ]
    }
}

export default state;