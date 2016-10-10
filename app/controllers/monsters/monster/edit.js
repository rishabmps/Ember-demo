import Ember from 'ember';

export default Ember.Controller.extend({
	actions:{

		save(changeset){
			
			changeset.save().then(()=>{
        		this.transitionToRoute('monsters.monster.show', this.get("model"));
      		});
		
			console.log("HAHAH");
		},
		rollback(changeset){
			changeset.rollback();
		}

	}
});
