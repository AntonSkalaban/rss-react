import React from 'react';

interface FileInputProps {
  label: string;
  isValid: boolean;
  innerRef?: React.Ref<HTMLInputElement>;
}
class FileInput extends React.Component<FileInputProps, object> {
  constructor(props: FileInputProps) {
    super(props);
  }

  render() {
    return (
      <label htmlFor="file">
        {this.props.label}:
        <input
          type="file"
          ref={this.props.innerRef}
          name="file"
          accept="image/png, image/gif, image/jpeg"
        />
        {this.props.isValid ? (
          ''
        ) : (
          <p className="error">Add an image in the format image/png, image/gif, image/jpeg </p>
        )}
      </label>
    );
  }
}

export const FileRef = React.forwardRef(
  (props: FileInputProps, ref: React.Ref<HTMLInputElement>) => (
    <FileInput innerRef={ref} {...props} />
  )
);
