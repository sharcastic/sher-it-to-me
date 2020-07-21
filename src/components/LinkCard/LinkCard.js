import React, { useState } from 'react';
import { object } from 'prop-types';

import {
  LeftContent,
  RightContent,
  Post,
  PostCreationDetails,
  TopDetailsContainer
} from './styles';
import { getTimeAndDate } from '../../utils/methods';
import ProfileIcon from '../ProfileIcon/ProfileIcon';
import Panel, { PanelItem } from '../OptionsPanel/OptionsPanel';
import LinkCardLoader from '../LinkCardLoader/LinkCardLoader';
import PostPreview from '../PostPreview/PostPreview';
import PostDetails from '../PostDetails/PostDetails';
import { ReactComponent as OptionsIcon } from '../../assets/icons/options.svg';
import { ReactComponent as DeleteIcon } from '../../assets/icons/delete.svg';
import { ReactComponent as EditIcon } from '../../assets/icons/edit.svg';
import { ReactComponent as ShareIcon } from '../../assets/icons/share.svg';

const LinkCard = ({ previewData, postData, id, activeLinkDetails, changeActiveLinkDetails}) => {
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
                  <span className="authorName">Dwight Schrute</span>
                  <span className="timeCreated">
                    at {time} on {date}
                  </span>
                </PostCreationDetails>
              </LeftContent>
              <RightContent>
                <Panel>
                  <Panel.VisibleComponent>
                    <OptionsIcon
                      title="Options Icon"
                      className="options-icon"
                    />
                  </Panel.VisibleComponent>
                  <Panel.HiddenComponent className="hidden-component">
                    <ul>
                      <PanelItem
                        onClick={() => console.log('Clicked on Share')}
                      >
                        <ShareIcon title="Share Icon" />
                        Share Post
                      </PanelItem>
                      <PanelItem onClick={() => console.log('Clicked on Edit')}>
                        <EditIcon title="Edit Icon" />
                        Edit Post
                      </PanelItem>
                      <PanelItem
                        onClick={() => console.log('Clicked on Delete')}
                      >
                        <DeleteIcon title="Delete Icon" />
                        Delete Post
                      </PanelItem>
                    </ul>
                  </Panel.HiddenComponent>
                </Panel>
              </RightContent>
            </TopDetailsContainer>
          }
        />
        <PostDetails
          selectedPanel={activeLinkDetails.panel}
          changeActiveLinkDetails={changeActiveLinkDetails}
          descriptionLineClamp={2}
          description={postData.description}
          link={postData.link}
          comments={postData.comments}
          taggedUsers={postData.taggedUsers}
          tags={postData.tags}
          id={id}
        />
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
