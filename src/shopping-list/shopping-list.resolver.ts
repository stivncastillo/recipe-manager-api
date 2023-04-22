import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ShoppingListService } from './shopping-list.service';
import { ShoppingList } from './entities/shopping-list.entity';
import { CreateShoppingListInput } from './dto/create-shopping-list.input';
import { UpdateShoppingListInput } from './dto/update-shopping-list.input';

@Resolver(() => ShoppingList)
export class ShoppingListResolver {
  constructor(private readonly shoppingListService: ShoppingListService) {}

  @Mutation(() => ShoppingList)
  createShoppingList(@Args('createShoppingListInput') createShoppingListInput: CreateShoppingListInput) {
    return this.shoppingListService.create(createShoppingListInput);
  }

  @Query(() => [ShoppingList], { name: 'shoppingList' })
  findAll() {
    return this.shoppingListService.findAll();
  }

  @Query(() => ShoppingList, { name: 'shoppingList' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.shoppingListService.findOne(id);
  }

  @Mutation(() => ShoppingList)
  updateShoppingList(@Args('updateShoppingListInput') updateShoppingListInput: UpdateShoppingListInput) {
    return this.shoppingListService.update(updateShoppingListInput.id, updateShoppingListInput);
  }

  @Mutation(() => ShoppingList)
  removeShoppingList(@Args('id', { type: () => Int }) id: number) {
    return this.shoppingListService.remove(id);
  }
}
