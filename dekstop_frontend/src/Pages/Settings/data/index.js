/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/prefer-default-export */

import { FaRegUser, FaChevronRight } from 'react-icons/fa';
import { MdBrightnessMedium } from 'react-icons/md';
import { IoNotificationsOutline } from 'react-icons/io5';
import { BiLock } from 'react-icons/bi'
// import { BsToggleOn } from 'react-icons/bs';
import { ProfilePicture } from '../assets';
// import ModalFont from '../components/TextResizer/FontModal';
// eslint-disable-next-line import/no-unresolved
import Button from '../components/Button';
// import Biometrics from '../components/Biometrics';
import  PushNotifications from '../components/PushNotifications/PushNotifications';
import ChangePassword from '../../../Components/GlobalPassword/ChangePassword';

export const userTopbar = [
	{
		id: 'currentuser',
		userImage: ProfilePicture,
		userName: 'Okesiji Abisola',
		alt: 'userName',
	},
];

export const Account = [
	{
		title: 'ACCOUNT',
		icon: <FaRegUser/>,
		func: 'Edit Profile',
		slug: 'settings/edit-profile',
		iconright: <FaChevronRight/>,
	},
];

export const General = [
	{
		title: 'GENERAL',
		icon: FaRegUser,
		func: 'Apps & Integrations',
		slug: '',
		iconright: FaChevronRight,
	},
];

export const Security = [
	{
		title: 'SECURITY',
		icon: <BiLock/>,
		func: <ChangePassword/>,
		slug: <ChangePassword/>,
		iconright: <FaChevronRight/>,
		modal: <ChangePassword/>
	},
	// {
	// 	icon: <IoFingerPrintOutline/>,
	// 	func: 'Biometrics',
	// 	slug: '/',
	// 	iconright: <Biometrics/>,
	// },
];
export const AppSettings = [
	{
		title: 'APP SETTINGS',
		icon: <MdBrightnessMedium />,
		func: 'Dark mode',
		iconright: <Button />,
	},
	// {
	// 	icon: <RiFontSize />,
	// 	func: 'Text Size',
	// 	iconright: <ModalFont/>,
	// },
	// {
	// 	icon: <MdLanguage />,
	// 	func: 'Language',
	// 	iconright: <FaChevronRight />,
	// 	slug: '/languages',
	// },
	{
		icon: <IoNotificationsOutline />,
		func: 'Notifications',
		iconright: <PushNotifications/>,
	},
];

export const Support = [
	{
		title: 'SUPPORT',
		items: [
			{
			list: 'About',
			slug: '/about',
			iconright: <FaChevronRight />,
			},
			{
			list: 'Rate OpsPad',
			slug: '/',
			iconright: <FaChevronRight />,
			},
			{
			list: 'Terms & Condition',
			slug: '/terms-of-use',
			iconright: <FaChevronRight />,
			},
			{
			list: 'Privacy Policy',
			slug: '/privacy-policy',
			iconright: <FaChevronRight />,
			},
			{
			list: 'FAQs',
			slug: '/faq',
			iconright: <FaChevronRight />,
			}
		],
	},
];
