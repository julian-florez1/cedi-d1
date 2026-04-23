import { flexRender, getCoreRowModel, useReactTable, type ColumnDef } from '@tanstack/react-table';

type TableProps<T> = {
    data: T[],
    columns: ColumnDef<T>[];
}


function Table<T>({ data, columns }: Readonly<TableProps<T>>) {

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    })

    return (
        <div className="overflow-x-auto shadow">
            <table className="w-full text-sm text-left text-gray-700">
                <thead className="bg-gray-800 text-white uppercase text-xs">
                    {table.getHeaderGroups().map(headerGroup => (
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map(header => (
                                <th key={header.id} className="px-4 py-3">
                                    {header.isPlaceholder
                                        ? null
                                        : flexRender(
                                            header.column.columnDef.header,
                                            header.getContext()
                                        )}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody>
                    {table.getRowModel().rows.map((row, index) => (
                        <tr
                            key={row.id}
                            className={`border-b ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-blue-50 transition-colors`}
                        >
                            {row.getVisibleCells().map(cell => (
                                <td key={cell.id} className="px-4 py-3">
                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Table