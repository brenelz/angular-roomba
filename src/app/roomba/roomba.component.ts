import { Component } from '@angular/core';

@Component({
  selector: 'app-roomba',
  templateUrl: './roomba.component.html',
  styleUrls: ['./roomba.component.scss']
})
export class RoombaComponent {
  coord: [number, number] = [0, 0];
  pointer = '👉';
  timer: number | undefined;

  ngOnInit() {
    this.timer = window.setInterval(() => this.move(), 1000);
  }

  togglePointer() {
    if (this.pointer === '👉') {
      this.pointer = '👇';
    } else if (this.pointer === '👇') {
      this.pointer = '👈';
    } else if (this.pointer === '👈') {
      this.pointer = '👆';
    } else if (this.pointer === '👆') {
      this.pointer = '👉';
    }
  }

  ngOnDestroy() {
    clearTimeout(this.timer);
  }

  move() {
    let [x, y] = this.coord;
    if (this.pointer === '👉') {
      y += 1;
    } else if (this.pointer === '👇') {
      x += 1;
    } else if (this.pointer === '👈') {
      y -= 1;
    } else if (this.pointer === '👆') {
      x -= 1;
    }

    if (x > 4) {
      x = 4;
      this.togglePointer();
    }

    if (y > 4) {
      y = 4;
      this.togglePointer();
    }

    if (x < 0) {
      x = 0;
      this.togglePointer();
    }

    if (y < 0) {
      y = 0;
      this.togglePointer();
    }

    this.coord = [x, y];
  }
}
