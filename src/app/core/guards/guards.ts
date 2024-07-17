import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot } from "@angular/router";

export const IsNumberParameter : CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot)=>{
    const id = route.paramMap.get('id');
    if(!id){
        console.log("not found id parameter");
        return false;
    }
    const isNumeric = /^\d+$/.test(id);

    if(!isNumeric){
        return false;
    }
    console.log("CanActivateFn");
    return  true;
}