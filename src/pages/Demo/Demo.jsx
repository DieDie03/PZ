import { MenuItem, Select, Button } from "@mui/material";
import { Controller, useForm } from "react-hook-form";

const Demo = () => {

    const defaultValues = {
        infrastructure: "",
      };

    const { handleSubmit, control } = useForm({ defaultValues });
    const onSubmit = data => { console.log(data)} ;

    return (
        <>
             <form onSubmit={handleSubmit(onSubmit)}>
                 <Controller name="infrastructure" control={control} render={
                    ({ field }) => <Select {...field}>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                    </Select>
                 }/>
                 <Button type="submit">Envoyer</Button>
             </form>
        </>
    );
};

export default Demo;