import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AudioService {

  private audio = new Audio();
  private activeAudioSource: string = "";
  public observableActiveAudioSource: BehaviorSubject<string>;

  constructor() {
    this.observableActiveAudioSource = new BehaviorSubject<string>("");
    this.audio.onended = () => {
      this.activeAudioSource = "";
      this.observableActiveAudioSource.next(this.activeAudioSource);
    };
  }

  public playAudio(audioSource: string): any {
    if (!this.checkStopAudio(audioSource)) {
      this.activeAudioSource = audioSource;
      this.observableActiveAudioSource.next(this.activeAudioSource);
      this.audio.src = audioSource;
      return this.audio;
    }
    else{
      
    }
  }

  public checkStopAudio(audioSource: string): boolean {
    if (this.activeAudioSource == audioSource) {
      this.audio.pause();
      this.audio.currentTime = 0;
      this.activeAudioSource = "";
      this.observableActiveAudioSource.next(this.activeAudioSource);
      return true;
    }
    else {
      return false;
    }
  }
}
