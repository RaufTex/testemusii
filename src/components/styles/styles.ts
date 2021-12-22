import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  list: {
    padding: 8,
    flex: 1,
  },
  container: {
    //position: 'relative',
    marginRight: 15,
  },
  image: {
    width: 104,
    height: 152,
    borderRadius: 12,
  },
  title: {
    //marginTop: 2,
    color: 'rgba(227, 225, 223, 0.75)',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 10,
    //lineHeight: 35,
    maxWidth: 98,
    marginTop: 10,
  },
  subtitle: {
    color: 'rgba(227, 225, 223, 0.75)',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 10,
    marginBottom: 20,
    //lineHeight: 35,
    maxWidth: 98,
  },
  vote: {
    fontSize: 10,
    fontStyle: 'normal',
    fontWeight: '600',
    color: '#E6BA20',
  },
});
