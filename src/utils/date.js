import moment from 'moment';
const format = 'YYYY-MM-DD HH:mm:ss';

export const currentDateTime = () => {
    return moment().format(format);
};

export const dbDateTime = (dateTime) => {
    return moment(dateTime).format(format);
};

export const isWeekend = (dateTime) => {
    const date = moment(dateTime, format);
    const day = date.day();
    return day === 0 || day === 6; // 0 is Sunday, 6 is Saturday
}

export const isMonOrWed = (dateTime) => {
    const date = moment(dateTime, format);
    const day = date.day();
    return day === 1 || day === 3; // 1 is Monday, 3 is Wednesday
}

export const isTueOrThu = (dateTime) => {
    const date = moment(dateTime, format);
    const day = date.day();
    return day === 2 || day === 4; // 2 is Tuesday, 4 is Thursday
}

export const isNationalHoliday = (dateTime) => {
    const date = moment(dateTime, format);
    const month = date.month() + 1; // Moment.js months are zero-based (0 for January, 1 for February, etc.)
    const day = date.date();

    const specificDates = [
        { month: 3, day: 23 },  // 23rd March
        { month: 8, day: 14 },  // 14th August
        { month: 12, day: 25 }  // 25th December
    ];

    return specificDates.some(d => d.month === month && d.day === day);
}
