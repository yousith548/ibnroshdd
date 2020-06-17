import IndexLayout from '../layouts';
import Wrapper from '../components/Wrapper';
import SiteNav from '../components/header/SiteNav';
import { SiteHeader, outer, inner, SiteMain } from '../styles/shared';
import * as React from 'react';
import { css } from '@emotion/core';

import { PostFullHeader, PostFullTitle, NoImage, PostFull } from '../templates/post';
import { PostFullContent } from '../components/PostContent';
import Footer from '../components/Footer';
import Helmet from 'react-helmet';

import pic1 from '../gallery/pic1.jpg'
import pic2 from '../gallery/pic2.jpg'
import pic3 from '../gallery/pic3.jpg'
import pic4 from '../gallery/pic4.jpg'
import pic5 from '../gallery/pic5.jpg'
import pic6 from '../gallery/pic6.jpg'
import pic7 from '../gallery/pic7.jpg'
import pic8 from '../gallery/pic8.jpg'
import pic9 from '../gallery/pic9.jpg'
import pic10 from '../gallery/pic10.jpg'

import Gallery from 'react-photo-gallery';

const photos = [
  {
    src: pic1,
    width: 4,
    height: 3
  },
  {
    src: pic2,
    width: 4,
    height: 4
  },
  {
    src: pic3,
    width: 4,
    height: 3
  },
  {
    src: pic4,
    width: 5,
    height: 3
  },
  {
    src: pic5,
    width: 4,
    height: 3
  },
  {
    src: pic6,
    width: 4,
    height: 6
  },
  {
    src: pic7,
    width: 4,
    height: 3
  },
  {
    src: pic8,
    width: 5,
    height: 4
  },
  {
    src: pic9,
    width: 4,
    height: 3
  },
  {
    src: pic10,
    width: 5,
    height: 3
  }
];

const PageTemplate = css`
  .site-main {
    background: #fff; 
    padding-bottom: 4vw;
  }
`;

const About: React.FC = () => (
  <IndexLayout>
    <Helmet>
      <title>Le mosquée</title>
    </Helmet>
    <Wrapper css={PageTemplate}>
      <header css={[outer, SiteHeader]}>
        <div css={inner}>
          <SiteNav />
        </div>
      </header>
      <main id="site-main" className="site-main" css={[SiteMain, outer]}>
        <article className="post page" css={[PostFull, NoImage]}>
          <PostFullHeader>
            <PostFullTitle>le mosquée</PostFullTitle>
          </PostFullHeader>

          <PostFullContent className="post-full-content">
            <div className="post-content">
              <h1>BIENVENUE DANS LA GRANDE MOSQUÉE MOHAMMED VI</h1>
              <p>
                Véritable ambassadrice d’un islam de tolérance et de paix en France,
                la Grande Mosquée Mohammed VI est un monument culturel et architectural
                qui appartient à tous les stéphanois. La Grande Mosquée Mohammed VI
                incarne l’islam pacifique et universel, héritage vivant d’un âge d’or
                qui traverse les époques pour venir s’implanter à Saint-Étienne et
                partager avec ses habitants le rayonnement de son message.
              </p>
              <p>
                Inaugurée le 19 juin 2012, elle devient rapidement l’un des sites les plus
                visités de la région Auvergne-Rhône-Alpes et se positionne comme un édifice
                incontournable lors des Journées Européennes du Patrimoine.
              </p>
            </div>
            <Gallery photos={photos} />
  
          </PostFullContent>
        </article>
      </main>
      <Footer />
    </Wrapper>
  </IndexLayout>
);

export default About;
