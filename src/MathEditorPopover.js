import React from 'react';
import PropTypes from 'prop-types';

import Popover from 'react-popover';
import MathEditor from './MathEditor';

class MathEditorPopover extends React.Component {
  render() {
    const { children, isOpen, onOuterAction, onEditComplete } = this.props;
    const popoverProps = {
      isOpen,
      onOuterAction,
      body: <MathEditor onEditComplete={onEditComplete} />
    }

    return (
      <Popover {...popoverProps}>
	{children}
      </Popover>
    )
  }
}

MathEditorPopover.defaultProps = {
  popoverIsOpen: false,
};

MathEditorPopover.propTypes = {
  children: PropTypes.element.isRequired,
  popoverIsOpen: PropTypes.bool,
  onOuterAction: PropTypes.func,
  onEditComplete: PropTypes.func
}

export default MathEditorPopover;
