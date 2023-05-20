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

		return (
			currentPosts.map((data, index) => {
				return (
					<tr class="border-2" key={index}>
						{keys.map((k) => {
							return (
								<td class="border-2">{data[k as keyof typeof data]}</td>
							);
						})}
					</tr>
				);
			})
		)
	}




	useEffect(() => {
	}, [props]);

	return (
		<>
			<table className="table align-items-center justify-content-center mb-0">
				<tr class="border-2">
					{keys.map((data, index) => {
						return <th class="border-2">{keys[index]}</th>;
					})}
				</tr>

				{showData()}

			</table>

		</>
	);
}
