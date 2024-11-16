import React,{createContext,useState} from 'react';

// Create Context
export const UserContext = createContext();

// Provider Component
export const UserProvider = ({ children }) => {
  const [userList, setUserList] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    description: '',
    image: null,
  });
  const [editingMode, setEditingMode] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, image: file });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingMode) {
      const updatedList = userList.map((user) =>
        user.name === formData.name ? formData : user
      );
      setUserList(updatedList);
      setEditingMode(false);
    } else {
      setUserList([...userList, formData]);
    }

    setFormData({
      name: '',
      phone: '',
      address: '',
      description: '',
      image: null,
    });
    alert(editingMode ? 'Updated Successfully' : 'Added Successfully');
  };

  const handleEdit = (data) => {
      // console.log(data)
    setFormData(data);
    setEditingMode(true);
  };

  const handleDelete = (name) => {
      // console.log(name)
    const updatedList = userList.filter((user) => user.name !== name);
    setUserList(updatedList);
    alert(`${name} named user Deleted`);
  };

  return (
    <UserContext.Provider
      value={{
        userList,
        formData,
        editingMode,
        handleChange,
        handleImageChange,
        handleSubmit,
        handleEdit,
        handleDelete,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
