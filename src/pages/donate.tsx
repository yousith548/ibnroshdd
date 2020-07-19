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

const donate: React.FC = () => (
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
            <PostFullTitle>Soutenez la Grande Mosquée IBN ROCH de Montpellier</PostFullTitle>
          </PostFullHeader>

          <PostFullContent className="post-full-content">
              <p>En 2018 , le projet d'achat de  la Grande mosquée AVERROES  s'est enfin concrétisée   ,par la grâce d'Allah Taala nous avons pu récolté la somme d'achat , nous remercions donc tous les donateurs qui ont participé à cet acte de bienfaisance , financé par les généreux dons de la communauté . </p>
              <p>Ensemble nous sommes arrivés à construire des grands projets, al hamdu lillah ! 
Par la grâce d'Allah taala, et encore une fois par une communauté et des donateurs dévoués.</p>
              <p>Nous avons besoin de votre aide en ce qui concerne les frais généraux de la mosquée,les frais concernant l'imamat, les frais de fonctionnement et les frais d'entretien divers. </p>
              <p>Comme le Prophète (que la paix et le salut d'Allah soit sur lui ) à dit:" Celui qui construit une mosquée pour Allah, Allah lui construit son équivalent dans le paradis". (Mouslim n°533).</p>
              <p>Nous avons donc pour objectif de faire ce lieu , une mosquée d'entraide et de partage et de lieu de sérénité, cela nécessite une entraide et une contribution de la part de chacun afin que tout le monde puisse adorer son seigneur dans les meilleurs conditions possibles.</p>
              <p>Nous débutons donc cette cagnotte par l'objectif  de 5 000 € à atteindre.
Si seulement 100 personnes donnent 50 € , l'objectif sera rapidement atteint in sha Allah !</p>
              <p>Le Prophète (que la paix et le salut d'Allah soit sur lui ) à dit
«Allah vient en aide au serviteur tant que ce dernier vient en aide à son frère» (Mouslim).</p>
              <p>
              Vous pouvez contacter les responsables, par Téléphone, SMS, WhatsApp
Président : 06 60 11 18 87
Trésorier : 06 63 66 53 86

ssecrétaire: 0619064980
              </p>
              <p>➡ Si vous souhaitez faire un don en ligne :
              <a href="https://www.cotizup.com/grandemosqueeaverroes">participer par Carte Bancaire ou PayPal.</a>
              </p>
              <p>➡ Si vous souhaitez faire un don par virement :

Bénéficiaire : ASSOC ACMIR

IBAN : FR76 350 6100 0014 1305 2100 080</p>
              <p>➡ Si vous souhaitez faire un don par chèque :

Ordre : ASSOC A.C.M.I.R

Adresse : 
ASSOC ACMIR
300 RUE EMILE PICARD 
34080 MONTPELLIER </p>
              <p>Un reçu fiscal peut vous être délivré si vous le souhaitez
Quel que soit le montant, chacun peut participer à cette cagnotte. Pas besoin de crér un compte ou de s'inscrire, c'est rapide et les paiements sont 100% sécurisés. Possibilité de participer par Carte Bancaire ou PayPal</p>
              <p>Si vous ne pouvez pas participer financièrement, partagez cette cagnotte autour de vous au maximum. MERCI !</p>
          </PostFullContent>
        </article>
      </main>
      <Footer />
    </Wrapper>
  </IndexLayout>
);

export default donate;
