import DS from 'ember-data';
import attr from 'ember-data/attr';  
export default DS.Model.extend({
 title: attr('string'),
  level: attr('string'),
  image: attr('string'),
  blurb: attr('string')
});
