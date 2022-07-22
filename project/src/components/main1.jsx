import {Flex,Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'



export const Main1=()=>{
   
    


    return <div>
    
    <Flex border={'1px solid black'} w={'80%'} m={'auto'} h={'250px'}  >
    <Tabs width={'100%'}  >
  <TabList display={'flex'} justifyContent={'center'} >
    <Tab>Stays</Tab>
    <Tab>Flight</Tab>
    <Tab>Cars</Tab>
    <Tab>Packages</Tab>
    <Tab>Things to do</Tab>

  </TabList>

  <TabPanels>
    <TabPanel>
      <p>one!</p>
    </TabPanel>
    <TabPanel>
      <p>two!</p>
    </TabPanel>
    <TabPanel>
      <p>three!</p>
    </TabPanel>
    <TabPanel>
      <p>four!</p>
    </TabPanel>
    <TabPanel>
      <p>five!</p>
    </TabPanel>
  </TabPanels>
</Tabs>

    </Flex>
    
    </div>
    
    }