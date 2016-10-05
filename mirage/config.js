
export default function() {

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.2.x/shorthands/
  */
var datas = 
        [{
        type: 'monsters',
        id: 1,
        attributes: {
          title: 'Charmender',
          level: '12',
          image: '/images/charmender.png',
          blurb: 'Along with Bulbasaur and Squirtle, Charmander is one of three starter Pokémon of Kanto available at the beginning of Pokémon Red, Green, Blue, FireRed, and LeafGreen.'
        }},
        {
        type: 'monsters',
        id: 2,
        attributes: {
          title: 'pikachu',
          level: '20',
          image: '/images/pikachu.png',
          blurb: "Pikachu is popularly known as the mascot of the Pokémon franchise and a major representative of Nintendo's collective mascots."
        }},
        {
        type: 'monsters',
        id: 3,
        attributes: {
          title: 'mew',
          level: '40',
          image: '/images/mew.jpg',
          blurb: "Mew  is one of the fictional species of creatures from Nintendo's and Game Freak's Pokémon media franchise created by Satoshi Tajiri. Mew is a small, pink, Psychic-type Mythical Pokémon."
        }}

      ];

  this.get('/monsters', function() {
    return {data:datas};
  });


  this.get('/monsters/:details_id', function(db,request) {
    //console.log(data);
    var id = request.params.details_id;
    console.log(id);
    return {data:datas[id-1]};
  });


}
