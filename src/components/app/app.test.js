import {App} from "./app.jsx";
import React from "react";
import renderer from "react-test-renderer";


const props = {
  questions: [
    {
      type: `genre`,
      genre: `rock`,
      answers: [{
        src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
        genre: `rock`,
        id: 1212,
      }, {
        src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
        genre: `blues`,
        id: 89,
      }, {
        src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
        genre: `jazz`,
        id: 343434,
      }, {
        src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
        genre: `rock`,
        id: 1212,
      }],
    }, {
      type: `artist`,
      song: {
        artist: `Jim Beam`,
        src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
      },
      answers: [{
        picture: `https://api.adorable.io/avatars/128/1`,
        artist: `John Snow`,
        id: 9090,
      }, {
        picture: `https://api.adorable.io/avatars/128/2`,
        artist: `Jack Daniels`,
        id: 43444,
      }, {
        picture: `https://api.adorable.io/avatars/128/3`,
        artist: `Jim Beam`,
        id: 908,
      }],
    },
  ],
  errorsCount: 3,
  onUserAnswer: jest.fn(),
  onWelcomeButtonClick: jest.fn,

};


describe(`Render App`, () => {
  it(`Render WelcomeScreen`, () => {
    const tree = renderer
      .create(<App
        {...props}
        step={-1}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Render GenreQuestionScreen`, () => {
    const tree = renderer
      .create(<App
        {...props}
        step={0}
      />, {
        createNodeMock: () => {
          return {};
        }
      })
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Render ArtistQuestionScreen`, () => {
    const tree = renderer
      .create(<App
        {...props}
        step={1}
      />, {
        createNodeMock: () => {
          return {};
        }
      })
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
