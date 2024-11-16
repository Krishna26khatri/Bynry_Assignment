import React, { useContext } from 'react';
import DataTable from 'react-data-table-component';
import { UserContext } from '../UserContext';

function UserTable() {
  const { userList, handleEdit, handleDelete } = useContext(UserContext);

  const columns = [
    {
      name: 'S.No',
      selector: (_, id) => id + 1,
      sortable: true,
    },
    {
      name: 'Name',
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: 'Address',
      selector: (row) => row.address,
      sortable: true,
    },
    {
      name: 'Phone No',
      selector: (row) => row.phone,
      sortable: true,
    },
    {
      name: 'Brief Description',
      selector: (row) => row.description,
      wrap: true,
      cell: (row) => (
        <div className="truncate max-w-xs" title={row.description}>
          {row.description}
        </div>
      ),
    },
    {
      name: 'Action',
      cell: (row) => (
        <div className="space-x-2">
          <button
            onClick={() => handleEdit(row)}
            className="bg-green-500 p-2 rounded-md"
          >
            Edit
          </button>
          <button
            onClick={() => handleDelete(row.name)}
            className="bg-red-500 p-2 rounded-md"
          >
            Delete
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="m-6 border-2 border-black-300 rounded-md shadow-lg h-full">
      <DataTable columns={columns} data={userList} />
    </div>
  );
}

export default UserTable;
