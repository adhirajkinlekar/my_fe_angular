import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convert'
})

export class ConvertPipe implements PipeTransform {

// transform(value: any, ...args: any[]): any { 
// Investigate the reason behind the ability to modify the method signature defined in the interface
   transform(value: string | number, type: string): string | number {

    switch(type){
      case 'user_name' : return '@' + value;
         default : return value
    }
   }

}
