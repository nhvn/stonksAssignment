import React, { useState, useEffect } from 'react';
import UserTagging from './UserTagging';

const users = ['Nathen49', 'Erwin51', 'Fabian_Bins'];

const emojiMap = {
  ':smile:': '😄',
  ':laugh:': '😂',
  ':wink:': '😉',
  ':blush:': '😊',
  ':heart_eyes:': '😍',
  ':sweat_smile:': '😅',
  ':joy:': '😂',
  ':kissing_heart:': '😘',
  ':thinking:': '🤔',
  ':neutral_face:': '😐',
  ':expressionless:': '😑',
  ':grimacing:': '😬',
  ':rolling_eyes:': '🙄',
  ':hushed:': '😯',
  ':frowning:': '😦',
  ':anguished:': '😧',
  ':open_mouth:': '😮',
  ':scream:': '😱',
  ':sleeping:': '😴',
  ':mask:': '😷',
  ':sunglasses:': '😎',
  ':confused:': '😕',
  ':slightly_frowning_face:': '🙁',
  ':upside_down_face:': '🙃',
  ':money_mouth_face:': '🤑',
  ':zipper_mouth_face:': '🤐',
  ':nerd_face:': '🤓',
};

const emojis = Object.keys(emojiMap);

function Chat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [mutedUsers, setMutedUsers] = useState([]);
  const [showUserTagging, setShowUserTagging] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [cursorPosition, setCursorPosition] = useState(null);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [emojiFilter, setEmojiFilter] = useState('');
  const [userFilter, setUserFilter] = useState(''); // Define userFilter state

  const sender = 'current user';

  useEffect(() => {
    return () => {
      setShowUserTagging(false);
    };
  }, [setShowUserTagging]);

  const handleInput = (event) => {
    const input = event.target.value;
    setInput(input);
    setCursorPosition(event.target.selectionStart);

    if (input[event.target.selectionStart - 1] === ':') {
      setShowEmojiPicker(true);
      setEmojiFilter('');
    } else if (showEmojiPicker) {
      const endIndex = input.indexOf(' ', event.target.selectionStart);
      const filter = endIndex === -1 ? input.slice(event.target.selectionStart) : input.slice(event.target.selectionStart, endIndex);
      setEmojiFilter(filter);
    }

    if (input[event.target.selectionStart - 1] === '@') {
      setShowUserTagging(true);
      setUserFilter('');
    } else if (showUserTagging) {
      const endIndex = input.indexOf(' ', event.target.selectionStart);
      const filter = endIndex === -1 ? input.slice(event.target.selectionStart) : input.slice(event.target.selectionStart, endIndex);
      setUserFilter(filter);
    }
  };

  const handleKeyDown = (event) => {
    // Handle navigation in the emoji picker using arrow keys and enter key
  };

  const handleEmojiSelect = (emoji) => {
    const inputBeforeCursor = input.slice(0, cursorPosition);
    const inputAfterCursor = input.slice(cursorPosition);

    const newInput = `${inputBeforeCursor}${emoji}${inputAfterCursor}`;
    setInput(newInput);
    setShowEmojiPicker(false);
  };

  const handleUserSelect = (user) => {
    const inputBeforeCursor = input.slice(0, cursorPosition);
    const inputAfterCursor = input.slice(cursorPosition);

    const newInput = `${inputBeforeCursor}@${user} ${inputAfterCursor}`;
    setInput(newInput);
    setShowUserTagging(false);
  };

  const sendMessage = (event) => {
    event.preventDefault();
    if (input) {
      if (!mutedUsers.includes(sender)) {
        let message = input.replace(
          /(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])/g,
          (match) => `<img src="emojis/${match.codePointAt(0).toString(16)}.png" alt="${match}" />`
        );
        message = message.replace(/:\w+:/g, (match) => emojiMap[match] || match);
        setMessages([...messages, { sender, content: message }]);
      }
      if (input.startsWith('/')) {
        handleCommand(input.slice(1));
      }
      setInput('');
    }
  };

  const handleCommand = (command) => {
    const [commandName, ...args] = command.split(' ');
    switch (commandName) {
      case 'mute':
        const usernameToMute = args[0].slice(1); // Remove the '@' from the username
        setMutedUsers([...mutedUsers, usernameToMute]);
        break;
      case 'ban':
        // Handle ban @user command
        break;
      case 'title':
        const newTitle = args.join(' ');
        setTitle(newTitle);
        break;
      case 'description':
        const newDescription = args.join(' ');
        setDescription(newDescription);
        break;
      default:
        // Handle unknown command
        break;
    }
  };

  return (
    <div className="flex flex-col items-center h-full">
      <div className="overflow-auto w-full max-w-lg">
        <div className="py-4 chat-content">
          {messages.map((message, index) => (
            <div key={index} className={`flex items-end justify-start mb-4 ${message.content.includes('@current user') ? 'bg-yellow-200' : ''}`}>
              <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
                <span
                  className="px-4 py-2 rounded-lg inline-block bg-blue-600 text-white"
                  dangerouslySetInnerHTML={{ __html: message.content }}
                ></span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {showEmojiPicker && (
        <div className="emoji-picker absolute bottom-0 mb-16 bg-white p-2 rounded-md shadow-lg">
          {emojis
            .filter((emoji) => emoji.startsWith(emojiFilter))
            .map((emoji) => (
              <button key={emoji} onClick={() => handleEmojiSelect(emoji)}>
                {emojiMap[emoji]}
              </button>
            ))}
        </div>
      )}

      {showUserTagging && (
        <div className="user-picker absolute bottom-0 mb-16 bg-white p-2 rounded-md shadow-lg">
          {users
            .filter((user) => user.includes(userFilter))
            .map((user) => (
              <button key={user} onClick={() => handleUserSelect(user)}>
                @{user}
              </button>
            ))}
        </div>
      )}

      <div className="border-t-2 border-gray-200 px-4 pt-4 mb-2 sm:mb-0 w-full max-w-lg">
        <div className="relative flex">
          <form onSubmit={sendMessage} className="w-full focus-within:text-gray-400 relative">
            <input
              type="text"
              value={input}
              onChange={handleInput}
              onKeyDown={(e) => {
                if (e.key === '@') {
                  setShowUserTagging(true);
                }
              }}
              className="w-full focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 pl-12 bg-gray-200 rounded-full py-3"
              placeholder="Type your message..."
            />
            <button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
              {/* SVG icon or button styling here */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-6 w-6">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Chat;
