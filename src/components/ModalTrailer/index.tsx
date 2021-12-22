import React, { useState, useEffect, useCallback } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  ImageBackground,
  Image,
  TouchableOpacity,
  Alert,
  Modal,
  StyleSheet,
  Pressable,
} from 'react-native';
import { styles } from './styles';
import {
  Ionicons,
  Foundation,
  AntDesign,
  Feather,
  MaterialCommunityIcons,
  EvilIcons,
} from '@expo/vector-icons';
import YoutubePlayer from 'react-native-youtube-iframe';
import api from '../../services/api';

export function ModalTrailer(props) {
  console.log(props.props);
  const [trailer, setTrailer] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [playing, setPlaying] = useState(false);

  useEffect(async () => {
    console.log('34', props);
    await api
      .get(
        `/movie/${props.props}/videos?api_key=858f17a7996d7f0c258bb2a983c6ab24&language=pt-BR`
      )
      .then(response => {
        setTrailer(response.data);
        console.log('41', response.data.results);
      });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onStateChange = useCallback(state => {
    if (state === 'ended') {
      setPlaying(false);
    }
  }, []);
  const togglePlaying = useCallback(() => {
    setPlaying(prev => !prev);
  }, []);

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType='slide'
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            {trailer?.results
              ?.filter(item => item.type === 'Trailer')
              .map(item => {
                return (
                  <YoutubePlayer
                    key={item.id}
                    width={300}
                    height={300}
                    play={playing}
                    videoId={item.key}
                    onChangeState={onStateChange}
                  />
                );
              })}

            <Pressable
              style={[styles.buttonPlay, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.titleTrailer}>Fechar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.buttonPlay, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.titleTrailer}>Assista ao trailer</Text>
        <Feather name='play' size={24} color={'#E6BA20'} />
      </Pressable>
    </View>
  );
}
