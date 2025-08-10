import React, { JSX } from 'react'
import TagProps from './tag.props'
import styles from './tag.module.css';
import cn from 'classnames';

const Tag = ({size = 'medium', color = 'primary', children}: TagProps):JSX.Element => {
  return (
		<div
			className={cn(styles.tag, {
				[styles.s]: size === 'small',
				[styles.m]: size === 'medium',
				[styles.red]: color === 'danger',
				[styles.primary]: color === 'primary',
				[styles.green]: color === 'success',
			})}
		>
			{children}
		</div>
	);
}

export default Tag
