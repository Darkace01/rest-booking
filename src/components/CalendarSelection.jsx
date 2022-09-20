import { View, Text } from 'react-native';
import React from 'react';
import { Calendar } from 'react-native-calendars';
import { useState } from 'react';
import { colors, fonts } from '../constants/globalStyles';

const CalendarSelection = () => {
  var today = new Date().toString('yyyy-MM-dd');
  const initalMarkedDate = {
    [today]: {
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
  return (
    <View>
      <Calendar
        minDate={today}
        markedDates={markedDate}
        onDayPress={handleDateSelection}
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
        }}
      />
    </View>
  );
};

export default CalendarSelection;
