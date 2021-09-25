import Head from 'next/head';
import Columns from '../components/common/Columns';
import Container from '../components/common/Container';
import Section from '../components/common/Section';
import ExperienceCard from '../components/about/ExperienceCard';
import FormationCard from '../components/about/FormationCard';
import ProfileCard from '../components/about/ProfileCard';
// import TechnologiesCard from '../components/about/TechnologiesCard';
import { useIntl } from 'react-intl';
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function About({ githubProfile }) {
  const { formatMessage } = useIntl();
  const _f = (id) => formatMessage({ id });

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <Head>
        <title>{_f("siteTitle")}</title>
      </Head>
      <Section color="white">
        <Container>
          <Columns>
            <Columns.Column size={3}>
              <ProfileCard githubProfile={githubProfile} />
            </Columns.Column>

            <Columns.Column size={9}>
              {/* <TechnologiesCard /> */}
              <ExperienceCard />
              <FormationCard />
            </Columns.Column>
          </Columns>
        </Container>
      </Section>
    </>
  )
}

export async function getStaticProps() {
  const githubResponse = await fetch('https://api.github.com/users/isaacpontes')
    .then(res => res.json());

  return {
    props: {
      githubProfile: githubResponse,
    }
  }
}