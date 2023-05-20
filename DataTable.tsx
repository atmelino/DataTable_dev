// @ts-ignore
import { useEffect, useRef, useState } from "./mod.ts";


export interface DataTableProps {
	dataArray: object[];
}


export function DataTable(props: DataTableProps) {
	const keys = Object.keys(props.dataArray[0]);
	const [currentPage, setcurrentPage] = useState(1);
	const postsPerPage = 15;
	const pageNumbers: number[] = [];


	function showData() {
		const indexOfLastPage = currentPage * postsPerPage;
		const indexOfFirstPage = indexOfLastPage - postsPerPage;
		const currentPosts = props.dataArray.slice(indexOfFirstPage, indexOfLastPage);
		// return currentPosts.map(
		// 	(
		// 		item: {
		// 			userId: number;
		// 			title: string;
		// 			completed: boolean;
		// 		},
		// 		index: number,
		// 	) => {
		// 		return (
		// 			<tbody key={index}>
		// 				<tr>
		// 					<td>{postsPerPage * (currentPage - 1) + index + 1}</td>
		// 					<td>{item.userId}</td>
		// 					<td>{item.title}</td>
		// 					<td>{item.completed.toString()}</td>
		// 				</tr>
		// 			</tbody>
		// 		);
		// 	},
		// );



		// currentPosts.map((data, index) => {
		// 	return (
		// 		<tr class="border-2" key={index}>
		// 			{keys.map((k) => {
		// 				// console.log(k);
		// 				console.log('<td class="border-2">{' + data[k as keyof typeof data] + '}</td>');
		// 				return (
		// 					<td class="border-2">{data[k as keyof typeof data]}</td>
		// 				);
		// 			})}
		// 		</tr>
		// 	);
		// })



		// return "jytej"



		// return (<table>
		// 	<tr>
		// 		<th>Company</th>
		// 		<th>Contact</th>
		// 		<th>Country</th>
		// 	</tr>
		// 	<tr>
		// 		<td>Alfreds Futterkiste</td>
		// 		<td>Maria Anders</td>
		// 		<td>Germany</td>
		// 	</tr>
		// 	<tr>
		// 		<td>Centro comercial Moctezuma</td>
		// 		<td>Francisco Chang</td>
		// 		<td>Mexico</td>
		// 	</tr>
		// </table>)


		return (<table>
			<tr>
			{props.dataArray.map((data, index) => {
						return (
							<tr class="border-2" key={index}>
								{keys.map((k) => {
									return (
										<td class="border-2">{data[k as keyof typeof data]}</td>
									);
								})}
							</tr>
						);
					})}
			</tr>
		</table>)








	}




	useEffect(() => {
	}, [props]);

	return (
		<>
			<div>
				<table className="table align-items-center justify-content-center mb-0">

					{showData()}
				</table>

			</div>
			{/* <div>
				<table class="border-2">
					<tr class="border-2">
						{keys.map((data, index) => {
							return <th class="border-2">{keys[index]}</th>;
						})}
					</tr>

					{props.dataArray.map((data, index) => {
						return (
							<tr class="border-2" key={index}>
								{keys.map((k) => {
									return (
										<td class="border-2">{data[k as keyof typeof data]}</td>
									);
								})}
							</tr>
						);
					})}
				</table>
			</div> */}
		</>
	);
}
