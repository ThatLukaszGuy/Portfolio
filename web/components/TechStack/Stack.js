import React from 'react'
import { Card } from './Card'
import { Text } from '@chakra-ui/react'
import styles from './Tech.module.css'

export const Stack = ({ tech }) => {

    return (
    <div className='pb-20'>
        


        <Text color={'white'} fontSize='xl' mb={2} mt={10}>
            <span className={styles.blueTS}> <span className={styles.hash}>#</span> Programming Languages: </span>
        </Text>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-3 '>
            { tech.filter(tec => tec.category == 'lang').map((tec, i) => (
                 <Card
                    key={i} 
                    name={tec.name} 
                    description={tec.description} 
                    img={tec.iconImage}
                />
            )) }
        </div>

        <Text color={'white'} fontSize='xl' my={2}>
            <span className={styles.blueTS}><span className={styles.hash}>#</span> Web Design: </span>
        </Text>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-3 '>
            { tech.filter(tec => tec.category == 'design').map((tec, i) => (
                 <Card
                    key={i} 
                    name={tec.name} 
                    description={tec.description} 
                    img={tec.iconImage}
                />
            )) }
        </div>

        <Text color={'white'} fontSize='xl' my={2}>
            <span className={styles.blueTS}><span className={styles.hash}>#</span> Frontend Frameworks:</span>
        </Text>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-3 '>
            { tech.filter(tec => tec.category == 'framework').map((tec, i) => (
                 <Card
                    key={i} 
                    name={tec.name} 
                    description={tec.description} 
                    img={tec.iconImage}
                />
            )) }
        </div>

        <Text color={'white'} fontSize='xl' my={2}>
            <span className={styles.blueTS}><span className={styles.hash}>#</span> Backend Technologies:</span>
        </Text>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-3 '>
            { tech.filter(tec => tec.category == 'backend').map((tec, i) => (
                 <Card
                    key={i} 
                    name={tec.name} 
                    description={tec.description} 
                    img={tec.iconImage}
                />
            )) }
        </div>

        <Text color={'white'} fontSize='xl' my={2}>
            <span className={styles.blueTS}><span className={styles.hash}>#</span> Databases:</span>
        </Text>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-3 '>
            { tech.filter(tec => tec.category == 'db').map((tec, i) => (
                 <Card
                    key={i} 
                    name={tec.name} 
                    description={tec.description} 
                    img={tec.iconImage}
                />
            )) }
        </div>

        <Text color={'white'} fontSize='xl' my={2} >
            <span className={styles.blueTS}><span className={styles.hash}>#</span> Source Control:</span>
        </Text>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-3 '>
            { tech.filter(tec => tec.category == 'sourcecontrol').map((tec, i) => (
                 <Card
                    key={i} 
                    name={tec.name} 
                    description={tec.description} 
                    img={tec.iconImage}
                />
            )) }
        </div>

    </div>
  )
}


