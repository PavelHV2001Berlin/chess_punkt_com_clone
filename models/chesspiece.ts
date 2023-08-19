import react, { ReactElement } from "react";
import Chessfield from "@/components/Chessfield";
import PieceColor from "@/utils/PieceColor";
import PieceName from "@/utils/PieceName";
export default class Chesspiece{
    path: string = ''
    name: PieceName = PieceName.PAWN
    color: PieceColor = PieceColor.WHITE
    fieldId: number = 0;
    isActivePiece: boolean = false;
    possibleDestinationFields: Array<number> = []
    constructor(path:string = "", name: PieceName = PieceName.PAWN, color: PieceColor = PieceColor.WHITE, fieldId: number = 0){
        if(path){
            console.log("Piece initialized")
            this.path = path;
            this.name = name;
            this.color = color;
            this.calculatePossibleDestinationFields()
            this.fieldId = fieldId;
        }
       
    }
    
    public calculatePossibleDestinationFields():void{
        this.possibleDestinationFields.push(28)
    }
    public setFeldId(id:number):void{
        this.fieldId = id;
    }
}