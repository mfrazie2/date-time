const React = require('react');
const {render} = require('react-dom');
const {Deck, Slide, Spectacle} = require('spectacle');
const createTheme = require('spectacle/lib/themes/default')['default'];

const CodeSlide = require('spectacle-code-slide');
const code = require('./code');

const theme = createTheme({
  primary: 'white',
  quartenary: '#122b45'
});

class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={[]} transitionDuration={0} progress="bar">
          <CodeSlide transition={[]} lang="js" code={code} ranges={[
            { loc: [0, 33], title: 'Date Time' },
            { loc: [0, 1] },
            { loc: [1, 2] },
            { loc: [2, 3] },
            { loc: [4, 5] },
            { loc: [6, 7] },
            { loc: [7, 8] },
            { loc: [8, 9] },
            { loc: [9, 10] },
            { loc: [11, 12] },
            { loc: [13, 22] },
            { loc: [13, 14] },
            { loc: [14, 15] },
            { loc: [15, 16] },
            { loc: [16, 17] },
            { loc: [17, 18] },
            { loc: [18, 19] },
            { loc: [19, 20] },
            { loc: [23, 32] },
            { loc: [23, 24] },
            { loc: [24, 25] },
            { loc: [25, 26] },
            { loc: [26, 27] },
            { loc: [27, 28] },
            { loc: [28, 29] },
            { loc: [29, 30] },
            { loc: [33, 34] },
          ]}
        />
        </Deck>
      </Spectacle>
    );
  }
}


render(<Presentation/>, document.getElementById("root"));
