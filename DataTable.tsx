// @ts-ignore
import { useEffect, useRef, useState } from "./mod.ts";
import { Pagino } from "../PaginoDeno_dev/mod.ts";


export interface DataTableProps {
	dataArray: object[];
}

export function DataTable(props: DataTableProps) {
	const keys = Object.keys(props.dataArray[0]);
	const [currentPage, setcurrentPage] = useState(1);
	const rowsPerPage = 15;
	const pageNumbers: number[] = [];
	const totalRows = props.dataArray.length;
	const totalPages = Math.ceil(totalRows / rowsPerPage);

	function onChange(page: number, count: number) {
		console.log("onChange called"+page);
		setcurrentPage(page);

	}
	
	function showData() {
		const indexOfLastPage = currentPage * rowsPerPage;
		const indexOfFirstPage = indexOfLastPage - rowsPerPage;
		const currentRows = props.dataArray.slice(indexOfFirstPage, indexOfLastPage);

		return (
			currentRows.map((data, index) => {
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
		setcurrentPage(1);
	}, [props]);

	return (
		<div>
			<table className="table align-items-center justify-content-center mb-0">
				<tr class="border-2">
					{keys.map((data, index) => {
						return <th class="border-2">{keys[index]}</th>;
					})}
				</tr>

				{showData()}
			</table>
			<Pagino
				count={totalPages}
				showFirst={true}
				showPrevious={true}
				showNext={true}
				showLast={true}
				page={1}
				siblingCount={1}
				boundaryCount={1}
				onChange={onChange}
			/>

		</div>

	);
}
