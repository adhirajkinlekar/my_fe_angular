import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convert'
})

export class ConvertPipe implements PipeTransform {

// transform(value: any, ...args: any[]): any { 
// Investigate the reason behind the ability to modify the method signature defined in the interface
   // <p>Your username: {{ 'Leena' | convert: 'user_name'  }}</p> - in the method below, the value of 'value' parameter will be 'Leena'

   transform(value: string | number, type: string): string | number {

    switch(type){
      case 'user_name' : return '@' + value;
         default : return value
    }
   }

}
