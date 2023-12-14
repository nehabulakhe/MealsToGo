import { View, Text,Image } from 'react-native'
import React from 'react'
import { Card } from 'react-native-paper';
import styled from'styled-components/native'
import {SvgXml} from 'react-native-svg'
import star from '../../../../assets/star'
import open from '../../../../assets/open'

const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
  margin-bottom: ${(props) => props.theme.space[3]};
`;

const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const Address = styled(Text)`
  font-size: ${(props) => props.theme.fontSizes.button};
`;

const Title = styled(Text)`
  font-size: ${(props) => props.theme.fontSizes.body};
  color: ${(props) => props.theme.colors.ui.primary};
`;

const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const Rating = styled.View`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
`;
const Open =styled(SvgXml)`
   flex-direction:row
`;

const Section=styled.View`
   flex-direction:row;
   align-items:center;
`;

const SectionEnd = styled.View`
  flex-direction: row;
  justify-content:flex-end;
  flex:1
`;



const RestaurantInfoCard = ({restaurant={}}) => {
  const {
    name="Some restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos=[
      "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?cs=srgb&dl=pexels-pixabay-262978.jpg&fm=jpg"
    ],
    address=" streets pune",
    isOpenNow=true,
    rating=3,
    isClosedTemporarily=true,
}=restaurant;

const ratingArray = Array.from(new Array(Math.floor(rating)));
  return (
    <RestaurantCard elevation={5} >
      <RestaurantCardCover key={name}  source={{ uri: photos[0] }} />
      <Info>
        <Title>{name}</Title>
    
      <Section>
        <Rating>
          {ratingArray.map(() => (
            <SvgXml xml={star} width={20} height={20} />
          ))}
        </Rating>
    
        <SectionEnd>
            {isClosedTemporarily && (
              <Text variant="label" style={{ color: "red" }}>
                  CLOSED TEMPORARILY
                </Text>
              )}
            <View style={{ paddingLeft: 16 }} />
              {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
              <View style={{ paddingLeft: 16 }} />
              <Image style={{ width: 15, height: 15 }} source={{ uri: icon }} />
        </SectionEnd>
      </Section>
        <Address>{address}</Address>
    </Info>
  </RestaurantCard>
  );
};

export default RestaurantInfoCard
