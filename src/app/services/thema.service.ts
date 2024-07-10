import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemaService {
  private temaSubject = new BehaviorSubject<string>('.')
  tema$ = this.temaSubject.asObservable()

  constructor() { }

  setTheme() {
    if(this.temaSubject.value == '.'){
      this.temaSubject.next('light')
    }else if(this.temaSubject.value == 'light') {
      this.temaSubject.next('.')
    }
    console.log(this.temaSubject.value)

    this.updateGlobalTheme(this.temaSubject.value)
  }

  updateGlobalTheme(theme: string): void {
    document.body.className = ''
    document.body.classList.add(theme)
  }
}
