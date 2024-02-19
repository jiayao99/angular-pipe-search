import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../app.component';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {

  transform(users: User[], prompt: string): User[] {
    if (!prompt) return users;

    prompt = prompt.toLowerCase();

    return users.filter(user => 
      user.firstName.toLowerCase().includes(prompt) ||
      user.lastName.toLowerCase().includes(prompt));
  }

}
