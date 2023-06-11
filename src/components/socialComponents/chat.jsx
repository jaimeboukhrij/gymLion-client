import React from 'react';

import {
    ChatEngine,
    MultiChatSocket,
    useMultiChatLogic,
} from 'react-chat-engine-advanced';

export function App() {
    const chatProps = useMultiChatLogic(
        'b75e5bd5-cd84-404c-b820-06feff8c98c0',
        'john_smith',
        'secret_1234'
    );
    return (
        <>
            <MultiChatWindow {...chatProps} />
            <MultiChatSocket {...chatProps} />
        </>
    );
}