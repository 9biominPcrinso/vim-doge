import Bash from 'tree-sitter-bash';
import C from 'tree-sitter-c';
import CPP from 'tree-sitter-cpp';
import PHP from 'tree-sitter-php';
import Python from 'tree-sitter-python';
import TypeScript from 'tree-sitter-typescript/typescript';
import { Language } from './constants';

export const parserLanguages = {
  [Language.PHP]: PHP,
  [Language.TYPESCRIPT]: TypeScript,
  [Language.PYTHON]: Python,
  [Language.C]: C,
  [Language.CPP]: CPP,
  [Language.BASH]: Bash,
};
