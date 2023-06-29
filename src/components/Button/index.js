import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import './Button.scss';
function Button({
  to,
  href,
  primary = false,
  option = false,
  outline = false,
  text = false,
  rounded = false,
  disabled = false,
  small = false,
  medium = false,
  large = false,
  full = false,
  textCenter = false,
  uppercase = false,
  children,
  className,
  leftIcon,
  rightIcon,
  linkIcon,
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
    option,
    outline,
    text,
    disabled,
    rounded,
    small,
    medium,
    large,
    full,
    uppercase,
    'text-center': textCenter,
    active,
  });

  return (
    <Comp className={classes} {...props}>
      {leftIcon && <span className="btn-icon">{leftIcon}</span>}
      <span className="btn-text">{children}</span>
      {rightIcon && <span className="btn-icon">{rightIcon}</span>}
      {linkIcon && <span className="btn-icon btn-end">{linkIcon}</span>}
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
  large: PropTypes.bool,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  onClick: PropTypes.func,
};

export default Button;
