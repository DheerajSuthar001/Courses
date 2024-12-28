import { useState } from 'react';
import Card from './Card';
function Cards ({courses,category}){
    const [likedCourses,setLikedCourses]=useState([]);
    let allCourses=[];
    const getCourses=()=>{
        if(category==='All'){
            Object.values(courses).forEach((category)=>{
                category.forEach(course=>allCourses.push(course)) 
            });
            return allCourses;
        }
        else{
            return courses[category];
        }
        
    };
    return (
        <div className='flex flex-wrap justify-center gap-4 mb-4'>
            {getCourses().map((course)=>{
                return <Card likedCourses={likedCourses} setLikedCourses={setLikedCourses} key={course.id} course={course}></Card>
            })}
        </div>
    )
}
export default Cards;