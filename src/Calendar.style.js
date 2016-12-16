/**
 * Created by bogdanbegovic on 8/26/16.
 */

import {
    StyleSheet
} from 'react-native';

export default StyleSheet.create({

    //CALENDAR STYLES
    calendarContainer: {
        backgroundColor: '#fff',
        overflow: 'hidden'
    },
    datesStrip: {
        flexDirection: 'row'
    },
    calendarDates: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    calendarHeader: {
        fontSize: 16,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    iconContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon: {
        width: 20,
        height: 20,
        resizeMode: 'contain'
    },

    //CALENDAR DAY
    dateContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        
        width: 40,
        height: 40,
        borderRadius: 40 / 2
    },
    dateName: {
        fontSize: 10,
        textAlign: 'center',
        color: '#282832',
    },
    weekendDateName: {
        fontSize: 11,
        color: '#282832',
        textAlign: 'center'
    },
    dateNumber: {
        fontSize: 11,
        textAlign: 'center',
        color: '#282832',
    },
    weekendDateNumber: {
        fontSize: 11,
        color: '#282832',
        textAlign: 'center'
    }
});
