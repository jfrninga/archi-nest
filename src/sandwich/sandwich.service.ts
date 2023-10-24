import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/prisma/prisma.service';
import { Sandwich } from '.prisma/client';

@Injectable()
export class SandwichService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(): Promise<Sandwich[]> {
    return this.prisma.sandwich.findMany();
  }

  async findOne(id: number): Promise<Sandwich> {
    return this.prisma.sandwich.findUnique({
      where: { id },
    });
  }
}
