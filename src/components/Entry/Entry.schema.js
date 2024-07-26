import * as Yup from 'yup';

export const initialValues = {
    interchange: '',
    numberPlate: '',
    dateTime: null,
};

export const inputName = {
    interchange: 'interchange',
    numberPlate: 'numberPlate',
    dateTime: 'dateTime',
};

export const validationSchema = Yup.object({
    interchange: Yup.string().required('Entry Interchange is required'),
    numberPlate: Yup.string()
        .matches(/^[A-Z]{3}-\d{3}$/, 'Number plate must be in the format LLL-NNN')
        .required('Number Plate is required'),
    dateTime: Yup.string().required('Date Time is required'),
});
