import { TextProps } from './text.props';
import styles from './text.module.css';
import cn from 'classnames';
import { JSX } from 'react';

const Text = ({ size = 'medium', children, ...props }: TextProps): JSX.Element => {
	return (
		<p
			className={cn(styles.p, {
				[styles.s]: size === 'small',
				[styles.m]: size === 'medium',
				[styles.l]: size == 'large',
			})}
			{...props}
		>
			{children}
		</p>
	);
};

export default Text;
