import { Query, Resolver } from '@nestjs/graphql';
import { RecipeService } from '../services';
import { Recipe } from '../entities/recipe.entity';

@Resolver()
export class RecipeResolver {
  constructor(private readonly recipeService: RecipeService) {}

  @Query(() => [Recipe], { name: 'recipe' })
  findAll() {
    return this.recipeService.findAll();
  }
}
