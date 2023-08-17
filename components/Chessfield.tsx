import ChessfieldBlueprint from '@/models/ChessfieldBlueprint';
import Chesspiece from '@/models/chesspiece';
import FieldColor from '@/utils/FieldColor';
import React, { useState } from 'react';
  
export default function Chessfield({fieldBlueprint, updateChessboard} : {fieldBlueprint : ChessfieldBlueprint, updateChessboard: (fieldBlueprint: ChessfieldBlueprint, destinationId: number)=>void}){
  const hasPiece = fieldBlueprint.piece.path?true:false
  const className = fieldBlueprint.color === FieldColor.DARK?"dark":"white"
  
    const [isActive, setIsActive] = useState(false)
    return (
    <div 
    onClick={
      ()=>{
        if(hasPiece){
          updateChessboard(fieldBlueprint, 36)
          console.log(fieldBlueprint.piece)
          setIsActive(!isActive)
        }
      
      }
    }
    className={isActive?`chessfield isActive`:`chessfield ${className}`}>
      {fieldBlueprint.piece.path?<img src={fieldBlueprint.piece.path} width={100} height={100} alt="" />:fieldBlueprint.fieldId}
      
    </div>);
}
