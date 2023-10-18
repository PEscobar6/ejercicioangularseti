import { Component } from '@angular/core';
import { isMutant } from '../utils/mutant-detector';

@Component({
  selector: 'app-mutant-detector',
  templateUrl: './mutant-detector.component.html',
  styleUrls: ['./mutant-detector.component.css']
})
export class MutantDetectorComponent {
  dnaInput: string = '';
  result: boolean | null = null;

  checkMutant() {
    if (this.dnaInput.length === 6) {
      const dnaArray = this.dnaInput.split('');
      this.result = isMutant(dnaArray);
    } else {
      this.result = null;
      alert('El ADN debe tener exactamente 6 caracteres.');
    }

  }
}
