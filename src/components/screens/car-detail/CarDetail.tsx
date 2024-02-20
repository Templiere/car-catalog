import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {CarService} from "../../../services/car.service";
import CarItem from "../home/car-item/CarItem";
import {withAuth} from "../../../HOC/withAuth";
import React from "react";
import {ICar} from "../../../types/car.interface";

const CarDetail = () => {

	const {id} = useParams();
	const [car, setCar] = useState<ICar>({} as ICar);

	useEffect(() => {
		if(!id) return;
		const fetchData = async () => {

			const data = await CarService.getById(id);

			setCar(data);

		};

		fetchData();
	}, [id]);

	if(!car?.name) return <p>Loading...</p>;

	return (
		<div>
			<Link to='/'>Back</Link>
			<CarItem car={car}/>
		</div>
	);
}

export default withAuth(CarDetail);