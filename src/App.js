import React, { useEffect, useState } from "react";
import { filterData, apiUrl } from './data';
import Navbar from "./Components/Navbar";
import Filter from "./Components/Filter";
import Cards from "./Components/Cards";
import Spinner from "./Components/Spinner";
import { toast } from "react-toastify";
const App = () => {

  const [courses, setCourses] = useState(null);
  const [loading,setLoading]=useState(true);
  const [category,setcategory]=useState('All');
  const fetchData = async () => {
    setLoading(true);
    try {
      
      const response = await fetch(apiUrl);
      const data = await response.json();
      
      setCourses(data.data);
    } catch (error) {
      toast.error('Something went wrong');
    }
    setLoading(false);
  };
  useEffect(() => {
    fetchData();
  },[]);

  
  return (
    <div className="flex flex-col min-h-screen bg-gray-500 ">
      <Navbar></Navbar>
      <Filter filterData={filterData} category={category} setcategory={setcategory}></Filter>
      <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center  items-center min-h-[50vh]">
      {
        loading?(<Spinner></Spinner>):(<Cards category={category} courses={courses}></Cards>)
      }
      </div>
      
    </div>
  )
};

export default App;
