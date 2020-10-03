import React, { useContext } from 'react';
import { object } from 'prop-types';
import { Heading, Text } from 'styled-typography';

import {
  LeftContent,
  RightContent,
  Post,
  PostCreationDetails,
  TopDetailsContainer,
  PostDetailsContainer
} from './styles';
import { getTimeAndDate } from '../../utils/methods';
import ProfileIcon from '../ProfileIcon/ProfileIcon';
import LinkCardLoader from '../LinkCardLoader/LinkCardLoader';
import PostPreview from '../PostPreview/PostPreview';
import PostDetails from '../PostDetailsV2/PostDetails';
import { ThemeContext } from 'styled-components';

const LinkCard = ({
  previewData,
  postData,
  id,
  activeLinkDetails,
  changeActiveLinkDetails
}) => {
  const { activeTheme } = useContext(ThemeContext);
  const [time, date] = getTimeAndDate(new Date());
  if (previewData) {
    return (
      <Post>
        <PostPreview
          image={previewData.image}
          linkURL={previewData.link}
          title={previewData.title}
          description={previewData.description}
          topSection={
            <TopDetailsContainer>
              <LeftContent>
                <ProfileIcon
                  className="authorIcon"
                  img="https://i.imgflip.com/4/4t0m5.jpg"
                />
                <PostCreationDetails>
                  <Heading
                    className="authorName"
                    level={6}
                    color={activeTheme.color4}
                  >
                    Dwight Schrute
                  </Heading>
                  <Text
                    className="timeCreated"
                    level={6}
                    color={activeTheme.color4}
                  >
                    at {time} on {date}
                  </Text>
                </PostCreationDetails>
              </LeftContent>
              <RightContent></RightContent>
            </TopDetailsContainer>
          }
        />
        <PostDetailsContainer>
          <PostDetails
            comments={['one', 'two']}
            tags={['one']}
            taggedUsers={[
              { image: 'lol' },
              { image: 'lol2' },
              { image: 'lo3' },
              { image: 'lol4' }
            ]}
          />
        </PostDetailsContainer>
      </Post>
    );
  }
  return <LinkCardLoader />;
};

LinkCard.propTypes = {
  previewData: object.isRequired,
  postData: object.isRequired
};

export default LinkCard;