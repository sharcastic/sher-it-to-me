import React, { useContext, useMemo } from 'react';
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
import PostDetails, { PostDetailsProps } from '../PostDetails/PostDetails';
import { ThemeContext } from 'styled-components';

interface LinkCardProps {
  previewData: {
    imageUrl: string;
    link: string;
    title: string;
    description: string;
  } | null;
  authorImageUrl: string;
  createdDate: Date;
  authorName: string;
  postDetails: PostDetailsProps;
}

const LinkCard = ({
  previewData,
  authorImageUrl,
  createdDate,
  authorName,
  postDetails
}: LinkCardProps) => {
  const { activeTheme } = useContext(ThemeContext);
  const [time, date] = useMemo(() => getTimeAndDate(createdDate), [
    createdDate
  ]);
  if (previewData) {
    return (
      <Post>
        <PostPreview
          image={previewData.imageUrl}
          linkURL={previewData.link}
          title={previewData.title}
          description={previewData.description}
          topSection={
            <TopDetailsContainer>
              <LeftContent>
                <ProfileIcon className="authorIcon" img={authorImageUrl} />
                <PostCreationDetails>
                  <Heading
                    className="authorName"
                    level={6}
                    color={activeTheme.color4}
                  >
                    {authorName}
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
          <PostDetails {...postDetails} />
        </PostDetailsContainer>
      </Post>
    );
  }
  return <LinkCardLoader />;
};

export default LinkCard;
