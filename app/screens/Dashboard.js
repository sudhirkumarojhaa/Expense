/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  Keyboard,
  TouchableOpacity,
  Image,
  Alert,
  Modal,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import * as wpActions from '../store/actions';
import {persistor} from '../store';
import {AddButton, FloatButton, ListButton} from '../components/Button';
import moment from 'moment';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from '../style/style';
import {Nothing} from '../components/Nothing';
import {RowTitle} from '../components/RowComponent';
import {Input} from '../components/Input';
import {showMessage} from 'react-native-flash-message';
import {colorCode} from '../style/colors';

const Dashboard = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [amount, setAmount] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const dailyExpense = useSelector(state => state.appData.dailyExpense);
  const totalAmount = useSelector(state => state.appData.totalAmount);

  // Clear whole database();
  // useEffect(() => {
  //   console.log('purging db... ');
  //   persistor.purge();
  // }, []);

  const saveData = async () => {
    if (totalAmount >= 1) {
      if (name !== '' && price !== '') {
        const date = moment().format('MMMM D, YYYY');
        let user = {
          name,
          price,
          key: moment().valueOf(),
          date: date,
        };
        dispatch(wpActions.saveDailyExpense(user));
        setName('');
        setPrice('');
        showMessage({
          message: 'Success',
          type: 'success',
          description: 'Transaction Saved',
          icon: 'success',
          backgroundColor: colorCode.success,
        });
        Keyboard.dismiss();
      } else {
        showMessage({
          message: 'Error',
          description: 'Both inputs are required.',
          type: 'danger',
          icon: 'danger',
        });
      }
    } else {
      showMessage({
        message: 'Error',
        description: 'Please enter total budget.',
        type: 'danger',
        icon: 'danger',
      });
    }
  };

  const clearData = async key => {
    if (dailyExpense.length !== 0) {
      dispatch(wpActions.removeExpense(key));
    }
    showMessage({
      description: 'Transaction removed.',
      message: 'Success',
      type: 'success',
      icon: 'success',
      backgroundColor: colorCode.success,
    });
  };

  const highlightData = async key => {
    if (dailyExpense.length !== 0) {
      dispatch(wpActions.highlightExpense(key));
    }
  };

  const saveTotalAmount = async () => {
    if (amount !== null && amount !== '') {
      setModalVisible(!modalVisible);
      dispatch(wpActions.saveTotalAmount(amount));
      setAmount(0);
      showMessage({
        message: 'Success',
        type: 'success',
        description: 'Total Budget Saved',
        icon: 'success',
        backgroundColor: colorCode.success,
      });
      Keyboard.dismiss();
    } else {
      setModalVisible(!modalVisible);
    }
  };

  const isSelected =
    dailyExpense !== null
      ? dailyExpense.filter(item => item.price).map(item => item.price)
      : [];

  const totalPrice =
    isSelected !== null ? isSelected.map(Number).reduce((a, b) => a + b, 0) : 0;

  const proValue = (totalAmount - totalPrice) / totalAmount;
  const proColor =
    proValue >= 0.6
      ? colorCode.green
      : proValue >= 0.3
      ? colorCode.warning
      : 'red';

  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.row, styles.between, styles.card]}>
        <View style={styles.center}>
          <RowTitle title="Total Budget Amount" color={styles.white} />
          <View style={[styles.row, styles.center]}>
            <Text style={[styles.title, {color: colorCode.green}]}>
              &#8377;{totalAmount}
            </Text>
            <FloatButton name="edit" onPress={() => setModalVisible(true)} />
          </View>
        </View>
        <View style={styles.center}>
          <RowTitle title="Current Balance" color={styles.white} />
          <Text
            style={[
              styles.title,
              {
                color: proColor,
              },
            ]}>
            &#8377;{totalAmount - totalPrice}
          </Text>
        </View>
        <Modal
          animationType="fade"
          transparent={false}
          backdropColor="transparent"
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <View style={styles.modal}>
            <View style={[styles.modalContainer, styles.ph, styles.pv]}>
              <Image
                source={require('../design/tree.png')}
                style={styles.image}
              />
              <Input
                placeholder="Add Total Budget"
                value={amount}
                keyboardType="phone-pad"
                onChangeText={text => setAmount(text.replace(/[^0-9]/g, ''))}
                max={7}
              />
              <View style={[styles.row, styles.between, {marginTop: 20}]}>
                <ListButton
                  title="Close"
                  name="close"
                  onPress={() => setModalVisible(!modalVisible)}
                />
                <ListButton
                  title="Submit"
                  name="done"
                  onPress={() => saveTotalAmount()}
                />
              </View>
            </View>
          </View>
        </Modal>
      </View>
      <ScrollView style={[styles.ht, styles.pv]}>
        <View>
          <RowTitle name="account-balance-wallet" title="Add Expense here" />
          <Input
            placeholder="Item Name"
            value={name}
            onChangeText={text => setName(text)}
            max={12}
          />
          <Input
            placeholder="Item Price"
            value={price}
            onChangeText={text => setPrice(text.replace(/[^0-9]/g, ''))}
            keyboardType="phone-pad"
            max={7}
          />
          <AddButton title="save item" name="add" onPress={() => saveData()} />
        </View>
        <RowTitle name="assignment" title="Recent Transactions" />
        <View>
          {dailyExpense.length !== 0 ? (
            dailyExpense.map((item, index) => {
              const highlightColor = item.show ? 'gold' : colorCode.light;
              return (
                <View style={[styles.pv, styles.ph]} key={item.key}>
                  <View style={[styles.row, styles.between]}>
                    <View style={[styles.row]}>
                      <Text style={styles.text}>{index + 1}. </Text>
                      <View>
                        <Text style={styles.text}>{item.name} </Text>
                        <Text style={styles.date}>{item.date}</Text>
                      </View>
                      <TouchableOpacity
                        onPress={() => highlightData(item.key)}
                        style={styles.ph}>
                        <Icon name="star" size={16} color={highlightColor} />
                      </TouchableOpacity>
                    </View>
                    <View style={[styles.row, styles.end]}>
                      <Text style={styles.email}>&#8377;{item.price} </Text>
                      <TouchableOpacity
                        onPress={() => clearData(item.key)}
                        style={styles.ph}>
                        <Icon name="close" size={14} />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              );
            })
          ) : (
            <Nothing source={require('../design/bg.png')} />
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

Dashboard.navigationOptions = navigation => ({
  title: 'Dashboard',
});

export default Dashboard;
