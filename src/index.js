import {Word} from './components/word/Word.js';
import {Header} from './components/Header/Header.js';
import {Toolbar} from './components/Toolbar/Toollbar.js';

const word = new Word('#app', {
  components: [Header, Toolbar]
});

word.render()
