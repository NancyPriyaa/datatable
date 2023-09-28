import React, { useState, useEffect, useMemo } from 'react';
import axios from 'axios';

function App() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5001/api/data').then((response) => {
            console.log(response.data);
            setData(response.data);
        });
    }, []);

    const columns = useMemo(() => [
        { Header: 'ID', accessor: 'id' },
        // { Header: 'Date', accessor: 'date' },
        { Header: 'File Name', accessor: 'file_name' },
        // { Header: 'Additional Data', accessor: 'additional_data' },
    ], []);

    // const {
    //     getTableProps,
    //     getTableBodyProps,
    //     headerGroups,
    //     rows,
    //     prepareRow,
    // } = useTable({
    //     columns,
    //     data,
    // });

    return (
        <div className='App'>
            <h1>File Data</h1>
            {data &&
                <table>
                    <thead>
                        <tr>
                            {
                                columns.map((column) => <th key={column.Header}>{column.Header}</th>)
                            }
                        </tr></thead>
                    <tbody>
                        {
                            data.map((dataRow) =>
                                <tr key={dataRow.id}>
                                    <td>{dataRow.id}</td>
                                    <td>{dataRow.filename}</td>
                                </tr>
                            )
                        }</tbody>
                </table>
                // <table {...getTableProps()} className="table">
                //     <thead>
                //         {headerGroups.map((headerGroup) => (
                //             <tr {...headerGroup.getHeaderGroupProps()}>
                //                 {headerGroup.headers.map((column) => (
                //                     <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                //                 ))}
                //             </tr>
                //         ))}
                //     </thead>
                //     <tbody {...getTableBodyProps()}>
                //         {rows.map((row) => {
                //             prepareRow(row);
                //             return (
                //                 <tr {...row.getRowProps()}>
                //                     {row.cells.map((cell) => {
                //                         return (
                //                             <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                //                         );
                //                     })}
                //                 </tr>
                //             );
                //         })}
                //     </tbody>
                // </table>
            }
        </div>
    );
}

export default App;