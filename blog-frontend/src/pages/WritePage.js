import React from 'react';
import Responsive from '../components/common/Responsive';
import WriteActionButtonContainer from '../containers/write/WriteActionButtonContainer';
import EditorContainer from '../containers/write/EditorContainer';
import TagBoxContainer from '../containers/write/TagBoxContainer';
import { Helmet } from 'react-helmet-async';

function WritePage() {
  return (
    <Responsive>
      <Helmet>
        <title>글 작성하기 - i.Blog</title>
      </Helmet>
      <EditorContainer />
      <TagBoxContainer />
      <WriteActionButtonContainer />
    </Responsive>
  );
}

export default WritePage;
