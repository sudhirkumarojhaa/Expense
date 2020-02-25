import {StyleSheet} from 'react-native';
import {colorCode} from './colorCode';

export const styles = StyleSheet.create({
  //Global css
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
  },
  row: {
    flexDirection: 'row',
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
  pv: {
    paddingVertical: 15,
  },
  ph: {
    paddingHorizontal: 12,
  },

  input: {
    borderBottomColor: '#e3e3e3',
    borderBottomWidth: 1,
    fontSize: 16,
    width: '100%',
    paddingVertical: 20,
    marginVertical: 20,
  },

  //Font and image related css

  title: {
    fontSize: 12,
    fontWeight: 'bold',
    color: colorCode.gray,
    paddingVertical: 20,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  text: {
    fontSize: 12,
    fontWeight: 'bold',
    paddingVertical: 10,
  },
  task: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    paddingVertical: 50,
    paddingHorizontal: 20,
  },
  boldText: {
    fontSize: 30,
    textAlign: 'center',
    paddingVertical: 5,
    fontWeight: 'bold',
    color: colorCode.darkBlue,
  },
  img: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 5,
  },
  priority: {
    fontSize: 12,
    marginHorizontal: 20,
    textTransform: 'uppercase',
    letterSpacing: 2,
    fontWeight: 'bold',
  },

  itemCost: {
    fontSize: 14,
    paddingVertical: 5,
    paddingHorizontal: 20,
    textTransform: 'uppercase',
    color: '#444',
  },

  settingsCost: {
    color: colorCode.gray,
    fontSize: 14,
  },

  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colorCode.brand,
  },

  time: {
    fontSize: 56,
    textAlign: 'center',
    paddingVertical: 10,
    fontWeight: 'bold',
    color: colorCode.brand,
  },

  //btn css
  btn: {
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: colorCode.brand,
    width: 60,
    height: 60,
  },
  cardBtn: {
    position: 'absolute',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    top: 5,
    right: 5,
  },

  //card css

  card: {
    width: '96%',
    borderRadius: 5,
    alignSelf: 'center',
    marginVertical: 5,
    backgroundColor: '#fff',
    borderBottomColor: colorCode.border,
    borderBottomWidth: 1,
    paddingVertical: 10,
  },
  cardText: {
    backgroundColor: '#00bfff',
    width: 250,
    margin: 15,
    borderRadius: 5,
  },
});
