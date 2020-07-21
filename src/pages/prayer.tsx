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

const prayer: React.FC = () => (
  <IndexLayout>
    <Helmet>
      <title>Donation</title>
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
            <PostFullTitle>la Grande Mosquée IBN ROCH de Montpellier</PostFullTitle>
          </PostFullHeader>
          <div style="margin:auto; border:1px solid #c0c0c0" id="prayer-container">
    <div class="prayer_time">Heures de Prière</div>
    <div id="prayer_city"></div>
    <div id="prayer_date"></div>
    <div id="prayer_clock"></div>
    <table>
        <tbody>
            <tr>
                <td>Imsak</td>
                <td id="Imsak"></td>
            </tr>
            <tr>
                <td>Fajr</td>
                <td id="Fajr"></td>
            </tr>
            <tr>
                <td>Dhuhr</td>
                <td id="Dhuhr"></td>
            </tr>
            <tr>
                <td>Asr</td>
                <td id="Asr"></td>
            </tr>
            <tr>
                <td>Maghrib</td>
                <td id="Maghrib"></td>
            </tr>
            <tr>
                <td>Isha</td>
                <td id="Isha"></td>
            </tr>
        </tbody>
    </table>
</div>
<script
  dangerouslySetInnerHTML={{
    __html: `
    var api_url = 'https://api.pray.zone/v2/times/today.json?ip=auto';
    document.addEventListener("DOMContentLoaded", function () {
        PrayerTimesApi();
    });
`
  }}
/> 
        </article>
      </main>
      <Footer />
    </Wrapper>
  </IndexLayout>
);

export default prayer;
