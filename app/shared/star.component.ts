
import { Component, OnChanges, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'ai-star',
    moduleId:module.id,
    templateUrl: 'star.component.html',
    styleUrls: ['star.component.css']
})
export class StarComponent implements OnChanges
{
    @Input() rating: number;
    starWidth: number;
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

        ngOnChanges(): void {
            this.starWidth = this.rating *90/5;
        }

        onClick(): void{
            this.ratingClicked.emit(`Rated as ${this.rating} stars.`)
        }

}