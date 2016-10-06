import Ember from 'ember';

export default Ember.Controller.extend({
	actions:{
		save(){
			debugger;
			this.get("model").save();
			console.log(this.get("model"));
			console.log("HAHAH");
		}

	}
});
