import React from 'react';

interface TextInputProps {
  innerRef?: React.Ref<HTMLInputElement>;
  label: string;
  isValid: boolean;
}

class TextInput extends React.Component<TextInputProps, object> {
  constructor(props: TextInputProps) {
    super(props);
  }

  render() {
    return (
      <label>
        {this.props.label}:
        <input type="text" ref={this.props.innerRef} />
        {this.props.isValid ? '' : <p className="error">Enter first and last name </p>}
      </label>
    );
  }
}

export const TextInputRef = React.forwardRef(
  (props: TextInputProps, ref: React.Ref<HTMLInputElement>) => (
    <TextInput innerRef={ref} {...props} />
  )
);
