import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiConsumes, ApiProduces } from '@nestjs/swagger';
import { Public } from './public.decorator';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @ApiConsumes("application/json")
    @ApiProduces("application/json")
    @Public()
    @Post("login")
    async login(@Body() user: { username: string, password: string }) {
        return this.authService.login(user);
    }
}
