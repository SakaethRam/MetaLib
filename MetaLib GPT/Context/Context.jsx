import { createContext, useState } from "react";
import run from "../Config/Gemini"; 

export const Context = createContext();

const ContextProvider = (props) => {

    const [input, setInput] = useState("");
    const [recentPrompt, setRecentPrompt] = useState("");
    const [prevPrompts, setPrevPrompts] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);
    const [resultData, setResultData] = useState("");

    const delayPara = (index, nextWord) => {
        setTimeout(function () {
            setResultData(prev => prev + nextWord);
        }, 75*index)
    }

    const newChat = () => {
        setLoading(false)
        setShowResult(false)
    }

    const onSent = async (prompt) => {
        setResultData("");
        setLoading(true);
        setShowResult(true);
        let response;
        
        if (prompt !== undefined) {
            response = await run(prompt);
            setRecentPrompt(prompt);
        } else {
            setPrevPrompts(prev => [...prev, input]);
            setRecentPrompt(input);
            response = await run(input);
        }
        
        let responseArray = response.split("**");
        let newResponse = "";
        
        for (let i = 0; i < responseArray.length; i++) {
            if (i === 0 || i % 2 !== 1) {
                newResponse += responseArray[i];
            } else {
                newResponse += "<b>" + responseArray[i] + "</b>";
            }
        }
        
        let newResponseTwo = newResponse.split("*").join("</br>");
        let newResponseThree = newResponseTwo.split(":").join("</br>"); // Adding new line break for ':'
        let newResponseFour = newResponseThree.replace(/(\d+\.)/g, '</br>$1'); // Adding new line break for numbered points
        
        // Wrapping code blocks in <pre><code> for display with copy option
        newResponseFour = newResponseFour.replace(/```([\s\S]*?)```/g, '<pre><code>$1</code></pre>');
        
        let newResponseArray = newResponseFour.split(" ");
        
        for (let i = 0; i < newResponseArray.length; i++) {
            const nextWord = newResponseArray[i];
            delayPara(i, nextWord + " ");
        }
        
        setLoading(false);
        setInput("");
    };    
    

    const contextValue = {
        prevPrompts,
        setPrevPrompts,
        onSent, 
        setRecentPrompt,
        recentPrompt,
        showResult,
        loading,
        input,
        setInput,
        resultData,
        newChat
    };

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    );
};

export default ContextProvider;
