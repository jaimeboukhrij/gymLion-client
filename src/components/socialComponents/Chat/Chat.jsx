import { ChatEngine } from 'react-chat-engine';

// import ChatFeed from './components/ChatFeed';
import './chat.css';
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/auth.context';
import ChatFeed from './ChatFeed';

const projectID = 'df433472-102c-4fc5-a7c8-675d69187a69';

const Chat = () => {

    const { user } = useContext(AuthContext)

    console.log("---------------", user)

    return (
        <ChatEngine
            height="85vh"
            projectID={projectID}
            userName={user.userName}
            userSecret="1234"
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
            onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
        />
    );
};

// infinite scroll, logout, more customizations...
export default Chat;



