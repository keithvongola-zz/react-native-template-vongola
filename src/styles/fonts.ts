import { TextStyle } from 'react-native';

interface IFonts {
  biggest: number;
  bigger: number;
  big: number;
  regular: number;
  small: number;
  smaller: number;

  thinnest: TextStyle['fontWeight'];
  thinner: TextStyle['fontWeight'];
  thin: TextStyle['fontWeight'];
  normal: TextStyle['fontWeight'];
  bold: TextStyle['fontWeight'];
  bolder: TextStyle['fontWeight'];
  boldest: TextStyle['fontWeight'];
}

const fonts = {
  // Sizes
  biggest: 28,
  bigger: 24,
  big: 16,
  regular: 14,
  small: 12,
  smaller: 11,

  // Weights
  thinnest: '100',
  thinner: '200',
  thin: '300',
  normal: 'normal',
  bold: '700',
  bolder: '800',
  boldest: '900',
} as IFonts;

export default fonts;
