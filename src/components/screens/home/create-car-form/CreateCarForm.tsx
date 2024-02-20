// @ts-ignore
import styles from './CreateCarForm.module.css';
import {useForm} from "react-hook-form";
import ErrorMessage from "./ErrorMessage";
import {useCreateCar} from "./useCreateCar";
import React from 'react';
import {ICarData} from "../../../../types/car.interface";


const CreateCarForm = () => {
	const {register,
		reset,
		handleSubmit,
		formState: {errors}
	} = useForm<ICarData>({
		mode: 'onChange'
	});

	const {createCar} = useCreateCar(reset);

	return (
		<form className={styles.form} onSubmit={handleSubmit(createCar)}>
			<input
				{...register('name', {required: 'is required!'})}
				placeholder='Name'
			/>
			<ErrorMessage error={errors} name='Name'/>
			<input
				{...register('price', {required: 'is required'})}
				placeholder='Price'
			/>
			<ErrorMessage error={errors} name='Price'/>
			<input
				{...register('image', {required: 'is required'})}
				placeholder='Image'
			/>
			<ErrorMessage error={errors} name='Image'/>

			<button className='btn'>Create</button>
		</form>
	);
}

export default CreateCarForm;