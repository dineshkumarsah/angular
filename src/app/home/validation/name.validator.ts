import {AbstractControl} from '@angular/forms'


export function nameValid(control: AbstractControl){
    if(!control.value.startsWith('ht')){
       return {validname:true}
    }
    return null;
}
export function shouldBeNum(control:AbstractControl){
    if(isNaN(control.value)){
        return {validId:true}
    }
    return null
}