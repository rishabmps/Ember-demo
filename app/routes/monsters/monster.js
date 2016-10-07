import Ember from 'ember';

export default Ember.Route.extend({
 model(params){

 		console.log(params);
		
		var retval=this.store.findRecord('monster',params.monster_id);
		
		 return retval;
		 
	}

});
