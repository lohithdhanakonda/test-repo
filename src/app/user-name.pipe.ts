import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userName'
})
export class UserNamePipe implements PipeTransform {

  transform(value: String, ...args: unknown[]): unknown {
    //considering email will be in test.test@domain.com
    let userName = value.split("@")[0].split(".").join(" ")
    return userName;
  }

}
