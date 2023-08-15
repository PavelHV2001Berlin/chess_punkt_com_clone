"use client"
import React, { useState } from 'react';
import DarkBishop from '@/public/assets/chess_pieces/bishop-b.svg'
import WhiteBishop from '@/public/assets/chess_pieces/bishop-w.svg'
import DarkPawn from '@/public/assets/chess_pieces/pawn-b.svg'
import WhitePawn from '@/public/assets/chess_pieces/pawn-w.svg'
import DarkKnight from '@/public/assets/chess_pieces/knight-b.svg'
import WhiteKnight from '@/public/assets/chess_pieces/knight-w.svg'
import DarkRook from '@/public/assets/chess_pieces/rook-b.svg'
import WhiteRook from '@/public/assets/chess_pieces/rook-w.svg'

import DarkKing from '@/public/assets/chess_pieces/king-b.svg'
import WhiteKing from '@/public/assets/chess_pieces/king-w.svg'
import DarkQueen from '@/public/assets/chess_pieces/queen-b.svg'
import WhiteQueen from '@/public/assets/chess_pieces/queen-w.svg'


const Chessfield = ({ className, feldId, piece }: {className: string, feldId: number, piece: {path: string, color: string}}) => {
  const [isActive, setIsActive] = useState(false)
  return (<div onClick={()=>setIsActive(!isActive)} className={isActive?`chessfield isActive`:`chessfield ${className}`}>
    {piece.path?<img src={piece.path} width={100} height={100} alt="" />:feldId}
    
  </div>);
};

const Home = () => {
  const numRows = 8; // Anzahl der Zeilen
  const numCols = 8; // Anzahl der Spalten
  let feldNummer = 0;
  let whiteRook = {path: WhiteRook.src, color: "white"}
  let whiteKnight = {path: WhiteKnight.src, color: "white"}
  let whiteBishop = {path: WhiteBishop.src, color: "white"}
  let whiteQueen = {path: WhiteQueen.src, color: "white"}
  let whiteKing = {path: WhiteKing.src, color: "white"}
  let whitePawn = {path: WhitePawn.src, color: "white"}

  let darkRook = {path: DarkRook.src, color: "dark"}
  let darkKnight = {path: DarkKnight.src, color: "dark"}
  let darkBishop = {path: DarkBishop.src, color: "dark"}
  let darkQueen = {path: DarkQueen.src, color: "dark"}
  let darkKing = {path: DarkKing.src, color: "dark"}
  let darkPawn= {path: DarkPawn.src, color: "dark"}


  const renderChessboard = () => {
    const chessboard = [];

    for (let row = 0; row < numRows; row++) {
      for (let col = 0; col < numCols; col++) {
        const isDark = (row + col) % 2 === 1; // Berechnung für dunkle Felder
        feldNummer++
        let pieceSrc = ""
        let piece = {path:"", color: ""}
        if(feldNummer === 1 || feldNummer === 8){piece = whiteRook;}
        if(feldNummer === 2 || feldNummer === 7){piece = whiteKnight;}
        if(feldNummer === 3 || feldNummer === 6){piece= whiteBishop}
        if(feldNummer === 4)                    {piece= whiteKing;}
        if(feldNummer === 5)                    {piece= whiteQueen;}
        if(feldNummer >= 9 && feldNummer <= 16) {piece= whitePawn;}
        
        if(feldNummer === 58 || feldNummer === 63){piece= darkKnight;}
        if(feldNummer === 57 || feldNummer === 64){piece= darkRook;}
        if(feldNummer === 59 || feldNummer === 62){piece= darkBishop;}
        if(feldNummer === 60)                     {piece= darkKing;}
        if(feldNummer === 61)                     {piece= darkQueen;}
        if(feldNummer >= 49 && feldNummer <= 56)  {piece= darkPawn;}

        const fieldProps = {
          className: isDark ? 'dark' : 'white', // CSS-Klasse abhängig von Feldtyp
          feldId: feldNummer,
          piece: piece
        };
        

        chessboard.push(<Chessfield {...fieldProps} key={`${row}-${col}`} />);
      }
    }

    return chessboard;
  };

  return (
    <main>
      <div className='container'>
        <div className='chessboard'>{renderChessboard()}</div>
      </div>
    </main>
  );
};

export default Home;