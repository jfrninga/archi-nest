import { Controller, Get, Param } from '@nestjs/common';
import { SandwichService } from './sandwich.service';

@Controller('sandwich')
export class SandwichController {
  constructor(private readonly sandwichService: SandwichService) {}

  @Get()
  findAll() {
    return this.sandwichService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sandwichService.findOne(+id); 
  }
}   
