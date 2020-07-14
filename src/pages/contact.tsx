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


const PageTemplate = css`
  .site-main {
    background: #fff; 
    padding-bottom: 4vw;
  }
`;

const About: React.FC = () => (
  <IndexLayout>
    <Helmet>
      <title>Contactez-nous</title>
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
            <PostFullTitle>La Grande Mosquée Averroès de Montpellier</PostFullTitle>
          </PostFullHeader>

          <PostFullContent className="post-full-content">
              <p>Adresse : 300 rue Emile Picard 34080 Montpellier </p>
              <p>Tel : 0033 619 064 980/0033 434 816 735</p>
              <p>Email : averroescentreculturel@gmail.com</p>
          </PostFullContent>
        </article>
      </main>
      <Footer />
    </Wrapper>
  </IndexLayout>
);

export default About;
