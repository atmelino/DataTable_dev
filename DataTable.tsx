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

	function showPagination() {
		const totalPosts = props.dataArray.length;

		for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
			pageNumbers.push(i);
		}

		const pagination = (pageNumbers: number) => {
			console.log(pageNumbers);
			setcurrentPage(pageNumbers);
			// showData();
		};

		// return (
		// 	<nav>
		// 		<ul class="flex flex-row justify-evenly">
		// 			{pageNumbers.map((number) => (
		// 				<li
		// 					key={number}
		// 					className={currentPage === number
		// 						? "page-item active"
		// 						: "page-item"}
		// 				>
		// 					<button onClick={() => pagination(number)}>
		// 						{number}
		// 					</button>
		// 				</li>
		// 			))}
		// 		</ul>
		// 	</nav>
		// );



		return (

			<nav aria-label="Page navigation example">
				<ul class="inline-flex items-center -space-x-px">
					<li>
						<a href="#" class="block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
							<span class="sr-only">Previous</span>
							<svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
						</a>
					</li>
					<li>
						<a href="#" class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
					</li>
					<li>
						<a href="#" class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
					</li>
					<li>
						<a href="#" aria-current="page" class="z-10 px-3 py-2 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
					</li>
					<li>
						<a href="#" class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</a>
					</li>
					<li>
						<a href="#" class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">5</a>
					</li>
					<li>
						<a href="#" class="block px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
							<span class="sr-only">Next</span>
							<svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
						</a>
					</li>
				</ul>
			</nav>
		);











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
				<div style={{ float: "right" }}>
					{showPagination()}
				</div>

			</table>

		</>
	);
}
