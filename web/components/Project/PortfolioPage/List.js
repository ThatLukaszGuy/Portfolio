import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import styles from '../Project.module.css'
import { BsServer } from 'react-icons/bs'
import { FaServer,FaDrawPolygon } from 'react-icons/fa'
import { MdPublic } from 'react-icons/md'
import { RiMistLine  } from 'react-icons/ri'

export const List = () => {
  return (
    <div className={styles.stack}>

        <VerticalTimeline lineColor='#4f545c'>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            iconStyle={{ background: 'rgba(79, 84, 92, 1)', color: '#c2c4c9' }}
            iconClassName={"bg-gray-900"}
            textClassName={'text-gray-400'}
            icon={<MdPublic />}
        >
            <h3 className="vertical-timeline-element-title">NextJS</h3>
            <h4 className="vertical-timeline-element-subtitle">Frontend/Fullstack</h4>
            <p>
            This was built in the NextJS framework mostly to simplify dynamic routing for the singular projects. All data from mongoDB is fetched using Server-Side-Rendering and is later passed down to other components on request to render the desired page.
            </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                iconStyle={{ background: 'rgba(79, 84, 92, 1)', color: '#c2c4c9' }}
                iconClassName={"bg-gray-900"}
                textClassName={'text-gray-400'}
                icon={<FaDrawPolygon />}
        >
            <h3 className="vertical-timeline-element-title">WebGL</h3>
            <h4 className="vertical-timeline-element-subtitle">Frontend</h4>
            <p>
            As an abstraction of WebGL , I used a package based on ThreeJS - react-three-fiber. This was used to render the landing page on the &apos;/home&apos; route and in some of the &apos;/projects&apos; routes.
            </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            iconStyle={{ background: 'rgba(79, 84, 92, 1)', color: '#c2c4c9' }}
            iconClassName={"bg-gray-900"}
            textClassName={'text-gray-400'}
            icon={<BsServer/>}
        >
            <h3 className="vertical-timeline-element-title">MongoDB</h3>
            <h4 className="vertical-timeline-element-subtitle">Fullstack</h4>
            <p>
            All Data regarding the techstack and singular Projects is stored in a MongoDB Cluster.
            </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            iconStyle={{ background: 'rgba(79, 84, 92, 1)', color: '#c2c4c9' }}
            iconClassName={"bg-gray-900"}
            textClassName={'text-gray-400'}
            icon={<FaServer/>}
        >
            <h3 className="vertical-timeline-element-title">NodeJS</h3>
            <h4 className="vertical-timeline-element-subtitle">Backend</h4>
            <p>
            This website actually consists of two seperate sites. Aside from this one , I created a custom styled upload panel for the purpose of simplifying uploading files like images into the database. This was done using a mix of nodejs, express and mongoDB 
            </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            iconStyle={{ background: 'rgba(79, 84, 92, 1)', color: '#c2c4c9' }}
            iconClassName={"bg-gray-900"}
            textClassName={'text-gray-400'}
            icon={<RiMistLine/>}
        >
            <h3 className="vertical-timeline-element-title">Other</h3>
            <p>
            To see the full list of packages/dependencies, navigate to the project repo <a rel="noreferrer" className='underline' target={'_blank'} href='https://github.com/ThatLukaszGuy/Portfolio'>here</a> and look at the package.json file in both the web and server folders.
            </p>
        </VerticalTimelineElement>

        </VerticalTimeline>


    </div>
  )
}
