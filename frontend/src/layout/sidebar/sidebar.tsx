import Menu from '../menu/menu';
import cn from 'classnames';
import styles from './sidebar.module.css';
import Link from 'next/link';
import Logo from '../logo.svg';
import { SidebarProps } from './sidebar.props';
import { JSX } from 'react';
import { Divider } from '@/src/components';

const Sidebar = ({ className, ...props }: SidebarProps): JSX.Element => {
	return (
		<div className={cn(className, styles.sidebar)} {...props}>
			<Link href={'/'}>
				<Logo />
				<Divider />
			</Link>
			<div>Search...</div>
			<Menu />
		</div>
	);
};

export default Sidebar;
