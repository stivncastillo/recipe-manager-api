import { Injectable } from '@nestjs/common';
import { CreateGroceryListInput } from './dto/create-grocery-list.input';
import { UpdateGroceryListInput } from './dto/update-grocery-list.input';

@Injectable()
export class GroceryListService {
  create(createGroceryListInput: CreateGroceryListInput) {
    return 'This action adds a new groceryList';
  }

  findAll() {
    return `This action returns all groceryList`;
  }

  findOne(id: number) {
    return `This action returns a #${id} groceryList`;
  }

  update(id: number, updateGroceryListInput: UpdateGroceryListInput) {
    return `This action updates a #${id} groceryList`;
  }

  remove(id: number) {
    return `This action removes a #${id} groceryList`;
  }
}
