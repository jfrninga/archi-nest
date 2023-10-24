import { Module } from '@nestjs/common';
import { SandwichService } from './sandwich.service';
import { SandwichController } from './sandwich.controller';
import { PrismaModule } from 'src/shared/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [SandwichService],
  controllers: [SandwichController],
  exports: [SandwichService]
})
export class SandwichModule {}
