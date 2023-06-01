// @ts-ignore
import { useEffect, useRef, useState } from "./mod.ts";
import { Pagino } from "https://deno.land/x/paginodeno@v0.0.1-alpha/mod.ts";

export interface DataTableProps {
	dataArray: object[];
	rowsPerPage?: number 
}

export function DataTable(props: DataTableProps) {
	const rowsPerPage=props.rowsPerPage | 15;
	const keys = Object.keys(props.dataArray[0]);
	const [currentPage, setcurrentPage] = useState(1);
	const [totalPages, settotalPages] = useState(Math.ceil(props.dataArray.length/rowsPerPage));
	const pageNumbers: number[] = [];

	function onChange(page: number) {
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
		settotalPages(Math.ceil(props.dataArray.length/rowsPerPage));
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
