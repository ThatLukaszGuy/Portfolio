"use client"
import React,{useRef} from 'react'
import { Card } from './Card'
import { Text,SlideFade } from '@chakra-ui/react'
import styles from './Tech.module.css'
import { useInViewport } from 'react-in-viewport'


export const Stack = ({ tech }) => {

    // for each category
    const techRef1 = useRef(null)
    const { enterCount: enterCount1 } = useInViewport(techRef1, {rootMargin: "20%"} , {disconnectOnLeave:false}, {})

    const techRef2 = useRef(null)
    const { enterCount: enterCount2 } = useInViewport(techRef2, {rootMargin: "20%"} , {disconnectOnLeave:false}, {})

    const techRef3 = useRef(null)
    const { enterCount: enterCount3 } = useInViewport(techRef3, {rootMargin: "20%"} , {disconnectOnLeave:false}, {})

    const techRef4 = useRef(null)
    const { enterCount: enterCount4 } = useInViewport(techRef4, {rootMargin: "20%"} , {disconnectOnLeave:false}, {})

    const techRef5 = useRef(null)
    const { enterCount: enterCount5 } = useInViewport(techRef5, {rootMargin: "20%"} , {disconnectOnLeave:false}, {})

    const techRef6 = useRef(null)
    const { enterCount: enterCount6 } = useInViewport(techRef6, {rootMargin: "20%"} , {disconnectOnLeave:false}, {})


    return (
    <div className='pb-20'>
        


        <Text color={'white'} fontSize='xl' mb={2} mt={10}>
            <span className={styles.blueTS}> <span className={styles.hash}>#</span> Programming Languages: </span>
        </Text>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-3 ' ref={techRef1}>
            { tech.filter(tec => tec.category == 'lang').map((tec, i) => (
                 
                 <SlideFade key={i} delay={(i + 1.5) / 10} in={enterCount1 > 0} >
                    <Card 
                        name={tec.name} 
                        description={tec.description} 
                        img={tec.iconImage}
                    />
                 </SlideFade>

            )) }
        </div>

        <Text color={'white'} fontSize='xl' my={2}>
            <span className={styles.blueTS}><span className={styles.hash}>#</span> Web Design: </span>
        </Text>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-3 ' ref={techRef2}>
            { tech.filter(tec => tec.category == 'design').map((tec, i) => (
                 <SlideFade key={i} delay={(i + 1.5) / 10} in={enterCount2 > 0} >
                    <Card 
                        name={tec.name} 
                        description={tec.description} 
                        img={tec.iconImage}
                    />
                 </SlideFade>
            )) }
        </div>

        <Text color={'white'} fontSize='xl' my={2}>
            <span className={styles.blueTS}><span className={styles.hash}>#</span> Frontend Frameworks:</span>
        </Text>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-3 'ref={techRef3}>
            { tech.filter(tec => tec.category == 'framework').map((tec, i) => (
                 <SlideFade key={i} delay={(i + 1.5) / 10} in={enterCount3 > 0} >
                    <Card 
                        name={tec.name} 
                        description={tec.description} 
                        img={tec.iconImage}
                    />
              </SlideFade>
            )) }
        </div>

        <Text color={'white'} fontSize='xl' my={2}>
            <span className={styles.blueTS}><span className={styles.hash}>#</span> Backend Technologies:</span>
        </Text>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-3 ' ref={techRef4}>
            { tech.filter(tec => tec.category == 'backend').map((tec, i) => (
                 <SlideFade key={i} delay={(i + 1.5) / 10} in={enterCount4 > 0} >
                 <Card 
                     name={tec.name} 
                     description={tec.description} 
                     img={tec.iconImage}
                 />
            </SlideFade>
            )) }
        </div>

        <Text color={'white'} fontSize='xl' my={2}>
            <span className={styles.blueTS}><span className={styles.hash}>#</span> Databases:</span>
        </Text>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-3 ' ref={techRef5}>
            { tech.filter(tec => tec.category == 'db').map((tec, i) => (
                 <SlideFade key={i} delay={(i + 1.5) / 10} in={enterCount5 > 0} >
                    <Card 
                        name={tec.name} 
                        description={tec.description} 
                        img={tec.iconImage}
                    />
                </SlideFade>
            )) }
        </div>

        <Text color={'white'} fontSize='xl' my={2} >
            <span className={styles.blueTS}><span className={styles.hash}>#</span> Source Control:</span>
        </Text>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-3 ' ref={techRef6}>
            { tech.filter(tec => tec.category == 'sourcecontrol').map((tec, i) => (
                 <SlideFade key={i} delay={(i + 1.5) / 10} in={enterCount6 > 0} >
                    <Card 
                        name={tec.name} 
                        description={tec.description} 
                        img={tec.iconImage}
                    />
                </SlideFade>
            )) }
        </div>

    </div>
  )
}


