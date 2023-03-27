import React from 'react';

interface DateInputProps {
  innerRef?: React.Ref<HTMLInputElement>;
  label: string;
  isValid: boolean;
}

export class DateInput extends React.Component<DateInputProps, object> {
  constructor(props: DateInputProps) {
    super(props);
  }

  render() {
    return (
      <label>
        {this.props.label}:
        <input type="date" ref={this.props.innerRef} />
        {this.props.isValid ? '' : <p className="error">Error </p>}
      </label>
    );
  }
}

export const DateRef = React.forwardRef(
  (props: DateInputProps, ref: React.Ref<HTMLInputElement>) => (
    <DateInput innerRef={ref} {...props} />
  )
);
