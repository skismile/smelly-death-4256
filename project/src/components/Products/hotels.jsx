import { Box ,Image, Badge, Grid, SimpleGrid,Text} from "@chakra-ui/react"
import { StarIcon } from "@chakra-ui/icons"
let data=[
    {
        image:'https://images.trvl-media.com/hotels/11000000/10430000/10429600/10429577/98b6d6bf_b.jpg',
        title:'Monarch Express',
        location:'Panvel',
        review:'4',
        price:'1924',
        strikePrice:'3498'
    },
    {
        image:'https://images.trvl-media.com/hotels/6000000/5390000/5381300/5381277/534f5d21_b.jpg',
        title:'Lesutra Hotel',
        location:'Mumbai',
        review:'4.3',
        price:'8002',
        strikePrice:'3498'
    },
    {
        image:'https://images.trvl-media.com/hotels/28000000/27110000/27106600/27106521/1ebf889c_b.jpg',
        title:'Monarch Express',
        location:'Panvel',
        review:'4.3',
        price:'1924',
        strikePrice:'3498'
    },
    {
        image:'https://images.trvl-media.com/hotels/11000000/10430000/10429600/10429577/98b6d6bf_b.jpg',
        title:'Monarch Express',
        location:'Panvel',
        review:'4.3',
        price:'1924',
        strikePrice:'3498'
    },
    {
        image:'https://images.trvl-media.com/hotels/19000000/18650000/18646500/18646452/ffab5d29_b.jpg',
        title:'Monarch Express',
        location:'Panvel',
        review:'4.3',
        price:'1924',
        strikePrice:'3498'
    },
    {
        image:'https://images.trvl-media.com/hotels/6000000/5370000/5360400/5360350/93bdeef0_b.jpg',
        title:'Monarch Express',
        location:'Panvel',
        review:'4.3',
        price:'1924',
        strikePrice:'3498'
    },
    {
        image:'https://images.trvl-media.com/hotels/11000000/10430000/10429600/10429577/98b6d6bf_b.jpg',
        title:'Monarch Express',
        location:'Panvel',
        review:'4.3',
        price:'1924',
        strikePrice:'3498'
    },

    {
        image:'https://images.trvl-media.com/hotels/3000000/2810000/2803500/2803420/2e3f68b1_b.jpg',
        title:'Monarch Express',
        location:'Panvel',
        review:'4.3',
        price:'1924',
        strikePrice:'3498'
    },

    {
        image:'https://images.trvl-media.com/hotels/3000000/2810000/2803500/2803420/2e3f68b1_b.jpg',
        title:'Monarch Express',
        location:'Panvel',
        review:'4.3',
        price:'1924',
        strikePrice:'3498'
    },
    {
        image:'https://images.trvl-media.com/hotels/6000000/5430000/5421000/5420934/09617742_b.jpg',
        title:'Monarch Express',
        location:'Panvel',
        review:'4.3',
        price:'1924',
        strikePrice:'3498'
    },
    {
        image:'https://images.trvl-media.com/hotels/3000000/2810000/2803500/2803420/2e3f68b1_b.jpg',
        title:'Monarch Express',
        location:'Panvel',
        review:'4.3',
        price:'1924',
        strikePrice:'3498'
    },
    {
        image:'https://images.trvl-media.com/hotels/20000000/19650000/19642800/19642706/0f72dcb9_b.jpg',
        title:'Monarch Express',
        location:'Panvel',
        review:'4.3',
        price:'1924',
        strikePrice:'3498'
    },
    {
        image:'https://images.trvl-media.com/hotels/3000000/2810000/2803500/2803420/2e3f68b1_b.jpg',
        title:'Monarch Express',
        location:'Panvel',
        review:'4.3',
        price:'1924',
        strikePrice:'3498'
    },
    {
        image:'https://images.trvl-media.com/hotels/27000000/26790000/26780600/26780594/02377d05_b.jpg',
        title:'Monarch Express',
        location:'Panvel',
        review:'4.3',
        price:'1924',
        strikePrice:'3498'
    },
    {
        image:'https://images.trvl-media.com/hotels/18000000/17460000/17455800/17455722/c2f87594_b.jpg',
        title:'Monarch Express',
        location:'Panvel',
        review:'4.3',
        price:'1924',
        strikePrice:'3498'
    },
]



export let Hotels=()=>{

    const property = {
        imageUrl: "https://images.trvl-media.com/hotels/11000000/10430000/10429600/10429577/98b6d6bf_b.jpg",
        imageAlt: "Rear view of modern home with pool",
        beds: 3,
        baths: 2,
        title: "Modern home in city center in the heart of historic Los Angeles",
        formattedPrice: "$1,900.00",
        reviewCount: 34,
        rating: 4
      }
return <Box>
    <Text fontSize={'50px' } fontWeight={'bold'} >Last-Minute Deals</Text>
    <Text fontSize={'15px' }>Time to get away? Take advantage of our last-minute deals on stays.</Text>
<SimpleGrid gap={'50px'}  w={'80%'} m={'auto'}   columns={{
          base: 1,
          sm: 1,
          md: 2,
          lg:3,
        
          
        }}>
{data.map((property)=>{
    return<Box w={'400px'} 
    // border={'1px solid red'}
     p="6">
<Image sizes='20%' src={property.image} alt='' />
  <Box  display="flex" alignItems="baseline">
    <Badge borderRadius="full" px="2" colorScheme="teal">
      New
    </Badge>
    <Box
      color="gray.500"
      fontWeight="semibold"
      letterSpacing="wide"
      fontSize="xs"
      textTransform="uppercase"
      ml="2"
    >
      {property.beds} beds &bull; {property.baths} baths
    </Box>
  </Box>

  <Box
    mt="1"
    fontWeight="semibold"
    as="h4"
    lineHeight="tight"
    noOfLines={1}
    display={'inline'}
   
  
  >
    {property.title}
  </Box>
  <Box>
    {property.location}
  </Box>

  <Box>
    {property.price}
    <Box as="span" color="gray.600" fontSize="sm">
      / night
    </Box>
  </Box>

  <Box display="flex" mt="2" alignItems="center">
    {new Array(5).fill("").map((_, i) => (
      <StarIcon
        key={i}
        color={i < property.review ? "yellow.500" : "gray.300"}
      />
    ))}
    <Box as="span" ml="2" color="gray.600" fontSize="sm">
      {property.reviewCount} reviews
    </Box>
  </Box>

<Box>

    </Box>

</Box>
})}
</SimpleGrid>
</Box>


}