import React from 'react'
import { Grid,GridItem } from '@chakra-ui/react'
import { Stats } from './items/Stats'
import { Portfolio } from './items/Portfolio'
import styles from './Projects.module.css'
// <Stats />

export const GridLayout = () => {
  return (
    <Grid
    id='project-section'
    className={styles.layoutBG}
    pt={'100px'}
    pl={{ md: '16px', base: '8px' }}
    pb={'30px'}
    pr={{ md: '16px', base: '8px' }}
    templateRows={{md:'repeat(2, 1fr)' ,base:'repeat(2, 1fr) '}}
    templateColumns={{md:'repeat(9,1fr)',base:'repeat(1, 1fr)'}}
        gap={6}
        placeItems={'center'}

        >
        <GridItem rowSpan={{md:2,base:1}} colSpan={{md:6,base:1}}  rounded={'lg'} className='' p={3}>
          <Portfolio />
        </GridItem>

        <GridItem  rowSpan={{md:2,base:1}}  colSpan={{md:3,base:1}}   rounded={'lg'} className='borer-2 border-pik-700' >
        <Stats />
        </GridItem>
    </Grid>
  )
}
