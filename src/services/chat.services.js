import axios from 'axios';

const getChat = (user, secret) => {
    console.log("----------", user, secret);

    var data = {
        "username": user,
        "secret": secret
    };

    var config = {
        method: 'post',
        url: 'https://api.chatengine.io/users/',
        headers: {
            'PRIVATE-KEY': '6517dc0d-0be7-4f16-b7d9-42de762ef08b'
        },
        data: data
    };

    axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
            console.log(error);
        });
};

export default getChat;
