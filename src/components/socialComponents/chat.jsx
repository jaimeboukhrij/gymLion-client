import { PrettyChatWindow } from "react-chat-engine-pretty";

const Chat = (props) => {
    return (
        <div style={{ height: "100vh", width: "100vw" }}>
            <PrettyChatWindow
                projectId="
df433472-102c-4fc5-a7c8-675d69187a69"
                username="user1@gmail.com "// adam
                secret="1234" // pass1234
                style={{ height: "100%" }}
            />
        </div>
    );
};

export default Chat;