import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useEffect } from 'react';
import { Calendar } from 'react-native-calendars';
import { useState } from 'react';
import { colors, fonts } from '../constants/globalStyles';
import { MaterialIcons } from '@expo/vector-icons';
import RNDateTimePicker from '@react-native-community/datetimepicker';

const CalendarDateSelection = () => {
  var today = new Date();
  const todayDate = today.toISOString().slice(0, 10);
  const initalMarkedDate = {
    [todayDate]: {
      selected: true,
    },
  };
  const [markedDate, setMarkedDate] = useState(initalMarkedDate);
  const [time, setTime] = useState(new Date());
  const [show, setShow] = useState(false);
  const [timeString, setTimeString] = useState('Select Time');
  const handleDateSelection = (date) => {
    setMarkedDate({
      [date.dateString]: {
        selected: true,
      },
    });
  };

  const ArrowLeft = () => {
    return (
      <MaterialIcons
        name='keyboard-arrow-left'
        size={24}
        color={colors.primary}
      />
    );
  };
  const ArrowRight = () => {
    return (
      <MaterialIcons
        name='keyboard-arrow-right'
        size={24}
        color={colors.primary}
      />
    );
  };

  const renderArrow = (direction) => {
    if (direction === 'left') {
      return <ArrowLeft />;
    }
    return <ArrowRight />;
  };

  const setDate = (event, date) => {
    date = date || time;
    setShow(false);
    setTime(date);
  };
  useEffect(() => {
    //displaytime as AM or PM
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    let strTime = hours + ':' + minutes + ' ' + ampm;
    setTimeString(strTime);
  }, [time]);
  return (
    <View style={styles.container}>
      <Calendar
        minDate={today.toISOString()}
        markedDates={markedDate}
        onDayPress={handleDateSelection}
        renderArrow={renderArrow}
        theme={{
          backgroundColor: '#ffffff',
          calendarBackground: '#ffffff',
          textSectionTitleColor: '#b6c1cd',
          textSectionTitleDisabledColor: '#d9e1e8',
          selectedDayBackgroundColor: colors.primary,
          selectedDayTextColor: '#ffffff',
          todayTextColor: colors.primary,
          dayTextColor: colors.primary,
          textDisabledColor: '#d9e1e8',
          dotColor: colors.primary,
          selectedDotColor: '#ffffff',
          arrowColor: 'orange',
          disabledArrowColor: '#d9e1e8',
          textDayFontFamily: fonts.font600,
          textMonthFontFamily: fonts.font600,
          textDayHeaderFontFamily: fonts.font600,
          monthTextColor: colors.primary,
        }}
      />
      <View style={styles.timeContainer}>
        <View style={styles.timeTitleContainer}>
          <Text style={styles.timeTitle}>Time</Text>
        </View>
        <View style={styles.timePickerContainer}>
          <TouchableOpacity
            style={styles.timePicker}
            onPress={() => setShow(!show)}
          >
            <Text style={styles.timePickerText}>{timeString}</Text>
          </TouchableOpacity>
        </View>
      </View>
      {show && (
        <RNDateTimePicker
          mode='time'
          onChange={setDate}
          value={time}
          minimumDate={today}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: 10,
  },
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
  },
  timeTitleContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  timeTitle: {
    fontFamily: fonts.font600,
    fontSize: 16,
    color: colors.primary,
  },
  timePickerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  timePicker: {
    backgroundColor: colors.primary,
    padding: 10,
    borderRadius: 10,
  },
  timePickerText: {
    fontFamily: fonts.font600,
    fontSize: 16,
    color: colors.white,
  },
});

export default CalendarDateSelection;
