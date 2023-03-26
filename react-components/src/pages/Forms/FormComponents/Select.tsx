import React from 'react';

interface SelectProps {
  innerRef?: React.Ref<HTMLSelectElement>;
  isSelect: boolean;
}

class Select extends React.Component<SelectProps, object> {
  constructor(props: SelectProps) {
    super(props);
  }

  render() {
    return (
      <label>
        Choose your country:
        <select ref={this.props.innerRef}>
          <option value="" defaultValue="true">
            Country
          </option>
          <option value="Poland">Poland</option>
          <option value="Belarus">Belarus</option>
          <option value="Russia">Russia</option>
          <option value="Ukraine">Ukraine</option>
        </select>
        {this.props.isSelect ? '' : <p className="error">Error </p>}
      </label>
    );
  }
}

export const SelectRef = React.forwardRef(
  (props: SelectProps, ref: React.Ref<HTMLSelectElement>) => <Select innerRef={ref} {...props} />
);
