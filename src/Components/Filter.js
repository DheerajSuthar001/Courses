function Filter ({filterData,category, setcategory}){
    function handleCategory(title){
        setcategory(title);
    };
    return(
        <div className="w-[100%] flex justify-center items-center gap-4 py-4">
            {filterData.map((el)=>{
                return <button onClick={()=>handleCategory(el.title)}  key={el.id} className={`text-white border-[1px] bg-bgDark p-2 rounded-md py-1 hover:opacity-[0.9] 
                ${category===el.title?"border-white":"border-transparent" }`}>{el.title}</button>
            })}
        </div>
    )
}
export default Filter;