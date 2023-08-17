"use client"
import React, { useEffect, useState } from 'react';
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

import Chessfield from '@/components/Chessfield';
import Chesspiece from '@/models/chesspiece';
import PieceColor from '@/utils/PieceColor';
import PieceName from '@/utils/PieceName';
import ChessfieldBlueprint from '@/models/ChessfieldBlueprint';
import FieldColor from '@/utils/FieldColor';





const Home = () => {
  const numRows = 8; // Anzahl der Zeilen
  const numCols = 8; // Anzahl der Spalten
  let feldNummer = 0;
  useEffect(()=>{
   
  },[])

  const updateChessboard = (fieldBlueprint:ChessfieldBlueprint, destinationId: number)=>{
    setChessboard(prevChessboard =>{
      const updatedChessboard = [...prevChessboard];

      
      updatedChessboard[fieldBlueprint.fieldId-1].movePiece(destinationId, updatedChessboard)
    
      return updatedChessboard;
    })
  }
 
  const getDefaultChessboard = () => {
    //single source of truth
    const chessboard:ChessfieldBlueprint[] = [];

    for (let row = 0; row < numRows; row++) {
      for (let col = 0; col < numCols; col++) {
        const isDark = (row + col) % 2 === 1; // Berechnung für dunkle Felder
        feldNummer++
        let pieceSrc = ""
        let piece: Chesspiece = new Chesspiece();
        if(feldNummer === 1 || feldNummer === 8){piece = new Chesspiece(WhiteRook.src, PieceName.ROOK, PieceColor.WHITE, feldNummer);}
        if(feldNummer === 2 || feldNummer === 7){piece = new Chesspiece(WhiteKnight.src, PieceName.KNIGHT, PieceColor.WHITE, feldNummer);}
        if(feldNummer === 3 || feldNummer === 6){piece=  new Chesspiece(WhiteBishop.src, PieceName.BISHOP, PieceColor.WHITE, feldNummer)}
        if(feldNummer === 4)                    {piece= new Chesspiece(WhiteKing.src, PieceName.KING, PieceColor.WHITE, feldNummer);}
        if(feldNummer === 5)                    {piece= new Chesspiece(WhiteQueen.src, PieceName.QUEEN, PieceColor.WHITE, feldNummer);}
        if(feldNummer >= 9 && feldNummer <= 16) {piece= new Chesspiece(WhitePawn.src, PieceName.PAWN, PieceColor.WHITE, feldNummer);}
        
        if(feldNummer === 58 || feldNummer === 63){piece= new Chesspiece(DarkKnight.src, PieceName.KNIGHT, PieceColor.DARK, feldNummer);}
        if(feldNummer === 57 || feldNummer === 64){piece=  new Chesspiece(DarkRook.src, PieceName.ROOK, PieceColor.DARK, feldNummer);}
        if(feldNummer === 59 || feldNummer === 62){piece= new Chesspiece(DarkBishop.src, PieceName.BISHOP, PieceColor.DARK, feldNummer);}
        if(feldNummer === 60)                     {piece= new Chesspiece(DarkKing.src, PieceName.KING, PieceColor.DARK, feldNummer);}
        if(feldNummer === 61)                     {piece= new Chesspiece(DarkQueen.src, PieceName.QUEEN, PieceColor.DARK, feldNummer);}
        if(feldNummer >= 49 && feldNummer <= 56)  {piece= new Chesspiece(DarkPawn.src, PieceName.PAWN, PieceColor.DARK);}
        
        if(piece.path){
          piece.fieldId = feldNummer
        }
      
        
        
       
        const fieldColor:FieldColor = isDark?FieldColor.DARK:FieldColor.WHITE;
        const fieldBlueprint = new ChessfieldBlueprint(fieldColor, feldNummer, piece)
        chessboard.push(fieldBlueprint)
      //  setChessboard(current => [...current, fieldBlueprint])

       // renderedChessboard.push(<Chessfield fieldBlueprint={fieldBlueprint} key={`${row}-${col}`} />);
      }
    }

    return chessboard;
  };
  console.log("HUHUHU Default Chessboardstate")
  const [chessboard, setChessboard] = useState<ChessfieldBlueprint[]>(getDefaultChessboard())//should contain all chessfield objects.

  //TEST_________________
 
//TEST___________________


  console.log(chessboard)


  return (
    <main>
      <div className='container'>
        <div className='chessboard'>{chessboard.map((field: ChessfieldBlueprint, index: number)=>(
          
          <Chessfield key={index} fieldBlueprint={field} updateChessboard={updateChessboard} />
        )
        )}</div>
      </div>
    </main>
  );
};

export default Home;