import Ember from 'ember';

export default Ember.Route.extend({
 model(params){


		
		var retval=this.store.find('monster',params.details_id);
		
		 return retval;
		 
	}

});
