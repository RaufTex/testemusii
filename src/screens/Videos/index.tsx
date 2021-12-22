/**? TELA PARA EXIBIR VÍDEOS (NÃO COMPLETA) */

import React, { useState, useEffect, useCallback } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import { styles } from './styles';
import YoutubePlayer from 'react-native-youtube-iframe';

export function Videos() {
  const [playing, setPlaying] = useState(false);
  const onStateChange = useCallback(state => {
    if (state === 'ended') {
      setPlaying(false);
    }
  }, []);
  const togglePlaying = useCallback(() => {
    setPlaying(prev => !prev);
  }, []);
  return (
    <View style={styles.container}>
      <Text>Teste</Text>
      <YoutubePlayer
        width={300}
        height={300}
        play={playing}
        videoId={'iee2TATGMyI'}
        onChangeState={onStateChange}
      />
    </View>
  );
}
