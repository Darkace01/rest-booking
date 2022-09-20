import { View, Text } from 'react-native';
import React from 'react';
import { Calendar } from 'react-native-calendars';
import { useState } from 'react';
import { colors, fonts } from '../constants/globalStyles';
import { MaterialIcons } from '@expo/vector-icons';

const CalendarSelection = () => {
  var today = new Date();
  const todayDate = today.toISOString().slice(0, 10);
  const initalMarkedDate = {
    [todayDate]: {
      selected: true,
    },
  };
  const [markedDate, setMarkedDate] = useState(initalMarkedDate);
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
  return (
    <View>
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
    </View>
  );
};

export default CalendarSelection;
