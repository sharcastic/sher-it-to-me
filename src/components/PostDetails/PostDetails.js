import React from 'react';
import { array, string, func, number } from 'prop-types';

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
  onCopy,
  descriptionLineClamp,
  selectedPanel,
  changeActiveLinkDetails,
  id
}) => {
  const toggleExtraPanel = panel => () => {
    changeActiveLinkDetails(id, panel);
  };

  const onCopyClick = () =>
    navigator.clipboard.writeText(link).then(() => {
      onCopy();
    });
  return (
    <PostDetailsContainer>
      <UrlContainer>
        <UrlContent>
          <HttpsIcon title="HTTPS Icon" className="httpsIcon" />
          <UrlText>{link}</UrlText>
          <CopyIcon
            title="Copy Icon"
            className="copyIcon"
            onClick={onCopyClick}
            style={{ cursor: 'pointer' }}
          />
        </UrlContent>
        <DescriptionText lineClamp={descriptionLineClamp}>
          {description}
        </DescriptionText>
      </UrlContainer>
      <IconRow>
        <IconSections>
          <IconContainer
            active={selectedPanel === 'comments'}
            onClick={toggleExtraPanel('comments')}
            style={{ marginRight: '30px' }}
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
              {taggedUsers.slice(0, 3).map(({ image }, index) => (
                <ProfileIcon img={image} key={index} />
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
  onCopy: func,
  descriptionLineClamp: number,
  selectedPanel: string.isRequired,
  changeActiveLinkDetails: func.isRequired
};

PostDetails.defaultProps = {
  description: '',
  link: '',
  taggedUsers: [],
  comments: [],
  tags: [],
  onCopy: () => alert('Link Copied!'),
  descriptionLineClamp: 0
};

export default PostDetails;
