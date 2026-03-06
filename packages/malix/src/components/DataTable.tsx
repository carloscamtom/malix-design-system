import React from 'react';

export type TableColumn = {
  key: string;
  header: string;
  width?: string;
  render?: (value: any, row: TableRow) => React.ReactNode;
};

export type TableRow = Record<string, any>;

export type DataTableProps = React.HTMLAttributes<HTMLTableElement> & {
  columns: TableColumn[];
  data: TableRow[];
  onRowClick?: (row: TableRow) => void;
  emptyMessage?: string;
  className?: string;
};

export function DataTable({
  columns,
  data,
  onRowClick,
  emptyMessage,
  className,
  ...props
}: DataTableProps) {
  return (
    <table
      className={`malix-data-table${className ? ` ${className}` : ''}`}
      {...props}
    >
      <thead>
        <tr className="malix-data-table__header-row">
          {columns.map((col) => (
            <th
              key={col.key}
              className="malix-data-table__header-cell"
              style={col.width ? { width: col.width } : undefined}
            >
              {col.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="malix-data-table__body">
        {data.length > 0 ? (
          data.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className="malix-data-table__data-row"
              data-clickable={onRowClick ? true : undefined}
              onClick={onRowClick ? () => onRowClick(row) : undefined}
            >
              {columns.map((col) => (
                <td key={col.key} className="malix-data-table__cell">
                  {col.render ? col.render(row[col.key], row) : row[col.key]}
                </td>
              ))}
            </tr>
          ))
        ) : (
          <tr className="malix-data-table__data-row">
            <td
              className="malix-data-table__cell"
              colSpan={columns.length}
            >
              {emptyMessage || 'No data available'}
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
}
