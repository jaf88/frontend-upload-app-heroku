import React, { Component } from "react";

import Dropzone from 'react-dropzone';

import { DropContainer, UploadMessage } from './styles';

export default class Upload extends Component {
  renderDragMessage = (isDragActive, isDragReject) => {
    if (!isDragActive) {
      return <UploadMessage>Drag your files here</UploadMessage>
    }
    if (isDragReject) {
      return <UploadMessage type="error"> Files not support</UploadMessage>
    }

    return <UploadMessage type="success">Drop your files here</UploadMessage>
  }

  render() {
    const { onUpload } = this.props;

    return (
      <Dropzone accept="image/*" onDropAccepted={onUpload}>
        { ({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
          <DropContainer 
            { ...getRootProps() }
            isDragActive={isDragActive}
            isDragReject={isDragReject}
          >
            <input { ... getInputProps()} />
            { this.renderDragMessage(isDragActive, isDragReject) }

          </DropContainer>
        ) }
      </Dropzone>
    );
  }
}