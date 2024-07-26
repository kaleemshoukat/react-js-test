import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { TextField } from '@mui/material';

const DateTimePickerField = ({ form, field, label, error, helperText }) => {
    const handleChange = (val) => {
        form.setFieldValue(field.name, val);
    };

    return (
        <DatePicker
            selected={field.value}
            onChange={handleChange}
            showTimeSelect
            timeFormat="HH:mm:ss"
            timeIntervals={1}
            dateFormat="yyyy-MM-dd HH:mm:ss"
            customInput={
                <TextField
                    label={label}
                    fullWidth
                    error={error}
                    helperText={helperText}
                />
            }
        />
    );
};

export default DateTimePickerField;
