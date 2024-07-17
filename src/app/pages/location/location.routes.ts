import { Routes } from "@angular/router";
import { LocationArea } from "@pages/location/components/location/location";
import { LocationDetailArea } from "@pages/location/components/location-detail/location-detail";
import { IntegerParamGuard } from "@core/guards/IntegerParamGuard";

export const LocationRoutes: Routes = [
  {
    path: '',
    component: LocationArea
  },
  {
    path: ':id',
    component: LocationDetailArea,
    canActivate:[IntegerParamGuard]
  },
];
