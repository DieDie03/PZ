import { DatePicker } from "@mui/lab";
import { Button, Dialog, TextField } from "@mui/material";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import './Agenda.scss';
import { yupResolver } from '@hookform/resolvers/yup';
import moment from "moment";
import axios from "axios";

const Agenda = () => 
{

    yup.addMethod(yup.date, "notBeforeToday", function (errorMessage) {
        return this.test(`notBeforeToday`, errorMessage, function (value) {
          const { path, createError } = this;
          console.log(value)
          return (
            (value && !moment(value).isBefore(moment().startOf('day'))) ||
            createError({ path, message: errorMessage })
          );
        });
      });

    const validationSchema = yup.object({
        name: yup.string().required("Le champ est requis"),
        startDate: yup.date().notBeforeToday('Le champ doit etre sup à ajd')
    });

    const defaultValues = {
        name: 'test',
        startDate: moment(),
        endDate: null
    };


    const [open, setOpen] = useState(false);

    const { control, handleSubmit, formState: { errors } } = useForm({defaultValues, resolver : yupResolver(validationSchema)});

    const onSubmit = data => axios.post('url/', data)

    const onClick = () => {
        setOpen(() => true);
    };

    const onClose = () => {
        setOpen(() => false);
    };



    return (
        <>
            <Button variant="contained" onClick={() => onClick()}>+</Button>
            <Dialog open={open}
                    onClose={() => onClose()}>
                <div className="card">
                    <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <Controller name="name"
                                    control={control} 
                                    render={({ field }) => <TextField {...field} 
                                        label="Nom" 
                                        error={!!errors.name}
                                        helperText={!!errors.name && errors.name.message}></TextField>
                        }>
                        </Controller>
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
                                            helperText={!!errors.startDate && errors.startDate.message}/>}
                                    ></DatePicker>
                        }>
                        </Controller>
                    </div>
                    <div className="form-group">
                        <Controller name="endDate" 
                                    control={control} 
                                    render={({ field }) => <DatePicker {...field}
                                        label="End" 
                                        onChange={date => field.onChange(date)}
                                        renderInput={(params) => <TextField {...params} />}
                                        inputFormat="DD/MM/YYYY"></DatePicker>
                        }>
                        </Controller>
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

export default Agenda;