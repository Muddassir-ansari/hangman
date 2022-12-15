import React, { useEffect, useState } from "react";
import { letters, words } from "../data/letters";
import hangman from '../hangman-removebg-preview.png'
import "./Home.css";
export const Home = () => {
  const [hangmanWord, setHangManWord] = useState("");
  const [length, setLength] = useState([]);
  const [alphabet, setAlphabet] = useState([])
  ///---------------------//
  import React, { useEffect, useState } from 'react';

  export default function Hangman({duration = 120000}) {
      const word = "Hangman".toUpperCase();
      const alphabets = ["A", "B", "C", "D", "E", "F", "G",
          "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R",
          "S", "T", "U", "V", "W", "X", "Y", "Z"];
      const [correctGuesses, setCorrectGuesses] = useState([])
      const [timeUp, setTimeUp] = useState(false);
  
      useEffect(() => {
          const timeout = setTimeout(() => {
              setTimeUp(true);
          }, duration);
  
          return () => clearTimeout(timeout);
      }, [])
  
  
      const maskedWord = word.split('').map(letter => correctGuesses.includes(letter) ? letter : "_").join(" ");
      return (
          <div>
              <p>{maskedWord}</p>
              {alphabets.map((alphabet, index) => <button key={index} onClick={() => {
                  if (word.includes(alphabet)) {
                      setCorrectGuesses([...correctGuesses, alphabet])
                  }
              }}>{alphabet}</button>)}
              {timeUp ? 
              <p>You lost!</p> : 
              !maskedWord.includes("_") &&  <p>You won!</p>}
          </div>
      );
  }



  //-----------------------//
  useEffect(() => {
    let tempWord = words[Math.floor(Math.random() * words.length)];
    setHangManWord(tempWord.toUpperCase());
    setLength(tempWord.toUpperCase().split(""));
  }, []);
   const handleClickLetters = (t) => {
    console.log(t.target.value)
    console.log(t.target)
    // t.preventDefault();
    let index;
    let alpha=[];
    // length.forEach((i)=>{
      // for(var i = 0 ; i < length.length; i++){
      //   if(hangmanWord.match(t.target.value)){
      //     alpha = length[i]
      //   }
      // }
      // if(length.includes(t.target.value) && hangmanWord.includes(t.target.value)){
      //   index = length.indexOf(t.target.value)
      //   alpha[index] = length[index]
        // alpha.push()
      //   console.log("alpha : " + alpha)
      //   console.log(index)
      //   alphabet.push(alpha)
      //   console.log("alphabet : " + alphabet)
      // }
      // else
      // console.log("no")
    // })
    // setAlphabet([...alphabet])
    // console.log(alphabet)
    index = length.indexOf(t.target.value)
    if(index <= length.length && index >= 0){
      for(var i = length.length ; i > index ; i-- ){
        if(length.includes(t.target.value) && hangmanWord.includes(t.target.value)){
          alpha[index] = t.target.value
        }
      }
      alphabet.push(alpha)
      setAlphabet([...alphabet])
    }
    console.log(alphabet)

   }

  return (
    <>
    <div className="header">
        <h2>Play Hangman</h2>
      </div>
    <div className="container">
      <div className="row">
      <div className="left">
        <img src={hangman} alt=""/>
      </div>

      <div className="right">
      <div className="box">
      {console.log(length)}
      {console.log(hangmanWord)}
      {length.map((t) => (
          <input type="text" className="box_input"   />
      ))}
      </div>
      <div className="box_letter">
      {letters.map((t) => (
        <button className="letters_btn" value={t} onClick={(t)=>handleClickLetters(t)}>{t}</button>
      ))}
      </div>
      </div>
      </div>
    </div>
    </>
  );
};
