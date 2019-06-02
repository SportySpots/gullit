import React from 'react';
import { Flex, Box } from 'rebass';
import styled from 'styled-components';
import { Icon } from 'microicon';

import { APP_WIDTH } from '../../constants';
import Text from '../../components/common/Text';
import Spacer from '../../components/common/Spacer';

//------------------------------------------------------------------------------
// CONSTANTS:
//------------------------------------------------------------------------------
const SECTIONS = {
  ABOUT: {
    title: 'About Sportyspots',
    subsections: [{
      title: 'Team',
      href: '/#team',
    }, {
      title: 'Story',
      href: '/#story',
    }],
  },
  SUPPORT: {
    title: 'Support',
    subsections: [{
      title: 'FAQ',
      href: '/faq',
    }, {
      title: 'Contact',
      href: '/#contact',
    }, {
      title: 'Terms of service',
      href: '/terms',
    }, {
      title: 'Privacy policy',
      href: '/privacy',
    }],
  },
  MEDIA: {
    title: 'Social Media',
    subsections: [{
      title: 'Facebook',
      href: 'https://www.facebook.com/sportyspotsHQ/',
    }, {
      title: 'Twitter',
      href: 'https://twitter.com/sportyspotshq',
    }, {
      title: 'Linkedin',
      href: 'https://www.linkedin.com/company/sportyspots/',
    }],
  },
};
//------------------------------------------------------------------------------
// STYLE:
//------------------------------------------------------------------------------
const Inner = styled(Box)`
  width: 100%;
  max-width: ${APP_WIDTH}px;
`;
//------------------------------------------------------------------------------
const Section = styled(Flex)`
  cursor: pointer;
`;
//------------------------------------------------------------------------------
// COMPONENT:
//------------------------------------------------------------------------------
class Footer extends React.PureComponent {
  state = {
    curSection: null, // Object.keys(SECTIONS)
  }

  handleClick = sec => () => {
    this.setState(prevState => ({
      curSection: prevState.curSection === sec ? null : sec,
    }));
  }

  render() {
    const { curSection } = this.state;

    return (
      <Box width="100%" bg="dusk">
        <Flex justifyContent="center">
          <Inner p={4}>
            {Object.keys(SECTIONS).map((sec) => {
              const { title, subsections } = SECTIONS[sec];
              const isActive = curSection === sec;

              return (
                <Box key={title} mb={4}>
                  <Section
                    alignItems="center"
                    onClick={this.handleClick(sec)}
                  >
                    <Text
                      color="white"
                      fontSize={[3]}
                      fontWeight="600"
                    >
                      {title}
                    </Text>
                    <Spacer row size="M" />
                    {isActive ? (
                      <Icon name="expand_more" size={24} color="white" />
                    ) : (
                      <Icon name="chevron_right" size={24} color="white" />
                    )}
                  </Section>
                  {isActive && subsections.map(sub => (
                    <Text
                      color="white"
                      fontSize={[3]}
                      // fontWeight="600"
                      mt={3}
                    >
                      {sub.title}
                    </Text>
                  ))}
                </Box>
              );
            })}
          </Inner>
        </Flex>
        <Box bg="concrete" p={4}>
          <Text
            color="black"
            fontSize={[3]}
            fontWeight="600"
            textAlign="center"
          >
            You can always contact us via
          </Text>
          <Spacer size="M" />
          <Flex alignItems="center" justifyContent="center">
            <Icon name="email" size={24} color="black" />
            <Spacer row size="L" />
            <Text
              color="black"
              fontSize={[3]}
              fontWeight="600"
            >
              hello@sportyspots.com
            </Text>
          </Flex>
        </Box>
        <Flex
          bg="white"
          alignItems="center"
          justifyContent="center"
          p={3}
        >
          <Box>
            <img
              src="/static/sportyspots-logo.png"
              alt="placeholder"
              height="22"
            />
          </Box>
        </Flex>
      </Box>
    );
  }
}

export default Footer;
