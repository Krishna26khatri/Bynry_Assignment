import React,{useState} from 'react'
import DataTable from 'react-data-table-component'

function UserTable({ data,setUserList,EditRow}) {

  //  console.log(data)

//   const handleEdit=(row)=>{
//       console.log(row);
//       EditRow(row)
//   }

  const handleDelete=(e)=>{
     // console.log(e.target.id)
      const name=e.target.id
      const updatedList = data.filter((user) => user.name !== name);
    setUserList(updatedList);
    alert(`${name} named user Deleted`)
  }

    const columns = [
        {
            name: 'S.No',
            selector: row => row.id,
            cell: (row, id) => id = id + 1,
            sortable: true,
        },
        {
            name: 'Name',
            selector: row => row.name,
            sortable: true,
        },
        {
            name: 'Address',
            selector: row => row.address,
            sortable: true,
        },
        {
            name: 'Phone No',
            selector: row => row.phone,
            sortable: true,
        },
        {
            name: 'Brief Description',
            selector: row => row.description,
            sortable: true,
            wrap:true,
            cell: (row) => (
                <div className="truncate max-w-xs" title={row.description}>
                  {row.description}
                </div>
              ),
        },
        {
            name:'Action',
            sortable:true,
            cell: row => (
               <div className="space-x-2">
                <button onClick={()=>EditRow(row)} id={row.name} className="bg-green-500 p-2 rounded-md ">Edit(Except Name)</button>
                <button onClick={handleDelete} id={row.name} className="bg-red-500 p-2 rounded-md ">Delete</button>
              </div>
            ),
          }
        
    ]
    return (
        <div className="m-6 border-2 border-black-300 rounded-md shadow-lg h-full ">
            <DataTable
                columns={columns}
                data={data}
            />
        </div>
    )
}

export default UserTable
