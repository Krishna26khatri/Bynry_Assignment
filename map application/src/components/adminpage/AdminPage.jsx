import React,{useState} from 'react'

function AdminPage() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        address: '',
        description: '',
        image: null ,
    });
    
    const handleChange=(e)=>{
      const {id,value}=e.target;
      setFormData({...formData,[id]:value })
    }

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setFormData({
            ...formData,
            image: file,
        });
    };

    const handleSubmit=(e)=>{
        e.preventDefault();
        setFormData({
            name: '',
            phone: '',
            address: '',
            description: '',
            image: null,
        })
        console.log(formData)
    }

    return (
        <div>
            <div className="flex items-center justify-center m-5">
                
            <div className=" border-2 border-blue-300 rounded-md w-80 h-56 overflow-y-scroll">
                
                <form>
                    <input type="text" placeholder="Name" 
                    id="name"
                    value={formData.name} 
                    onChange={handleChange} 
                    className="m-3 h-8 border border-slate-300 rounded-md p-4"/>

                    <input type="text" placeholder="Phone No" id="phone"
                    value={formData.phone} 
                    onChange={handleChange}
                    className="m-3 h-8 border border-slate-300 rounded-md p-4"/>

                    <input type="text" placeholder="Address" id="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="m-3 h-8 border border-slate-300 rounded-md p-4"/>

                    <input type="text" placeholder="Brief Description" id="description"
                    value={formData.description} 
                    onChange={handleChange}
                    className="m-3 h-8 border border-slate-300 rounded-md p-4"/>
                    
                   <div className="m-3">Add Image:</div> 
                   <input type="file" className="w-48 ms-2" onChange={handleImageChange}/> 
                  <div className="text-center"> <button className="bg-blue-600 p-2 m-1 text-white rounded-md" onClick={handleSubmit}>Submit</button> </div>
                </form>

            </div>
            </div>
        </div>
     
    )
}

export default AdminPage
