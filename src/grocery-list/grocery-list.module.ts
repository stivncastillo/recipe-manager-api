import { Module } from '@nestjs/common';
import { GroceryListService } from './grocery-list.service';
import { GroceryListResolver } from './grocery-list.resolver';

@Module({
  providers: [GroceryListResolver, GroceryListService]
})
export class GroceryListModule {}
