import { View, Text } from 'react-native';
import React, { useState, useEffect } from 'react';
import { Calendar } from 'react-native-calendars';

const DateSelection = () => {
  var today = new Date().toString('yyyy-MM-dd');
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [markedDates, setMarkedDates] = useState({});

  useEffect(() => {
    if (startDate && endDate) {
      let dateRange = getDateRange();
      console.log('range', dateRange);
      let midRangeObjectList = [];
      for (let i = 0; i < dateRange.length; i++) {
        if (i !== 0 && i !== dateRange.length - 1) {
          markedDates[dateRange[i]] = {
            color: '#70d7c7',
            textColor: 'white',
          };
        }
        if (i !== 0 && i === dateRange.length - 1) {
          markedDates[dateRange[i]] = {
            color: '#70d7c7',
            textColor: 'white',
            endingDay: true,
          };
        }
      }
      setMarkedDates(markedDates);
      console.log(markedDates);
    }
  }, [startDate, endDate]);
  useEffect(() => {
    console.log('marked', markedDates);
  }, [markedDates]);

  const handleDateSelection = (date) => {
    if (startDate) {
      setEndDate(date);
    } else {
      setStartDate(date);
      markedDates[date.dateString] = {
        startingDay: true,
        color: '#00B0BF',
        textColor: '#FFFFFF',
      };
      setMarkedDates(markedDates);
    }
  };

  const createDateRangeObject = (date) => {
    let dateRangeObject = {};
    dateRangeObject[date] = {
      color: '#70d7c7',
      textColor: 'white',
    };
    return dateRangeObject;
  };

  const startDateObject = () => {
    let dateRangeObject = {};
    dateRangeObject[startDate] = {
      startingDay: true,
      color: '#70d7c7',
      textColor: 'white',
    };
    return dateRangeObject;
  };

  const endDateObject = () => {
    let dateRangeObject = {};
    dateRangeObject[endDate] = {
      endingDay: true,
      color: '#70d7c7',
      textColor: 'white',
    };
    return dateRangeObject;
  };

  const getDaysArray = (start, end) => {
    for (
      var arr = [], dt = new Date(start);
      dt <= new Date(end);
      dt.setDate(dt.getDate() + 1)
    ) {
      arr.push(new Date(dt));
    }
    return arr;
  };

  const getDateRange = () => {
    var daylist = getDaysArray(
      new Date(startDate.dateString),
      new Date(endDate.dateString)
    );
    var dateList = [];
    daylist.map((v) => dateList.push(v.toISOString().slice(0, 10)));
    return dateList;
  };

  return (
    <View>
      <Calendar
        minDate={today}
        markingType={'period'}
        onDayPress={handleDateSelection}
        markedDates={markedDates}
      />
    </View>
  );
};

export default DateSelection;
