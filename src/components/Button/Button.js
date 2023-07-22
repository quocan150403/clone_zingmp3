import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import './Button.scss';
function Button({
  to,
  href,
  primary = false,
  secondary = false,
  outline = false,
  circle = false,
  column = false,
  rounded = false,
  disabled = false,
  small = false,
  medium = false,
  large = false,
  fullWidth = false,
  uppercase = false,
  children,
  className,
  leftIcon,
  rightIcon,
  onClick,
  active,
  ...passProps
}) {
  let Comp = 'button';
  const props = {
    onClick,
    ...passProps,
  };

  if (disabled) {
    Object.keys(props).forEach((key) => {
      if (key.startsWith('on') && typeof props[key] === 'function') {
        delete props[key];
      }
    });
  }

  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = 'a';
  }

  const classes = classNames('btn-custom', className, {
    primary,
    secondary,
    outline,
    circle,
    column,
    disabled,
    rounded,
    small,
    medium,
    large,
    uppercase,
    active,
    'full-width': fullWidth,
  });

  return (
    <Comp className={classes} {...props}>
      {leftIcon && <span className="btn-icon">{leftIcon}</span>}
      {children && <span className="btn-text">{children}</span>}
      {rightIcon && <span className="btn-icon">{rightIcon}</span>}
    </Comp>
  );
}

Button.propTypes = {
  to: PropTypes.string,
  href: PropTypes.string,
  primary: PropTypes.bool,
  outline: PropTypes.bool,
  text: PropTypes.bool,
  rounded: PropTypes.bool,
  disabled: PropTypes.bool,
  small: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  onClick: PropTypes.func,
};

export default Button;
