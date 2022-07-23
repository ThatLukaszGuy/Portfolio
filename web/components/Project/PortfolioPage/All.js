import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Banner } from './Banner';
import { List } from './List';

// client side Next, MongoDB, WebGL -> abstracted with react-three-fiber/three js 
// server Upload Panel in express nodejs

export const All = () => {
  return (
    <div className='bg-gray-800'>
        <Banner />
        <List />
    </div>
  )
}
