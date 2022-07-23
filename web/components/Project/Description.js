import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { RiPushpinFill } from 'react-icons/ri'
import { FaMountain } from 'react-icons/fa'
import { BsLightbulbFill } from 'react-icons/bs'
import React from 'react'
import styles from './Project.module.css'


export const Description = ({ project }) => {
  
    
  
    return (
    <div className={styles.descBG}>
        <VerticalTimeline layout='1-column-left' lineColor='#4f545c' >
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                iconStyle={{ background: 'rgba(79, 84, 92, 1)', color: '#c2c4c9' }}
                iconClassName={"bg-gray-900"}
                textClassName={'text-gray-400'}
                position={'right'}
                icon={<BsLightbulbFill />  }
            >
                <h3 className="vertical-timeline-element-title">Overall info :</h3>
                <p>
                    {project.description.info}
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className=""
                iconStyle={{ background: 'rgba(79, 84, 92, 1)', color: '#c2c4c9' }}
                position={'right'}
                icon={<RiPushpinFill/> }
                textClassName={'text-gray-400'}
            >
                <h3 className="vertical-timeline-element-title">Reason :</h3>
                <p>

                {project.description.reason}
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work "
                iconStyle={{ background: 'rgba(79, 84, 92, 1)', color: '#c2c4c9' }}
                position={'right'}
                icon={<FaMountain/>}
                textClassName={'text-gray-400'}
            >
                <h3 className="vertical-timeline-element-title">
                    
                    Difficulties :</h3>
                <p>
                {project.description.difficulties}
                </p>
            </VerticalTimelineElement>

            
            </VerticalTimeline>
    </div>
  )
}
