import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {
  signin() {
    return { msg: "I've signed in" };
  }

  signup() {
    return { msg: "I've signed up" };
  }
}
