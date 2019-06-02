import React from 'react';
import PropTypes from 'prop-types';
import extend from 'lodash/extend';
import { Text as Base } from 'rebass';

// import colors from '../../../theme/colors';
// import fonts from '../../../theme/fonts';

//------------------------------------------------------------------------------
// STYLE:
//------------------------------------------------------------------------------
const ellipsisStyle = {
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
};
//------------------------------------------------------------------------------
// COMPONENT:
//------------------------------------------------------------------------------
const Text = ({ children, ellipsis, ...rest }) => {
  const style = {};

  if (ellipsis) {
    extend(style, ellipsisStyle);
  }

  return (
    <Base
      fontFamily="raj"
      // style={style}
      {...rest}
    >
      {children}
    </Base>
  );
};

Text.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.array,
  ]).isRequired,
  ellipsis: PropTypes.bool,
  // Plus all other rebass Text props...
};

Text.defaultProps = {
  ellipsis: false,
};

export default Text;
