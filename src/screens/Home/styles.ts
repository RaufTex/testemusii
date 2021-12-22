import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#282442',
    alignItems: 'center',
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
  initialTitle: {
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 28,
    lineHeight: 32,
    textAlign: 'center',
    color: '#E6BA20',
    top: 80,
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
});
