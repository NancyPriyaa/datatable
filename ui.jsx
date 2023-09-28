import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useTable } from 'react-table';

function FileData() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5001/api/data').then((response) => {
            setData(response.data);
        });
    }, []);

    const columns = [
        { Header: 'ID', accessor: 'id' },
        { Header: 'Date', accessor: 'date' },
        { Header: 'File Name', accessor: 'file_name' },
        { Header: 'Additional Data', accessor: 'additional_data' },
    ];

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({
        columns,
        data,
    });

    return (
        <div>
            <h1>File Data</h1>
            <table {...getTableProps()} className="table">
                <thead>
                    {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column) => (
                                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map((row) => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map((cell) => {
                                    return (
                                        <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                    );
                                })}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default FileData;