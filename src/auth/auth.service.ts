import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import BcryptUtil from 'src/lib/bcrypt/util';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService
    ) { }

    async signIn(username: string, pass: string) {
        const user = await this.usersService.findByUsername(username);
        if (!user || !BcryptUtil.compareOriginal(pass, user.password)) {
            throw new UnauthorizedException();
        }
        const payload = { sub: user.userId, username: user.username };
        return {
            access_token: await this.jwtService.signAsync(payload),
        };
    }

    async signUp(username: string, pass: string) {
        const user = await this.usersService.create(username, pass)
    }

}