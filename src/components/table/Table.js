import { createTable } from "./table.template";

const { ExelComponent } = require("../../core/ExelComponent");

export class Table extends ExelComponent{

    static ClassName = 'excel__table'
    toHTML(){
        return createTable(50)
    }

}