import CoachListingSearch from '@/components/CoachListingSearch'
import React from 'react'

const AllCoaches = ({coaches}) => {
  return (
    <div className='flex flex-wrap gap-4'>
      {coaches.length > 0 ? (coaches.map((coach,index) => (
        <div key={coach.id} className=''>
        <CoachListingSearch coach={coach} index={index}/>
        </div>
      ))) : (<Nothing/>)
      }
    </div>
  )
}

export default AllCoaches

const Nothing = ()=>{
    return(
        <div className="my-24 flex text-center   justify-center items-center">
            <div className='text-4xl flex text-center mx-auto font-bold'>No Coaches Found</div>
        </div>
    )
}