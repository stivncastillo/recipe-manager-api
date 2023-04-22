import { Injectable } from '@nestjs/common';

@Injectable()
export class IngredientService {
  findAll() {
    return `This action returns all ingredients`;
  }

  findOne(id: string) {
    return `This action returns a #${id} ingredient`;
  }
}
