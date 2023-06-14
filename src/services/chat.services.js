import axios from 'axios';

const getChat = async (user, secret, photo) => {
    console.log("----------", user, secret, photo);

    var formData = new FormData();
    formData.append('username', user);
    formData.append('secret', secret);
    formData.append('avatar', photo);

    var config = {
        method: 'post',
        url: 'https://api.chatengine.io/users/',
        headers: {
            'PRIVATE-KEY': '6517dc0d-0be7-4f16-b7d9-42de762ef08b',
            'Content-Type': 'multipart/form-data'
        },
        data: formData
    };

    try {
        const response = await axios(config);
        console.log(JSON.stringify(response.data));
    } catch (error) {
        console.log(error);
    }
};

export default getChat;

