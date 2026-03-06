'use client';

import { DataTable, Pill } from '@camtomlabs/malix-design-system';
import type { TableColumn, TableRow } from '@camtomlabs/malix-design-system';

const columns: TableColumn[] = [
  { key: 'name', header: 'Name', width: '35%' },
  { key: 'email', header: 'Email', width: '40%' },
  {
    key: 'role',
    header: 'Role',
    width: '25%',
    render: (value: string) => {
      const variant = value === 'Admin' ? 'primary' : value === 'Editor' ? 'info' : 'default';
      return <Pill variant={variant}>{value}</Pill>;
    },
  },
];

const data: TableRow[] = [
  { name: 'Alice Johnson', email: 'alice@example.com', role: 'Admin' },
  { name: 'Bob Smith', email: 'bob@example.com', role: 'Editor' },
  { name: 'Carol Davis', email: 'carol@example.com', role: 'Viewer' },
  { name: 'Dan Lee', email: 'dan@example.com', role: 'Editor' },
];

export function DataTableDemo() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
