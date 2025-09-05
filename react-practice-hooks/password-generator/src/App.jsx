import { useCallback, useState, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const generatePassword = useCallback(() => {
    let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (numberAllowed) {
      chars += "0123456789";
    }
    if (characterAllowed) {
      chars += "!@#$%^&*()_+~`|}{[]:;?><,./-=";
    }

    let password = "";
    for (let i = 0; i < length; i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setPassword(password);
  }, [length, numberAllowed, characterAllowed]);

  const copyTextToClipboard = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(password);
      passwordRef.current.focus();
      passwordRef.current?.select();
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  }, [password]);

  useEffect(() => {
    generatePassword();
  }, [length, numberAllowed, characterAllowed, generatePassword]);

  // use ref

  const passwordRef = useRef(null);

  return (
    <>
      <div className="bg-black h-screen w-full flex items-center
       text-white">
        <div className="w-full max-w-md mx-auto p-4 shadow-md bg-gray-800 rounded-lg my-8 text-orange-500">
          <div className="flex shadow rounded-lg overflow-hidden bg-white">
            <input
              type="text"
              value={password}
              readOnly
              className="outline-none w-full p-2"
              placeholder="Generated Password"
              ref={passwordRef}
            />
            <button
              onClick={copyTextToClipboard}
              className="outline-none bg-blue-700 p-2 shrink-0"
            >
              Copy
            </button>
          </div>
          <div className="flex text-sm gap-x-2">
            <div className=" flex items-center gap-x-1">
              <input
                type="range"
                min={6}
                max={100}
                value={length}
                className="cursor-pointer"
                onChange={(e) => setLength(e.target.value)}
              />
              <label>Length: {length}</label>
            </div>
            <div className="flex items-center gap-x-1">
              <input
                type="checkbox"
                id="include-numbers"
                checked={numberAllowed}
                onChange={() => setNumberAllowed((prev) => !prev)}
              />
              <label htmlFor="include-numbers">Include Numbers</label>
            </div>
            <div className="flex items-center gap-x-1">
              <input
                type="checkbox"
                id="include-symbols"
                checked={characterAllowed}
                onChange={() => setCharacterAllowed((prev) => !prev)}
              />
              <label htmlFor="include-symbols">Include Symbols</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
