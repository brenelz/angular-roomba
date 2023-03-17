import { Component, Input } from '@angular/core';


function range(size: number, startAt = 0) {
  return [...Array(size).keys()].map(i => i + startAt);
}

@Component({
  selector: 'app-roomba-grid',
  templateUrl: './roomba-grid.component.html',
  styleUrls: ['./roomba-grid.component.scss']
})
export class RoombaGridComponent {
  @Input() coord!: [number, number];
  @Input() pointer!: string;

  grid = range(5).map(_ => range(5).map(_ => ''));
}
