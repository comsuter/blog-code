import { Component } from '@angular/core';
import { User } from './user/user.model';
import { UserService } from './user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  user: User;
  searchedUser: User;

  constructor(public userService: UserService) {
    this.user = new User();
    this.searchedUser = new User();
  }

  // 사용자 조회
  findUser(id: string) {
    const onSuccess = (result: any) => {
      const user = result;
      this.searchedUser = user;
    };

    this.userService.getUser(id, onSuccess);
  }

  // 사용자 생성
  addUser() {
    const newUser = { name: this.user.name, age: this.user.age };
    const callback = (result: any) => {
      const newUser: User = result;
      console.log(JSON.stringify(newUser));
      alert(`사용자 생성\nID:${newUser.id}\n이름:${newUser.name}\n나이:${newUser.age}`);
    };

    this.userService.addUser(newUser, callback);
    this.user = new User();
  }

  // 사용자 변경
  modifyUser() {
    if (this.user.id === "") {
      this.addUser();
      return;
    }

    const callback = (result: any) => {
      const newUser: User = result;
      console.log(JSON.stringify(newUser));
      alert(`사용자 변경\nID:${newUser.id}\n이름:${newUser.name}\n나이:${newUser.age}`);
    }

    this.userService.modifyUser(this.user, callback);
  }

  // 사용자 삭제
  removeUser(id: string) {
    const onSuccess = (result: any) => {
      if (result.status === 204) {
        alert(`사용자 ID:${id} 삭제 성공`);
        console.log(result);
        return;
      }
      alert(`사용자 ID:${id} 삭제 실패`);
    };

    this.userService.removeUser(id, onSuccess);
  }
}
