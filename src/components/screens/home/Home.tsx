import CreateCarForm from "./create-car-form/CreateCarForm";
import {CarService} from "../../../services/car.service";
import {useQuery} from "@tanstack/react-query";
import Header from "../../ui/Header";
import Catalog from "../../ui/Catalog";
import React from "react";


function Home() {
	const {data, isLoading} = useQuery({queryKey: ['cars'], queryFn: () => CarService.getAll()});

	if(isLoading) return <p>Loading...</p>;

	return (
		<div>
			<h1>Cars catalog</h1>
			<Header/>
			<CreateCarForm/>
			<Catalog data={data}/>
		</div>
	);
}

export default Home;
