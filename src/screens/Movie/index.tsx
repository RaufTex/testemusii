import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  ImageBackground,
  Image,
  TouchableOpacity,
  Button,
} from 'react-native';
import { styles } from './styles';
import api from '../../services/api';
const image = { uri: 'https://reactjs.org/logo-og.png' };
import {
  Ionicons,
  Foundation,
  AntDesign,
  Feather,
  MaterialCommunityIcons,
  EvilIcons,
} from '@expo/vector-icons';
import { ModalTrailer } from '../../components/ModalTrailer/index';
interface IMovieInfo {
  genres: {
    name: string;
  };
  title: string;
  vote_average: number;
  production_countries: {
    iso_3166_1: string;
  };
  runtime: number;
  release_date: string;
}

function converter(minutos) {
  const horas = Math.floor(minutos / 60);
  const min = minutos % 60;
  const textoHoras = `00${horas}h`.slice(-2);
  const textoMinutos = `00${min}m`.slice(-2);

  return `${textoHoras}${textoMinutos}`;
}

export function Movie({ route, navigation }) {
  const [info, setInfo] = useState<IMovieInfo[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(async () => {
    await api
      .get<IMovieInfo>(
        `/movie/${route.params.id}?api_key=858f17a7996d7f0c258bb2a983c6ab24&language=pt-BR`
      )
      .then(response => {
        setInfo(response.data);
        console.log(response.data);
      });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.imageMovie}>
        <ImageBackground
          source={{
            uri: `https://image.tmdb.org/t/p/original/${info.backdrop_path}`,
          }}
          style={styles.image}
          imageStyle={{
            borderBottomRightRadius: 24,
            borderBottomLeftRadius: 24,
          }}
        >
          <View style={styles.goBack}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <AntDesign name='arrowleft' size={34} color={'white'} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <AntDesign name='close' size={34} color={'white'} />
            </TouchableOpacity>
          </View>

          <Text style={styles.title}>{info.title}</Text>
          <Text style={styles.subtitle}>
            <Text style={styles.vote}>IMDB </Text>
            {info.vote_average}
          </Text>
          <View style={styles.genres}>
            {info &&
              info?.genres?.map(item => {
                return (
                  <Text key={item.id} style={styles.genresTitle}>
                    {item.name},{' '}
                  </Text>
                );
              })}
          </View>
          <View style={styles.runtime}>
            <Text style={styles.genresTitle}>
              {info?.release_date?.substr(0, 4)},{' '}
            </Text>
            {info?.production_countries?.map(item => {
              return (
                <Text style={styles.genresTitle} key={item.name}>
                  {item.iso_3166_1},{' '}
                </Text>
              );
            })}
            <Text style={styles.genresTitle}>{converter(info.runtime)}</Text>
          </View>
          <View style={styles.favorites}>
            <ModalTrailer props={route.params.id} />

            <TouchableOpacity>
              <EvilIcons name='star' size={34} color={'white'} />
            </TouchableOpacity>
            <TouchableOpacity>
              <EvilIcons name='share-google' size={34} color={'white'} />
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
      <Text style={styles.infoTitle}>Movie info</Text>
      {info.overview ? (
        <Text style={styles.overview}>{info.overview}</Text>
      ) : (
        <Text style={styles.overview}>Sem Info</Text>
      )}
      {/* <Text style={styles.infoTrailer}>Trailer</Text> */}
    </View>
  );
}
