import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipe-example.component.html',
  styleUrl: './pipe-example.component.scss'
})
export class PipesExampleComponent {

  name: string = '';

  preventWhitespace(event: KeyboardEvent): void {
    if (event.key === ' ') {
      event.preventDefault();
    }
  }
}
