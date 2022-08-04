import { Injectable } from '@nestjs/common';
import { User, BookMark } from '@prisma/client';

@Injectable({})
export class AuthService {
  signUp() {
    return { message: 'I have signed up' };
  }

  signIn() {
    return { message: 'I have signed in' };
  }
}
