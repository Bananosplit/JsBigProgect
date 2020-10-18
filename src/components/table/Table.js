import { createTable } from "./table.template"
// const { ExelComponent } = require("../../core/ExelComponent")
import {ExelComponent} from "../../core/ExelComponent"

export class Table extends ExelComponent{
    static ClassName = 'excel__table'
    constructor ($root){
        super($root, {
            listeners: ['click']
        })
    }
    toHTML(){
        return createTable(50)
    }

  

}