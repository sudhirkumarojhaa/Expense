/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  Keyboard,
  Alert,
  Modal,
  Image,
} from 'react-native';
import {LineChart, YAxis, Grid, ProgressCircle} from 'react-native-svg-charts';
import {useSelector, useDispatch} from 'react-redux';
import {showMessage} from 'react-native-flash-message';
import * as wpActions from '../store/actions';
import {AddButton, ListButton} from '../components/Button';
import moment from 'moment';
import styles from '../style/style';
import {Nothing} from '../components/Nothing';
import {RowTitle} from '../components/RowComponent';
import {Input} from '../components/Input';
import {colorCode} from '../style/colors';

const HistoryData = () => {
  const dispatch = useDispatch();
  const dailyExpense = useSelector(state => state.appData.dailyExpense);
  const database = useSelector(state => state.appData.database);
  const totalAmount = useSelector(state => state.appData.totalAmount);
  const [title, setTitle] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const saveToDatabase = async () => {
    if (title !== null && title !== '') {
      let user = {
        totalPrice,
        title,
        key: moment().valueOf(),
      };

      dispatch(wpActions.saveToDatabase(user));
      dispatch(wpActions.clearExpense());
      dispatch(wpActions.clearTotalAmount());
      setTitle('');
      setModalVisible(!modalVisible);
      showMessage({
        message: 'Success',
        type: 'success',
        description: 'Transaction Saved',
        icon: 'success',
        backgroundColor: colorCode.success,
      });
      Keyboard.dismiss();
    } else {
      setModalVisible(!modalVisible);
    }
  };

  const clearCurrentTransaction = () => {
    Alert.alert(
      'Are you sure you want to delete all current transactions',
      'Recent transactions will be lost',
      [
        {
          text: 'NO',
          onPress: () => console.warn('NO Pressed'),
          style: 'cancel',
        },
        {text: 'YES', onPress: () => dispatch(wpActions.clearExpense())},
      ],
    );
  };

  const clearDatabase = () => {
    Alert.alert(
      'Are you sure you want to delete all past transactions',
      'Data once lost, will not be recovered.',
      [
        {
          text: 'NO',
          onPress: () => console.warn('NO Pressed'),
          style: 'cancel',
        },
        {text: 'YES', onPress: () => dispatch(wpActions.clearDatabase())},
      ],
    );
  };

  const isSelected =
    dailyExpense !== null
      ? dailyExpense.filter(item => item.price).map(item => item.price)
      : [];

  const totalPrice =
    isSelected !== null ? isSelected.map(Number).reduce((a, b) => a + b, 0) : 0;

  const dataMint =
    database !== null ? database.map(item => item.totalPrice) : null;

  const contentInset = {top: 10, bottom: 10};

  const proValue = (totalAmount - totalPrice) / totalAmount;

  const proColor =
    proValue >= 0.6
      ? colorCode.green
      : proValue >= 0.3
      ? colorCode.warning
      : 'red';

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <View style={[styles.row, styles.between, styles.pv]}>
          <ListButton
            name="delete-forever"
            color={colorCode.white}
            title="Delete"
            onPress={() =>
              totalPrice !== 0
                ? clearCurrentTransaction()
                : showMessage({
                    message: 'Empty Database',
                    description: 'Please add a transaction first.',
                    type: 'danger',
                    icon: 'danger',
                    backgroundColor: colorCode.danger,
                  })
            }
          />
          <View style={styles.center}>
            <Text style={[styles.text, styles.white]}>Total Expense</Text>
            <Text
              style={[
                styles.title,
                {
                  color: proColor,
                },
              ]}>
              &#8377;{totalPrice}
            </Text>
          </View>
          <ListButton
            name="done"
            color={colorCode.white}
            title="Save"
            onPress={() =>
              totalPrice !== 0
                ? setModalVisible(true)
                : showMessage({
                    message: 'Empty Database',
                    description: 'Please add a transaction first.',
                    type: 'danger',
                    icon: 'danger',
                    backgroundColor: colorCode.danger,
                  })
            }
          />
        </View>
        <Modal
          animationType="fade"
          transparent={false}
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
                placeholder="Add transaction title here"
                value={title}
                onChangeText={text => setTitle(text)}
                max={12}
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
                  onPress={() => saveToDatabase()}
                />
              </View>
            </View>
          </View>
        </Modal>
      </View>
      <View style={styles.pv}>
        <RowTitle name="trending-up" title="Current Balance" />
        {proValue >= 0 ? (
          <View
            style={{
              position: 'relative',
            }}>
            <ProgressCircle
              style={{height: 150}}
              progress={proValue}
              progressColor={proColor}
              strokeWidth={15}
              cornerRadius={0}
            />
            <View
              style={{
                position: 'absolute',
                alignSelf: 'center',
                marginTop: 55,
              }}>
              <Text style={[styles.title, {color: proColor}]}>
                {(proValue * 100).toFixed(1)}%
              </Text>
            </View>
          </View>
        ) : (
          <View style={[styles.center]}>
            <Text style={[styles.date]}>
              Your expenses have exceeded the budget by
            </Text>
            <Text style={[styles.email, {color: proColor}]}>
              &#8377; {totalAmount - totalPrice}
            </Text>
          </View>
        )}
      </View>

      {database.length !== 0 ? (
        <ScrollView style={styles.ht}>
          <RowTitle name="trending-up" title="Expense Graph" />
          <View style={styles.graph}>
            <View style={{height: 200, flexDirection: 'row'}}>
              <YAxis
                data={dataMint}
                contentInset={contentInset}
                svg={{
                  fill: 'grey',
                  fontSize: 10,
                }}
                numberOfTicks={10}
                formatLabel={value => `Rs. ${value}`}
                min={0}
              />
              <LineChart
                style={{flex: 1, marginLeft: 16}}
                data={dataMint}
                svg={{stroke: colorCode.danger}}
                contentInset={contentInset}>
                <Grid />
              </LineChart>
            </View>
          </View>
          <RowTitle name="assignment" title="Past Transactions" />
          <View style={[styles.pv, styles.ph]}>
            {database.map((item, index) => (
              <View style={[styles.row, styles.between, styles.ph]} key={index}>
                <View style={[styles.row, styles.center]}>
                  <Text style={styles.logData}>{index + 1}. </Text>
                  <Text style={styles.logData}>{item.title} </Text>
                </View>
                <Text style={styles.logData}>&#8377;{item.totalPrice} /-</Text>
              </View>
            ))}
          </View>
          <AddButton
            title="Clear All Transaction"
            name="delete"
            onPress={() => clearDatabase()}
          />
        </ScrollView>
      ) : (
        <Nothing source={require('../design/bg.png')} />
      )}
    </SafeAreaView>
  );
};

HistoryData.navigationOptions = navigation => ({
  title: 'HistoryData',
});

export default HistoryData;
