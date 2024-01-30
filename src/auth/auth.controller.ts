import { Body, Controller, Get, HttpCode, HttpStatus, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @HttpCode(HttpStatus.OK)
    @Post('login')
    signIn(@Body() signInDto: Record<string, string>) {
      return this.authService.signIn(signInDto.username, signInDto.password);
    }

    @Post('signup')
    signUp(@Body() signUpDto: Record<string, string>) {
        return this.authService.signUp(signUpDto.username, signUpDto.password)
    }

    @Get('create-default-user')
    createUser() {
      return this.authService.signUp('admin', '123456')
    }

    @UseGuards(AuthGuard)
    @Get('test')
    test() {
      
    }
}
