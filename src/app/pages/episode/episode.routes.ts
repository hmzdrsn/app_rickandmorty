import { Routes } from "@angular/router";
import { EpisodeArea } from "@pages/episode/components/episode/episodes";
import { EpisodeDetailArea } from "@pages/episode/components/episode-detail/episode-detail";
import { IntegerParamGuard } from "@core/guards/IntegerParamGuard";
export const EpisodeRoutes: Routes = [
  {
    path: '',
    component: EpisodeArea
  },
  {
    path: ':id',
    component: EpisodeDetailArea,
    canActivate:[IntegerParamGuard]
  },
];
