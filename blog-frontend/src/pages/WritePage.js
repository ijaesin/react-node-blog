import React from 'react';
import Responsive from '../components/common/Responsive';
import WriteActionButtonContainer from '../containers/write/WriteActionButtonContainer';
import EditorContainer from '../containers/write/EditorContainer';
import TagBoxContainer from '../containers/write/TagBoxContainer';

function WritePage() {
  return (
    <Responsive>
      <EditorContainer />
      <TagBoxContainer />
      <WriteActionButtonContainer />
    </Responsive>
  );
}

export default WritePage;
