import React from 'react';

interface RadioProps {
  name: string;
  label: string;
  innerRef?: React.Ref<HTMLInputElement>;
}
export class Radio extends React.Component<RadioProps, object> {
  constructor(props: RadioProps) {
    super(props);
  }

  render() {
    return (
      <label>
        <input type="radio" name={this.props.name} ref={this.props.innerRef} />
        {this.props.label}
      </label>
    );
  }
}

export const RadioRef = React.forwardRef((props: RadioProps, ref: React.Ref<HTMLInputElement>) => (
  <Radio innerRef={ref} {...props} />
));
