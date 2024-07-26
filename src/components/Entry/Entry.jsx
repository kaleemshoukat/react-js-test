import {
    TextField,
    Button,
    Container,
    Box,
    CircularProgress,
    MenuItem,
    Card,
    CardContent,
    Grid,
} from '@mui/material';
import {Formik, Form, Field} from 'formik';
import Title from '../Title/Title';
import {validationSchema, inputName, initialValues} from "./Entry.schema";
import axios from 'axios';
import {toast} from "react-toastify";
import DateTimePickerField from "../DateTimePickerField/DateTimePickerField";
import {dbDateTime} from "../../utils/date";

const Entry = () => {
    const handleSubmit = async (values, {setSubmitting, resetForm}) => {
        try {
            const data = {
                entryDateTime: dbDateTime(values.dateTime),
                numberPlate: values.numberPlate,
                entryInterchange: values.interchange,
                tripStatus: 'Active',
                // exitDateTime: null,
                // exitInterchange: null,
                // totalCostTrip: null,
            }

            const response = await axios.post(
                'https://crudcrud.com/api/0de6f86092554f1a984f644dc24fb0f5/trips',
                data
            );
            console.log('Form submitted successfully:', response.data);

            resetForm();
            toast.success('Data entered successfully.');
        } catch (error) {
            console.error('Error submitting form:', error);
            toast.error('Error submitting form:', error);
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <Container maxWidth="lg" style={{marginTop: '40px'}}>
            <Card variant="outlined">
                <CardContent>
                    <Title title='Entry'/>
                    <Formik
                        enableReinitialize
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}
                    >
                        {({values, errors, touched, handleChange, handleBlur, isSubmitting}) => (
                            <Form>
                                <Grid container spacing={3}>
                                    <Grid item xs={12} sm={6}>
                                        <Box sx={{display: 'flex', flexDirection: 'column', gap: 2}}>
                                            <TextField
                                                select
                                                fullWidth
                                                name={inputName.interchange}
                                                label="Entry Interchange"
                                                value={values.interchange}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                error={touched.interchange && Boolean(errors.interchange)}
                                                helperText={touched.interchange && errors.interchange}
                                            >
                                                <MenuItem value="Zero point">Zero point</MenuItem>
                                                <MenuItem value="NS Interchange">NS Interchange</MenuItem>
                                                <MenuItem value="Ph4 Interchange">Ph4 Interchange</MenuItem>
                                                <MenuItem value="Ferozpur Interchange">Ferozpur Interchange</MenuItem>
                                                <MenuItem value="Lake City Interchange">Lake City Interchange</MenuItem>
                                                <MenuItem value="Raiwand Interchange">Raiwand Interchange</MenuItem>
                                                <MenuItem value="Bahria Interchange">Bahria Interchange</MenuItem>
                                            </TextField>

                                            <TextField
                                                fullWidth
                                                name={inputName.numberPlate}
                                                label="Number Plate"
                                                value={values.numberPlate}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                error={touched.numberPlate && Boolean(errors.numberPlate)}
                                                helperText={touched.numberPlate && errors.numberPlate}
                                            />

                                            <Field
                                                name={inputName.dateTime}
                                                value={values.dateTime}
                                                component={DateTimePickerField}
                                                label='Date Time'
                                                error={touched.dateTime && errors.dateTime}
                                                helperText={touched.dateTime && errors.dateTime}
                                            />
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} sm={6}>

                                    </Grid>
                                    <Grid item xs={12} sm={12}>
                                        <Button
                                            style={{float: 'right'}}
                                            variant="contained"
                                            color="primary"
                                            type="submit"
                                            disabled={isSubmitting}
                                            startIcon={
                                                isSubmitting && (
                                                    <CircularProgress size={24} color="inherit"/>
                                                )
                                            }
                                        >
                                            Submit
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Form>
                        )}
                    </Formik>
                </CardContent>
            </Card>
        </Container>
    )
}

export default Entry;