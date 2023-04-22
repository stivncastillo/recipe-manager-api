import { Module } from '@nestjs/common';
import { PlanService, RecipeService, IngredientService } from './services';
import { PlanResolver, RecipeResolver, IngredientResolver } from './resolvers';

@Module({
  providers: [
    PlanResolver,
    PlanService,
    RecipeService,
    RecipeResolver,
    IngredientService,
    IngredientResolver,
  ],
})
export class PlanModule {}
