import React from 'react';

interface CheckboxProps {
  innerRef?: React.Ref<HTMLInputElement>;
  name: string;
  label: string;
}

class Checkbox extends React.Component<CheckboxProps, object> {
  constructor(props: CheckboxProps) {
    super(props);
  }

  render() {
    return (
      <label>
        <input type="checkbox" name={this.props.name} ref={this.props.innerRef} />
        {this.props.label}
      </label>
    );
  }
}

export const CheckboxRef = React.forwardRef(
  (props: CheckboxProps, ref: React.Ref<HTMLInputElement>) => <Checkbox innerRef={ref} {...props} />
);
