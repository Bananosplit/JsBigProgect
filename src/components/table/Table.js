import { createTable } from "./table.template"
import { ExelComponent } from "../../core/ExelComponent"
import { resizeHandler } from './table.resize'
import { shouldResize } from './table.functions'


export class Table extends ExelComponent {
    static ClassName = 'excel__table'
    constructor($root) {
        super($root, {
            listeners: ['mousedown']
        })
    }
    toHTML() {
        return createTable(50)
    }

    onMousedown(event) {
        if (shouldResize(event)) {
            resizeHandler(this.$root, event)
        }
    }

}