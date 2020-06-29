const AVATAR_URL = `https://api.adorable.io/avatars/128`;

export const questions = [
  {
    type: `genre`,
    genre: `rock`,
    answers: [{
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
      genre: `rock`,
      id: 0,
    }, {
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
      genre: `blues`,
      id: 1,
    }, {
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
      genre: `jazz`,
      id: 2,
    }, {
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
      genre: `rock`,
      id: 3,
    }],
  }, {
    type: `artist`,
    song: {
      artist: `Jim Beam`,
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
    },
    answers: [{
      picture: `${AVATAR_URL}/A`,
      artist: `John Snow`,
      id: 4,
    }, {
      picture: `${AVATAR_URL}/AB`,
      artist: `Jack Daniels`,
      id: 5,
    }, {
      picture: `${AVATAR_URL}/ABC`,
      artist: `Jim Beam`,
      id: 6,
    }],
  },

];
