import React, { JSX } from 'react'
import styles from './tag.module.css';
import cn from 'classnames';
import { TagProps } from './tag.props';

const Tag = ({size = 'medium', color = 'primary', children, ...props }: TagProps):JSX.Element => {
  return (
		<div
			className={cn(styles.tag, {
				[styles.s]: size === 'small',
				[styles.m]: size === 'medium',
				[styles.red]: color === 'danger',
				[styles.primary]: color === 'primary',
				[styles.green]: color === 'success',
			})}
			{...props}
		>
			{children}
		</div>
	);
}

export default Tag
