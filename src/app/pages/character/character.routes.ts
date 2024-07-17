import { Routes } from "@angular/router";
import { CharacterDetailArea } from "@pages/character/components/character-detail/characters-detail"
import { CharacterArea } from "./components/character/characters";
import { IntegerParamGuard} from '@app/core/guards/IntegerParamGuard'
export const CharacterRoutes: Routes = [
  {
    path: '',
    component: CharacterArea
  },
  {
    path:':id',
    component:CharacterDetailArea,
    canActivate:[IntegerParamGuard],
  }
];
