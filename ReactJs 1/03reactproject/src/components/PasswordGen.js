import {useState,useCallback,useEffect,useRef} from 'react'
function PasswordGen(){
    const [length,setLength]=useState(8);

    const [numberAllowed,setNumberAllowed]=useState(false);

    const [charAllowed,setCharAllowed]=useState(false);

    const [password,setPassword]=useState("");

    const passwordGenerator=useCallback(()=>{
        let pass="";
        let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

        if(numberAllowed) str+="0123456789";
        if(charAllowed)   str+="~!@#$%^&*()<>?/;|{}[]";

        for(let i=1;i<=length;i++){
            let index=Math.floor(Math.random()*str.length+1);
            pass+=str.charAt(index);
        }
        setPassword(pass);
    },[length,
    charAllowed,numberAllowed,setPassword]);

    useEffect(()=>{
        passwordGenerator();
    },[length,numberAllowed,charAllowed,passwordGenerator])

    //useRef hook
    const passwordRef=useRef(null);

    const copyPasswordToClip=useCallback(()=>{
        passwordRef.current?.select();
        passwordRef.current?.setSelectionRange(0,3);
        window.navigator.clipboard.writeText(password);
    },[password]);
    return(
        <>
            <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange bg-gray-600'>
                <h1 className="text-center text-4xl text-white my-2">Password Generator</h1>
                <div className='flex shadow rounded-lg overflow-hidden py-4'>
                    <input type="text" value={password} className=' outline-none w-full py-1 px-3 rounded-tl-lg  rounded-bl-lg
                    ' placeholder='password' readOnly ref={passwordRef}></input>
                    <button onClick={copyPasswordToClip}
                    className='outline-none bg-blue-700 text-white px-3 rounded-tr-lg  rounded-br-lg py-0.5 shrink-0'>copy</button>
                </div>
                <div className='flex text-sm gap-x-2 my-4 py-4'>
                <div className='flex items-center gap-x-1'>
                    <input 
                    type="range"
                    min={6}
                    max={100}
                    value={length}
                    className='cursor-pointer'
                    onChange={(e) => {setLength(e.target.value)}}
                    />
                    <label>Length: {length}</label>
                </div>
                <div className="flex items-center gap-x-1">
                <input
                    type="checkbox"
                    defaultChecked={numberAllowed}
                    id="numberInput"
                    onChange={() => {
                        setNumberAllowed((prev) => !prev);
                    }}
                />
                <label htmlFor="numberInput">Numbers</label>
                </div>
                <div className="flex items-center gap-x-1">
                    <input
                        type="checkbox"
                        defaultChecked={charAllowed}
                        id="characterInput"
                        onChange={() => {
                            setCharAllowed((prev) => !prev )
                        }}
                    />
                    <label htmlFor="characterInput">Characters</label>
                </div>
                </div>
            </div>
        </>
    )
}

export default PasswordGen;