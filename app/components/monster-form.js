import Ember from 'ember';

export default Ember.Component.extend({
	actions:{
		save(){

			this.attrs.save(this.get('changeset'));
			console.log("FORM");
		},
		rollback(){
			this.attrs.rollback(this.get('changeset'));
		}
	}
});
