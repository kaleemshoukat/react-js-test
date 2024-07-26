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
import {validationSchema, inputName, initialValues} from "./Exit.schema";
import axios from 'axios';
import {toast} from "react-toastify";
import DateTimePickerField from "../DateTimePickerField/DateTimePickerField";
import {currentDateTime, dbDateTime} from "../../utils/date";
import {calculateCostAndDiscount} from "../../utils/cost.js";
import {useState} from "react";
import ExitTable from "./ExitTable.jsx";

const Exit = () => {
    const costValuesInitial = {
        baseRate: 0,
        distanceCost: 0,
        subTotal: 0,
        discount: 0,
        total: 0
    }
    const [costValues, setCostValues] = useState(costValuesInitial);

    const handleSubmit = async (values, {setSubmitting, resetForm}) => {
        try {
            let calculateCost = calculateCostAndDiscount('Zero Point', values.interchange, values.numberPlate, currentDateTime());
            setCostValues(calculateCost);

            const data = {
                tripStatus: 'Completed',
                exitDateTime: dbDateTime(values.dateTime),
                exitInterchange: values.interchange,
                totalCostTrip: calculateCost.total,
            }

            const response = await axios.put(
                'https://crudcrud.com/api/0de6f86092554f1a984f644dc24fb0f5/trips/ID',
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
                                            <Title title='Exit' align={'center'}/>
                                            <TextField
                                                select
                                                fullWidth
                                                name={inputName.interchange}
                                                label="Exit Interchange"
                                                value={values.interchange}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                error={touched.interchange && Boolean(errors.interchange)}
                                                helperText={touched.interchange && errors.interchange}
                                            >
                                                <MenuItem value="Zero point" disabled>Zero point</MenuItem>
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
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <ExitTable costValues={costValues} />
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

export default Exit;