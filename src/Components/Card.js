import React from 'react'
import { FcLikePlaceholder } from "react-icons/fc";
import { FcLike } from "react-icons/fc";
import { toast } from 'react-toastify';
const Card = (props) => {
    const course=props.course;
    const likedCourses=props.likedCourses;
    const setLikedCourses=props.setLikedCourses;
    const shortDesc=course?.description.substr(0,100)+'...';

    function likeHandler(){
        if(likedCourses.includes(course.id)){
            setLikedCourses((prev)=>prev.filter(cid=>cid!==course.id));
            toast.warning('Liked removed')
        }
        else{
            if(likedCourses.length===0){
                setLikedCourses([course.id]);
            }
            else{
                setLikedCourses((prev)=>[...prev,course.id]);
            }
            toast.success('Liked Successfully');
        }
    }
    return (
        <div className='w-[300px] bg-bgDark bg-opacity-[0.8] rounded-md overflow-hidden shadow-xl'>
            <div className='relative '>
                <img src={course?.image?.url} alt={course?.image?.alt}></img>
                <button onClick={likeHandler} className='absolute rounded-full bg-white p-1 -bottom-3 right-1'>
                    {likedCourses.includes(course.id)?(<FcLike fontSize='1.3rem' />):<FcLikePlaceholder fontSize='1.3rem' />}
                </button>
            </div>
            <div className='p-3 text-white '>
                <h1 className='font-lg font-bold my-2'>{course?.title}</h1>
                <p className='text-justify'>{shortDesc}</p>
            </div>
        </div>
    )
}

export default Card;