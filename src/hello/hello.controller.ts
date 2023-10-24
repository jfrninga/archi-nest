import { Controller, Get } from '@nestjs/common';
import { Public } from 'src/auth/public.decorator';

@Controller('hello')
export class HelloController {
    @Get()
    getHello() {
        return "Hello, World!";
    }

    
}
