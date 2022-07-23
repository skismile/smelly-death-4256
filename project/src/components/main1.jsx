import {Flex,Tabs, TabList, TabPanels, Tab, TabPanel,Input, Button } from '@chakra-ui/react'



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
     
      <Flex gap={'10px'}>
    <Input placeholder='Going to'></Input>
    <Input placeholder='Check-in'></Input>
    <Input placeholder='Check-out' ></Input>
    <Input placeholder='Travellers'></Input>
</Flex>
<br /><br />
<Button p={'10px 40px 10px 40px'} bg={'#3662D8'} color={'white'}>Search</Button>
    </TabPanel>
    <TabPanel>
    <Flex gap={'10px'}>
    <Input placeholder='Leaving from'></Input>
    <Input placeholder='Going to'></Input>
    <Input placeholder='Departing' ></Input>

</Flex>
<br /><br />
<Button p={'10px 40px 10px 40px'} bg={'#3662D8'} color={'white'}>Search</Button>
    </TabPanel>
    <TabPanel>
    <Flex gap={'10px'}>
    <Input  placeholder='Pick up'></Input>
    <Input placeholder='Same as pick-up'></Input>
    <Input placeholder='Pick-up Date' ></Input>
    <Input placeholder='Drop-of Date'></Input>
</Flex>
<br /><br />
<Button p={'10px 40px 10px 40px'} bg={'#3662D8'} color={'white'}>Search</Button>
    </TabPanel>
    <TabPanel>
    <Flex gap={'10px'}>
    <Input placeholder='Leaving from'></Input>
    <Input placeholder='Going to'></Input>
    <Input placeholder='Departing' ></Input>
    <Input placeholder='Returning'></Input>
</Flex>
<br /><br />
<Button p={'10px 40px 10px 40px'} bg={'#3662D8'} color={'white'}>Search</Button>
    </TabPanel>
    <TabPanel>
    <Flex gap={'10px'}>
    <Input placeholder='Things to do'></Input>
    <Input placeholder='From'></Input>
    <Input placeholder='To' ></Input>

</Flex>
<br /><br />
<Button p={'10px 40px 10px 40px'} bg={'#3662D8'} color={'white'}>Search</Button>
    </TabPanel>
  </TabPanels>
</Tabs>

    </Flex>
    
    </div>
    
    }