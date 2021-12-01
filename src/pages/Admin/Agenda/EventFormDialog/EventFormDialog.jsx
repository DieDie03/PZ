import { DatePicker } from "@mui/lab";
import { Button, Dialog, TextField } from "@mui/material";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import moment from "moment";
import axios from "axios";

const EventFormDialog = (props) => {

    yup.addMethod(yup.date, 'notBeforeToday', function (errorMessage) {
        return this.test('notBeforeTodayTest', errorMessage, function (value) {
          const { path, createError } = this;
          return (
            (value && !moment(value).isBefore(moment().startOf('day'))) ||
            createError({ path, message: errorMessage })
          );
        });
      });

    const validationSchema = yup.object({
        name: yup
            .string()
            .max(50, 'max 50')
            .required('Le champ est requis'),
        startDate: yup
            .date()
            .notBeforeToday('Le champ doit etre sup à ajd'),
        endDate: yup
            .date()
            .nullable()
            .when('startDate', (startDate, yup) => startDate && yup.min(startDate, 'Le champs doit être supérieur à la date de départ'))
    });

    const defaultValues = {
        name: '',
        startDate: moment(),
        endDate: null
    };

    const { control, handleSubmit, reset, formState: { errors } } = useForm({defaultValues, resolver : yupResolver(validationSchema)});

    const onSubmit = data => {
        props.onNewEvent(data);
        props.onClose();
        reset();
    };

    return (
        <>
           <Dialog {...props}>
                <div className="card">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                            <Controller name="name"
                                        control={control} 
                                        render={({ field }) => <TextField {...field} 
                                            label="Nom"
                                            fullWidth={true}
                                            error={!!errors.name}
                                            helperText={!!errors.name && errors.name.message} />
                            } />
                        </div>
                        <div className="form-group">
                            <Controller name="startDate"
                                        control={control} 
                                        render={({ field }) => <DatePicker {...field}
                                            label="Start" 
                                            onChange={date => field.onChange(date)}
                                            inputFormat="DD/MM/YYYY"
                                            renderInput={(params) => <TextField {...params} 
                                                error={!!errors.startDate}
                                                helperText={!!errors.startDate && errors.startDate.message} />}
                                        />
                            }/>
                        </div>
                        <div className="form-group">
                            <Controller name="endDate" 
                                        control={control} 
                                        render={({ field }) => <DatePicker {...field}
                                            label="End" 
                                            onChange={date => field.onChange(date)}
                                            inputFormat="DD/MM/YYYY"
                                            renderInput={(params) => <TextField {...params}
                                                error={!!errors.endDate}
                                                helperText={!!errors.endDate && errors.endDate.message} />}
                                        />
                            }/>
                        </div>
                        <div className="form-group">
                            <Button type="submit" variant="contained">Envoyer</Button>
                        </div>
                    </form>
                </div>
            </Dialog>  
        </>
    );
};
export default EventFormDialog;