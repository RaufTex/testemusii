import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#282442',

    //alignItems: 'flex-start',
  },
  wrapper: {
    flex: 1,
  },
  input: {
    //position: 'absolute',
    width: 294,
    height: 56,
    top: '20%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'rgba(227, 225, 223, 0.75)',
    //boxSizing: 'border-box',
    borderRadius: 12,
    textAlign: 'center',
  },
  flatItems: {
    marginTop: 200,
    paddingLeft: 32,
  },
  infoTitle: {
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 20,
    //textAlign: 'center',
    marginLeft: '10%',
    color: '#E6BA20',
    top: 40,
  },
  viewTitle: {
    flexDirection: 'row',
    //justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttonAll: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageMovie: {
    width: '100%',
    height: '55%',

    backgroundColor: 'rgba(0, 0, 0, 0.25)',
    borderWidth: 1,
    borderColor: '#000000',
    borderBottomRightRadius: 24,
    borderBottomLeftRadius: 24,
  },
  image: {
    flex: 1,
    justifyContent: 'flex-start',
    borderWidth: 1,
    //position: 'absolute',
    borderBottomRightRadius: 24,
    borderBottomLeftRadius: 24,
  },
  title: {
    width: 294,
    height: 32,
    left: 40,
    top: '10%',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 24,
    lineHeight: 29,
    color: 'white',
    marginTop: '18%',
  },
  subtitle: {
    color: 'white',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 10,
    marginBottom: 20,
    //lineHeight: 35,
    maxWidth: 98,
    left: 40,
    top: '12%',
  },
  vote: {
    fontSize: 10,
    fontStyle: 'normal',
    fontWeight: 'bold',
    color: '#E6BA20',
  },
  genres: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    left: 40,
    top: '10%',
  },
  genresTitle: {
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 12,
    lineHeight: 15,
    color: 'white',
  },
  overview: {
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 12,
    marginLeft: '10%',
    marginRight: '10%',
    top: 40,
    color: 'rgba(227, 225, 223, 0.75)',
  },
  infoTrailer: {
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 20,
    //textAlign: 'center',
    marginLeft: '10%',
    color: '#E6BA20',
    top: 60,
  },
  runtime: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    left: 40,
    top: '10%',
  },
  favorites: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    top: '30%',
    marginRight: '10%',
  },
  buttonPlay: {
    flexDirection: 'row',
    width: 188,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#655096',
  },
  titleTrailer: {
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 16,
    display: 'flex',
    alignItems: 'center',
    color: '#E3E1DF',
    flex: 0,
    flexGrow: 0,
    marginRight: 10,
    //margin: 0px 11px;

    /* Inside Auto Layout */
  },
  goBack: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    //alignItems: 'flex-start',
    marginLeft: '10%',
    marginRight: '10%',
    marginTop: '20%',
  },
});
