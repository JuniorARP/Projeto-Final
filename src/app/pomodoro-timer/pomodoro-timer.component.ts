import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pomodoro-timer',
  templateUrl: './pomodoro-timer.component.html',
  styleUrls: ['./pomodoro-timer.component.css'],
})
export class PomodoroTimerComponent implements OnInit {
  workDuration: number = 25;
  breakDuration: number = 5;
  timer: number | null;
  isWorking: boolean;

  constructor() {
    this.timer = null;
    this.isWorking = true;
  }

  ngOnInit() {
    console.log('Pomodoro Timer started!');
    this.tick();
  }

  tick() {
    this.timer = setInterval(() => {
      if (this.isWorking) {
        this.workDuration--;
        if (this.workDuration === 0) {
          console.log('Time for a break!');
          clearInterval(this.timer!);
          this.timer = null;
          this.isWorking = false;
          this.startBreak();
        }
      } else {
        this.breakDuration--;
        if (this.breakDuration === 0) {
          console.log('Break is over. Time to work again!');
          clearInterval(this.timer!);
          this.timer = null;
          this.isWorking = true;
          this.tick();
        }
      }
    }, 1000); // 1 second interval (adjust as needed)
  }

  startBreak() {
    console.log('Break started!');
    this.tick();
  }
}
