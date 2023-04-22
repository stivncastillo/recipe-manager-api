import { Injectable } from '@nestjs/common';

@Injectable()
export class RecipeService {
  findAll() {
    return `This action returns all recipes`;
  }
}
