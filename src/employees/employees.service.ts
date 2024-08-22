import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class EmployeesService {
  constructor(private readonly dbService: DatabaseService) {}
  async create(createEmployeeDto: Prisma.EmployeeCreateInput) {
    return await this.dbService.employee.create({
      data: createEmployeeDto,
    });
  }

  async findAll() {
    return await this.dbService.employee.findMany({ take: 10 });
  }

  async findOne(id: number) {
    return await this.dbService.employee.findUnique({
      where: { id },
    });
  }

  async update(id: number, updateEmployeeDto: Prisma.EmployeeUpdateInput) {
    return await this.dbService.employee.update({
      where: { id },
      data: updateEmployeeDto,
    });
  }

  async remove(id: number) {
    return await this.dbService.employee.delete({
      where: { id },
    });
  }
}
