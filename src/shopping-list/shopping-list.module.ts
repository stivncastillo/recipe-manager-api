import { Module } from '@nestjs/common';
import { ShoppingListService } from './shopping-list.service';
import { ShoppingListResolver } from './shopping-list.resolver';

@Module({
  providers: [ShoppingListResolver, ShoppingListService]
})
export class ShoppingListModule {}
