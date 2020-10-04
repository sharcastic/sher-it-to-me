import React, { useContext, useMemo } from 'react';
import { ThemeContext } from 'styled-components';
import ProfileIcon from '../ProfileIcon/ProfileIcon';
import { Text, Span, Heading } from 'styled-typography';
import { getTimeAndDate } from '../../utils/methods';
import PostDetails, { PostDetailsProps } from '../PostDetails/PostDetails';
import {
  CompactCardContainer,
  CompactCardHeader,
  HeaderLeftSection,
  CompactCardHeaderText,
  TopHeaderText
} from './styles';

interface CompactCardProps {
  postDetails: PostDetailsProps;
  createdDate: Date;
  authorName: string;
  description: string;
}
const CompactCard = ({
  postDetails,
  authorName,
  createdDate,
  description
}: CompactCardProps) => {
  const { activeTheme } = useContext(ThemeContext);
  const [time, date] = useMemo(() => getTimeAndDate(createdDate), [
    createdDate
  ]);
  return (
    <CompactCardContainer>
      <CompactCardHeader>
        <HeaderLeftSection>
          <ProfileIcon
            className="authorIcon"
            img="https://i.imgflip.com/4/4t0m5.jpg"
          />
          <CompactCardHeaderText>
            <TopHeaderText>
              <Heading
                color={activeTheme.color6}
                level={6}
                className="authorName"
              >
                {authorName}
              </Heading>
              <Span
                className="timeCreated"
                level={6}
                color={activeTheme.color6}
              >
                at {time} on {date}
              </Span>
            </TopHeaderText>
            <Text color={activeTheme.color1} level={4} className="post-title">
              {description}
            </Text>
          </CompactCardHeaderText>
        </HeaderLeftSection>
        <div />
      </CompactCardHeader>
      <PostDetails {...postDetails} />
    </CompactCardContainer>
  );
};

export default CompactCard;
