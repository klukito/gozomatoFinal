import React from 'react';
import { Box, Image} from '@chakra-ui/core';

const RestaurantCard = ({ data }) => {
  const { city, name, picture, cuisines, priceRange, rating } = data;
  
  return (
    <Box maxW="sm" borderWidth="1px" rounded="lg" overflow="hidden">
      <Image src={picture} alt={name} />

      <Box p="6">
        <Box d="flex" alignItems="baseline">
          <Badge rounded="full" px="2" variantColor="red.500">
            {city}
          </Badge>
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml="2"
          >
            {cuisines}
          </Box>
        </Box>

        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          {property.title}
        </Box>

        <Box>
          {priceRange}
          <Box as="span" color="gray.600" fontSize="sm">
            /for 2
          </Box>
        </Box>

        <Box d="flex" mt="2" alignItems="center">
          {Array(5)
            .fill("")
            .map((_, i) => (
              <StarIcon
                key={i}
                color={i < rating ? "orange.500" : "gray.300"}
              />
            ))}
        </Box>
      </Box>
    </Box>
  );

};



export default RestaurantCard;

