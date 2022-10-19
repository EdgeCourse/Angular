import { Pipe, PipeTransform } from "@angular/core"; 
@Pipe({ 
name: "favorite", 
pure: false
})
export class FavoriteFilterPipe implements PipeTransform{
	transform(array_instance){
		return array_instance.filter(function(item){
			if(typeof item.favorite !== 'undefined' ){
return item.favorite;
  }else{
//ignore filter if favorite not a property return true;
  }
		});
	}
}