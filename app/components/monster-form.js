import Ember from 'ember';

export default Ember.Component.extend({
	actions:{
		save(){
			debugger;
			this.attrs.save();
			console.log("FORM");
		}
	}
});
