import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import IdContext from '../Context';
import OverviewGallery from './OverviewGallery';
import OverviewDescription from './OverviewDescription';

const MainContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

const OverviewHeader = styled.h3`
  text-transform: uppercase;
  padding-left: 10px;
  padding-bottom: 10px;
`;

// make a get overview function but this works
export default function Overview() {
  const { productId } = useContext(IdContext);

  const [overview, setOverview] = useState(null);
  const [ad, setAd] = useState(undefined);

  useEffect(() => {
    axios.get(`/products/${productId}`)
      .then((results) => {
        setOverview(results.data);
      })
      .catch((err) => {
        console.log('error retrieving overview', err);
      });
  }, []);
  console.log(ad);
  if (overview === null) {
    return <div>┻━┻ ︵ヽ(`Д´)ﾉ︵ ┻━┻</div>;
  }

  return (
    <MainContainer>

      <OverviewHeader>{ ad ? ad : "Add Announcement Here"}</OverviewHeader>

      <OverviewGallery overview={overview} setAd={setAd} />

      <OverviewDescription overview={overview} />

    </MainContainer>
  );
}
