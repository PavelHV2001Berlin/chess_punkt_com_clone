import ChessfieldBlueprint from '@/models/ChessfieldBlueprint';
import Chesspiece from '@/models/chesspiece';
import FieldColor from '@/utils/FieldColor';
import React, { useState } from 'react';
  
export default function Chessfield({fieldBlueprint, tryMove, setFieldActive, children} : {fieldBlueprint : ChessfieldBlueprint, tryMove: (fieldBlueprint: ChessfieldBlueprint)=>void, setFieldActive: (fieldBlueprint: ChessfieldBlueprint)=>void, children: any}){
  const hasPiece = fieldBlueprint.piece.path?true:false
  let className = fieldBlueprint.color === FieldColor.DARK?"dark":"white"
  
    //const [isActive, setIsActive] = useState(false)
   
    return (
    <div 
    onClick={
      ()=>{
        if(hasPiece){
         /* movePieceState(fieldBlueprint, Math.floor(Math.random()*64)+1)
          console.log(fieldBlueprint.piece)*/
         // fieldBlueprint.isActive = !fieldBlueprint.isActive
         setFieldActive(fieldBlueprint);
        }else{
          //check if move eligible
          tryMove(fieldBlueprint)
        }
        console.log("fieldblueprnt");
        console.log(fieldBlueprint);
      
      }
    }
    className={ fieldBlueprint.isActive?`chessfield isActive`:`chessfield ${className}`}>
      {children}
    </div>);
}
