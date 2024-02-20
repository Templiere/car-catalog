import React from "react";
import {FC} from "react";
import {FieldErrors, FieldValues} from "react-hook-form";

const ErrorMessage: FC<{error?: FieldErrors<FieldValues>, name: string}> = ({error, name}) => {
	return (
		error?.name?.message && (
			<p style={{color: 'red'}}>{name} is required</p>
		)
	);
}

export default ErrorMessage;