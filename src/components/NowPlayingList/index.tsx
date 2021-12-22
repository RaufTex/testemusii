import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { styles } from '../styles/styles';
import { Movie } from '../../screens/Movie/index';
import api from '../../services/api';
import { useNavigation } from '@react-navigation/native';

interface IMovie {
  poster_path: string;
  title: string;
  vote_average: number;
}

export function NowPlayingList() {
  const navigation = useNavigation();
  const [movies, setMovies] = useState<IMovie[]>([]);
  useEffect(() => {
    api
      .get<IMovie>(
        '/movie/now_playing?api_key=858f17a7996d7f0c258bb2a983c6ab24&language=pt-BR'
      )
      .then(response => {
        setMovies(response.data.results);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const onPress = () => {
    navigation.navigate('Movie');
  };

  const CategoryItem: React.FC<ItemProps> = ({ item }) => (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('Movie', {
          id: item.id,
        })
      }
      style={styles.container}
    >
      <Image
        style={styles.image}
        source={{
          uri: `https://image.tmdb.org/t/p/w500/${item.poster_path}`,
        }}
      />
      <Text numberOfLines={1} style={styles.title} ellipsizeMode='tail'>
        {item.title}
      </Text>
      <Text style={styles.subtitle}>
        <Text style={styles.vote}>IMDB </Text>
        {item.vote_average}
      </Text>
      {/* <CategoryName numberOfLines={1}>{item.name}</CategoryName>
      <CategoryStatus>
        <RedCircle />
        <Info>51.9K</Info>
      </CategoryStatus> */}
    </TouchableOpacity>
  );

  return (
    <View style={{ padding: 10, flex: 1 }}>
      <ScrollView
        horizontal={true}
        disableIntervalMomentum={true}
        pagingEnabled={true}
        style={styles.list}
      >
        {movies.map(item => (
          <CategoryItem key={item.id} item={item} />
        ))}
      </ScrollView>
    </View>
  );
}
