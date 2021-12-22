import React, { useMemo } from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import { styles } from './styles';
import { Title } from '../../components/Title/index';
import { NowPlayingList } from '../../components/NowPlayingList/index';
import { PopularList } from '../../components/PopularList/index';
import { TopRatedList } from '../../components/TopRatedList/index';
import { UpcomingList } from '../../components/UpcomingList/index';
import { Movie } from '../../screens/Movie/index';
/* import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator(); */

/* function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen name='Movie' component={Movie} />
    </Stack.Navigator>
  );
} */

interface Item {
  key: string;
  render: () => JSX.Element;
  isTitle?: boolean;
}

export function Home({ navigation }) {
  const onPress = () => {
    navigation.navigate('Movie');
  };
  const { data, indices } = useMemo(() => {
    const items: Item[] = [
      {
        key: 'NOW_PLAYING',
        render: () => (
          <View style={styles.viewTitle}>
            <Title>Now Playing</Title>
            {/* <TouchableOpacity onPress={onPress} style={styles.buttonAll}>
              <Title>All</Title>
            </TouchableOpacity> */}
          </View>
        ),
        IsTitle: true,
      },
      {
        key: 'C1',
        render: () => <NowPlayingList />,
      },
      {
        key: 'POPULAR',
        render: () => (
          <View style={styles.viewTitle}>
            <Title>Popular</Title>
            {/* <TouchableOpacity style={styles.buttonAll}>
              <Title>All</Title>
            </TouchableOpacity> */}
          </View>
        ),
        IsTitle: true,
      },
      {
        key: 'C2',
        render: () => <PopularList />,
      },
      {
        key: 'TOP_RATED',
        render: () => (
          <View style={styles.viewTitle}>
            <Title>Top Rated</Title>
            {/* <TouchableOpacity style={styles.buttonAll}>
              <Title>All</Title>
            </TouchableOpacity> */}
          </View>
        ),
        IsTitle: true,
      },
      {
        key: 'C3',
        render: () => <TopRatedList />,
      },
      {
        key: 'UPCOMING',
        render: () => (
          <View style={styles.viewTitle}>
            <Title>Upcoming</Title>
            {/* <TouchableOpacity style={styles.buttonAll}>
              <Title>All</Title>
            </TouchableOpacity> */}
          </View>
        ),
        IsTitle: true,
      },
      {
        key: 'C4',
        render: () => <UpcomingList />,
      },
    ];

    const indices: number[] = [];

    items.forEach((item, index) => item.isTitle && indices.push(index));

    return {
      data: items,
      indices,
    };
  }, []);

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <Text style={styles.initialTitle}>Cinema</Text>
        <TextInput
          selectionColor='#E3E1DFBF'
          style={styles.input}
          placeholder='What do you want to watch?'
          placeholderTextColor='#E3E1DFBF'
        />
        <FlatList<Item>
          style={styles.flatItems}
          data={data}
          renderItem={({ item }) => item.render()}
          keyExtractor={item => item.key}
          stickyHeaderIndices={indices}
          onRefresh={() => {}}
          refreshing={false}
        />
      </View>
    </SafeAreaView>
  );
}
