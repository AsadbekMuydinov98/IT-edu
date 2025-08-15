import { DividerProps } from './divider.props';
import cn from 'classnames';
import styles from './divider.module.css';
import { JSX } from 'react';

const Divider = ({ className, ...props }: DividerProps): JSX.Element => {
	return <hr className={cn(className, styles.divider)} {...props} />;
};

export default Divider;
