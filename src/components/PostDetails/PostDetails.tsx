import React, { useContext } from 'react';
import Avatar from '@material-ui/core/Avatar';
import IconWithNumber from '../IconWithNumber/IconWithNumber';
import {
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

export interface PostDetailsProps {
  comments: string[];
  tags: string[];
  taggedUsers: { image: string }[];
  link: string;
  linkDescription: string;
}

const PostDetails = ({
  comments,
  tags,
  taggedUsers,
  linkDescription,
  link
}: PostDetailsProps) => {
  const themeContext = useContext(ThemeContext);
  return (
    <>
      <UrlContent>
        <HttpsIcon title="HTTPS Icon" className="httpsIcon" />
        <Text className="url" level={5} color={themeContext.activeTheme.color3}>
          {link}
        </Text>
        <CopyIcon title="Copy Icon" className="copyIcon" onClick={() => {}} />
      </UrlContent>
      <Text
        className="description"
        level={4}
        color={themeContext.activeTheme.color1}
      >
        {linkDescription}
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

export default PostDetails;
