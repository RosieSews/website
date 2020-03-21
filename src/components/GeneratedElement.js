import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { darken, lighten } from "polished";

const Content = styled.div`
  color: ${({ hovered, selected, theme }) =>
    hovered || selected ? theme.colors.secondary : null};
  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

export const GeneratedElementList = ({ children }) => {
  const [selected, setSelected] = useState(null);
  const select = name => setSelected(name);
  return React.Children.map(children, child => {
    // console.log("selected:", selected);
    // console.log("child props:", child);
    return selected === child.props.name
      ? React.cloneElement(child, { selected: true, select })
      : React.cloneElement(child, { selected: false, select });
  });
};

const GeneratedElement = ({ name, type, select, selected }) => {
  const [hovered, setHover] = useState(false);

  return (
    <div
      key={name}
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
      onClick={() => select(name)}
    >
      <Content hovered={hovered} selected={selected}>
        {name}
      </Content>
    </div>
  );
};

export default GeneratedElement;

GeneratedElement.propTypes = {
  name: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  type: PropTypes.string.isRequired
};
