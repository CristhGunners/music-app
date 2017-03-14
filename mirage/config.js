export default function() {
  this.namespace = '/api';

  this.get('/discs', function() {
    return {
      data: [{
        type: 'discs',
        id: 'teen',
        attributes: {
          title: 'Teen',
          artist: 'Pearl Jam',
          year: 1991,
          cover: 'https://upload.wikimedia.org/wikipedia/en/thumb/2/2d/PearlJam-Ten2.jpg/220px-PearlJam-Ten2.jpg'
        }
      }, {
        type: 'discs',
        id: 'nevermind',
        attributes: {
          title: 'Nevermind',
          artist: 'Nirvana',
          year: 1991,
          cover: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/b7/NirvanaNevermindalbumcover.jpg/220px-NirvanaNevermindalbumcover.jpg'
        }
      }, {
        type: 'discs',
        id: 'alice-in-chains',
        attributes: {
          title: 'Alice In Chains',
          artist: 'Alice In Chains',
          year: 1995,
          cover: 'https://upload.wikimedia.org/wikipedia/en/thumb/2/24/Alice_in_Chains_%28album%29.jpg/220px-Alice_in_Chains_%28album%29.jpg'
        }
      }]
    };
  });
}
