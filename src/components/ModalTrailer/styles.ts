import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  /* button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  }, */
  buttonOpen: {
    backgroundColor: '#655096',
  },
  buttonClose: {
    backgroundColor: '#655096',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
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
});
