import React from 'react';
import {RootNavigator} from './navigation/RootNavigator';
import {Provider as PaperProvider} from 'react-native-paper';

interface IProps {
  theme: any;
}

const Entry = ({theme}: IProps) => {
  return (
    <PaperProvider theme={theme}>
      <RootNavigator theme={theme} />
    </PaperProvider>
  );
};

export default Entry;
