import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class OrderService {
  constructor(private prisma: DatabaseService) {}
  async create(createOrderDto: Prisma.OrderCreateInput) {
    return this.prisma.order.create({ data: createOrderDto });
  }

  async findAll() {
    return await this.prisma.employee.findMany();
  }

  async findOne(id: number) {
    return this.prisma.user.findUnique({ where: { id } });
  }

  async update(id: number, updateOrderDto: Prisma.OrderUpdateInput) {
    return this.prisma.order.update({ where: { id }, data: updateOrderDto });
  }

  async remove(id: number) {
    return await this.prisma.order.delete({
      where: { id },
    });
  }
}
