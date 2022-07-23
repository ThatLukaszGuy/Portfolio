import styles from './Projects.module.css'
import React from 'react'
import { GridLayout } from './GridLayout'
import { ProjectBanner } from './ProjectBanner'
import { ProjectTabs } from './items/ProjectTabs'

export const Project = ({projectsProps}) => {
  return (
    <>
      <ProjectBanner />
      <div className={styles.projectSecondBG}>
        <GridLayout />
        <ProjectTabs projectsProps={projectsProps}/>
      </div>
        
    </>
  )
}
