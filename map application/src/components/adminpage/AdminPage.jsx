import React, {useContext} from 'react';
import {UserContext} from '../UserContext';
import UserTable from '../usertable/UserTable';

function AdminPage() {
  const {
    formData,
    editingMode,
    handleChange,
    handleImageChange,
    handleSubmit,
  } = useContext(UserContext);

  return (
    <div>
      <div className="flex items-center justify-center m-5">
        <div className="border-2 border-blue-300 rounded-md w-80 h-56 overflow-y-scroll shadow-2xl">
          <div className="text-center m-3">Add User's. . .</div>
          <form>
            <input
              type="text"
              placeholder="Name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="m-3 h-8 border border-slate-300 rounded-md p-4"
            />
            <input
              type="text"
              placeholder="Phone No"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              className="m-3 h-8 border border-slate-300 rounded-md p-4"
            />
            <input
              type="text"
              placeholder="Address"
              id="address"
              value={formData.address}
              onChange={handleChange}
              className="m-3 h-8 border border-slate-300 rounded-md p-4"
            />
            <input
              type="text"
              placeholder="Brief Description"
              id="description"
              value={formData.description}
              onChange={handleChange}
              className="m-3 h-8 border border-slate-300 rounded-md p-4"
            />
            <div className="m-3">Add Image:</div>
            <input type="file" className="w-48 ms-2" onChange={handleImageChange} />
            <div className="text-center">
              <button
                className="bg-blue-600 p-2 m-1 text-white rounded-md"
                onClick={handleSubmit}
              >
                {editingMode ? 'UPDATE' : 'ADD'}
              </button>
            </div>
          </form>
        </div>
      </div>
      <UserTable />
    </div>
  );
}

export default AdminPage;
