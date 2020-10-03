import React, { useContext } from 'react';
import Avatar from '@material-ui/core/Avatar';
import IconWithNumber from '../IconWithNumber/IconWithNumber';
import {
  UrlContainer,
  UrlContent,
  IconRow,
  IconSections,
  PeopleIconContainer
} from './styles';
import { ReactComponent as HttpsIcon } from '../../assets/icons/https.svg';
import { ReactComponent as CopyIcon } from '../../assets/icons/copy.svg';
import { ReactComponent as CommentIcon } from '../../assets/icons/comment.svg';
import { ReactComponent as TagIcon } from '../../assets/icons/tag.svg';
import { AvatarGroup } from '@material-ui/lab';
import { Text } from 'styled-typography';
import { ThemeContext } from 'styled-components';

interface DynamicLinkCardProps {
  comments: string[];
  tags: string[];
  taggedUsers: { image: string }[];
}

const DynamicLinkCard = ({
  comments,
  tags,
  taggedUsers
}: DynamicLinkCardProps) => {
  const themeContext = useContext(ThemeContext);
  return (
    <>
      <UrlContent>
        <HttpsIcon title="HTTPS Icon" className="httpsIcon" />
        <Text className="url" level={5} color={themeContext.activeTheme.color3}>
          https://google.com
        </Text>
        <CopyIcon title="Copy Icon" className="copyIcon" onClick={() => {}} />
      </UrlContent>
      <Text
        className="description"
        level={4}
        color={themeContext.activeTheme.color1}
      >
        Title or Description for the link shared which can go into multiple
        lines
      </Text>
      <IconRow>
        <IconSections className="leftSection">
          <IconWithNumber number={comments.length}>
            <CommentIcon title="Comment Icon" />
          </IconWithNumber>
          <IconWithNumber number={tags.length}>
            <TagIcon />
          </IconWithNumber>
        </IconSections>
        <IconSections className="rightSection">
          <PeopleIconContainer>
            <AvatarGroup max={3} className="avatarGroup">
              {taggedUsers.map(({ image }, index) => (
                <Avatar src={image} key={index} />
              ))}
            </AvatarGroup>
          </PeopleIconContainer>
        </IconSections>
      </IconRow>
    </>
  );
};

export default DynamicLinkCard;
