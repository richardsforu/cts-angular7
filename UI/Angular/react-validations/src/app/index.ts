import {AbstractControl} from '@angular/forms';
let badWords=[
    'idiot',
    'hell',
    'slap'
];

export function myCustomValidations(a:AbstractControl):{[key:string]:boolean}{
  //  console.log(a.value);
    if(badWords.includes(a.value))
    return{'bad':true}
}
