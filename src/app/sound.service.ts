import {Injectable, OnInit} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SoundService {
  private sounds: Map<string, any> = new Map();

  constructor() { }

  init() {
    this.sounds.set('place stone', new Audio('../assets/bounce.wav'));
  }

  play(soundKey: string) {
    if (this.sounds.has(soundKey)) {
      const sound = this.sounds.get(soundKey);
      sound.load();
      sound.addEventListener('canplay', () => sound.play());
    }
  }
}