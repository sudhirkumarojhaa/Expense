import {StyleSheet} from 'react-native';
import {colorCode} from './colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  ph: {
    paddingHorizontal: 5,
  },
  pv: {
    paddingVertical: 10,
  },
  row: {
    flexDirection: 'row',
  },
  start: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingBottom: 10,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  between: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  end: {
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  text: {
    color: colorCode.brand,
    fontSize: 12,
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
  btn: {
    color: colorCode.white,
    alignSelf: 'flex-end',
    marginVertical: 10,
    paddingVertical: 5,
    backgroundColor: colorCode.danger,
    paddingHorizontal: 15,
    borderRadius: 20,
  },
  btnText: {
    fontSize: 12,
    fontWeight: 'bold',
    marginRight: 5,
    color: colorCode.white,
    textTransform: 'capitalize',
  },
  input: {
    borderBottomColor: '#e3e3e3',
    borderBottomWidth: 1,
    fontWeight: 'bold',
    fontSize: 14,
    textTransform: 'capitalize',
    width: '95%',
    alignSelf: 'center',
    color: colorCode.brand,
  },
  email: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'right',
    color: colorCode.text,
    textTransform: 'capitalize',
    paddingVertical: 3,
  },
  date: {
    fontSize: 10,
    color: colorCode.brand,
  },
  ht: {
    height: '100%',
    paddingHorizontal: 5,
    paddingBottom: 150,
  },
  nav: {
    fontSize: 12,
    fontWeight: 'bold',
    marginRight: 10,
    color: colorCode.white,
  },
  nothing: {
    marginTop: '10%',
  },
  card: {
    padding: 5,
    backgroundColor: colorCode.danger,
  },
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colorCode.danger,
  },
  modalContainer: {
    width: '90%',
    backgroundColor: colorCode.white,
    alignSelf: 'center',
    borderRadius: 20,
  },
  logData: {
    color: '#333',
    fontSize: 14,
    paddingVertical: 2,
    textTransform: 'capitalize',
  },
  white: {
    color: colorCode.white,
  },
  graph: {
    height: 200,
    width: '95%',
    alignSelf: 'center',
    paddingBottom: 10,
  },
  image: {
    width: 250,
    height: 250,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  headerStyle: {
    backgroundColor: colorCode.danger,
    elevation: 0,
    shadowOpacity: 0,
    shadowOffset: {
      height: 0,
    },
    shadowRadius: 0,
  },
});

export default styles;
