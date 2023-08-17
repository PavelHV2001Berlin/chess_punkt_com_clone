
import Chesspiece from '@/models/chesspiece';

import FieldColor from '@/utils/FieldColor';

export default class ChessfieldBlueprint{
   
    color: FieldColor = FieldColor.WHITE;
    fieldId: number = 0;
    piece: Chesspiece = new Chesspiece("")
    //chessboard: Array<ChessfieldBlueprint> = []
    constructor(color: FieldColor, fieldId: number, piece: Chesspiece){
        this.color = color;
        this.fieldId = fieldId;
        this.piece = piece;
      //  this.chessboard = chessboard
    }


    public movePiece(destinationId: number, chessboard: ChessfieldBlueprint[]):void{
        if(this.piece.path){
            chessboard.forEach((field: ChessfieldBlueprint, index: number)=>{
                if(field.fieldId === destinationId){
                    field.piece = this.piece;
                    this.piece = new Chesspiece("");

                }
            })
        }else{
            console.log("no piece!")
        }
    }
    

}