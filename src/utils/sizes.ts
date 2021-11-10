import {StyleSheet, Dimensions} from 'react-native';
import {scale} from 'react-native-size-matters';
import { wp } from '.';

export const fonts = StyleSheet.create({
  headerTitle: {
    fontSize: scale(24),
    fontWeight: 'bold',
    letterSpacing: 0.41,
  },
  title: {
    fontSize: scale(17),
    fontWeight: 'bold',
    letterSpacing: 0.41,
  },
  itemTitle: {
    fontSize: scale(17),
    fontWeight: '400',
    letterSpacing: 0.41,
  },
  subheading: {
    fontSize: scale(15),
    fontWeight: 'normal',
    letterSpacing: -0.24,
  },
  textInput: {
    fontSize: scale(15),
    fontWeight: 'normal',
  },
  bigButtonText: {
    fontSize: scale(17),
    fontWeight: '700',
  },
  buttonText: {
    fontSize: scale(14),
    fontWeight: '600',
  },
  caption: {
    fontSize: scale(12),
    fontWeight: 'normal',
    letterSpacing: -0.08,
  },
  modalTitle: {
    fontSize: scale(17),
    fontWeight: '700',
  },
  tabBar: {
    fontSize: scale(11),
  },
  navigationLink: {
    fontSize: scale(17),
    fontWeight: 'normal',
  },
  body: {
    fontSize: scale(15),
    fontWeight: 'normal',
    letterSpacing: -0.41,
  },
  searchBarText: {
    fontSize: scale(17),
    fontWeight: 'normal',
  },

  modalTitleDescription: {
    fontSize: scale(13),
    fontWeight: 'normal',
  },
  modalTextInput: {
    fontSize: scale(13),
    fontWeight: 'normal',
  },
  modalButton: {
    fontSize: scale(17),
    fontWeight: '700',
  },
});

export const navigationIconSize = scale(30);
export const regularIconSize = scale(17);
export const margin = wp(4)