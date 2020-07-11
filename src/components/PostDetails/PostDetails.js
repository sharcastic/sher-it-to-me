import React, { useState } from 'react';
import { array, string, func } from 'prop-types';

import ProfileIcon from '../ProfileIcon/ProfileIcon';
import { ReactComponent as HttpsIcon } from '../../assets/icons/https.svg';
import { ReactComponent as CopyIcon } from '../../assets/icons/copy.svg';
import { ReactComponent as CommentIcon } from '../../assets/icons/comment.svg';
import { ReactComponent as TagIcon } from '../../assets/icons/tag.svg';

import {
  PostDetailsContainer,
  UrlContainer,
  UrlContent,
  UrlText,
  DescriptionText,
  IconRow,
  NumberSpan,
  PeopleIconContainer,
  IconSections,
  IconContainer
} from './styles';

const PostDetails = ({
  description,
  link,
  taggedUsers,
  comments,
  tags,
  onCopy
}) => {
  const [selectedPanel, setSelectedPanel] = useState();
  const toggleExtraPanel = panel => () => {
    if (!selectedPanel || panel !== selectedPanel) {
      setSelectedPanel(panel);
    } else {
      setSelectedPanel();
    }
  };
  const onCopyClick = () =>
    navigator.clipboard.writeText(link).then(() => {
      onCopy();
    });
  return (
    <PostDetailsContainer>
      <UrlContainer>
        <UrlContent>
          <HttpsIcon title="HTTPS Icon" className="link-info__url__httpsIcon" />
          <UrlText>{link}</UrlText>
          <CopyIcon
            title="Copy Icon"
            className="link-info__url__copyIcon"
            onClick={onCopyClick}
            style={{ cursor: 'pointer' }}
          />
        </UrlContent>
        <DescriptionText>{description}</DescriptionText>
      </UrlContainer>
      <IconRow>
        <IconSections>
          <IconContainer
            active={selectedPanel === 'comments'}
            onClick={toggleExtraPanel('comments')}
            style={{ 'margin-right': '30px' }}
          >
            <CommentIcon title="Comment Icon" />
            <NumberSpan>{comments.length}</NumberSpan>
          </IconContainer>
          <IconContainer
            active={selectedPanel === 'tags'}
            onClick={toggleExtraPanel('tags')}
          >
            <TagIcon className="tags__icon" />
            <NumberSpan>{tags.length}</NumberSpan>
          </IconContainer>
        </IconSections>
        <IconSections>
          <IconContainer
            active={selectedPanel === 'friends'}
            onClick={toggleExtraPanel('friends')}
          >
            <PeopleIconContainer>
              {taggedUsers.slice(0, 3).map(({ image }) => (
                <ProfileIcon img={image} />
              ))}
            </PeopleIconContainer>
            <NumberSpan>
              {taggedUsers.length !== 0 && taggedUsers.length}
            </NumberSpan>
          </IconContainer>
        </IconSections>
      </IconRow>
    </PostDetailsContainer>
  );
};

PostDetails.propTypes = {
  description: string,
  link: string,
  taggedUsers: array,
  comments: array,
  tags: array,
  onCopy: func
};

PostDetails.defaultProps = {
  description: '',
  link: '',
  taggedUsers: [],
  comments: [],
  tags: [],
  onCopy: () => {}
};

export default PostDetails;
