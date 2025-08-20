import { RatingProps } from './rating.props';
import styles from './rating.module.css';
import cn from 'classnames';
import { ForwardedRef, forwardRef, JSX, useEffect, useState } from 'react';
import StarIcon from './star.svg';

const Rating = forwardRef<HTMLDivElement, RatingProps>(function Rating(
	{ rating, isEditable = false, setRating, error, ...props },
	ref: ForwardedRef<HTMLDivElement>
): JSX.Element {
	const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

	useEffect(() => {
		renderRating(rating);
	}, [rating]);

	const renderRating = (currentRating: number) => {
		const updateArray = ratingArray.map((r: JSX.Element, idx: number) => (
			<span
				key={idx}
				className={cn(styles.star, {
					[styles.filled]: idx < currentRating,
					[styles.editable]: isEditable,
				})}
				onMouseEnter={() => chnageRatingDisplay(idx + 1)}
				onMouseLeave={() => chnageRatingDisplay(rating)}
				onClick={() => clickRatingHandler(idx + 1)}
			>
				<StarIcon />
			</span>
		));

		setRatingArray(updateArray);
	};

	const chnageRatingDisplay = (index: number) => {
		if (!isEditable) {
			return;
		}
		renderRating(index);
	};

	const clickRatingHandler = (index: number) => {
		if (!isEditable || !setRating) {
			return;
		}
		setRating(index);
	};

	return (
		<div
			className={cn(styles.rating, {
				[styles.error]: error,
			})}
			ref={ref}
			{...props}
		>
			{ratingArray}
			{error && <span className={styles.errorMessage}>{error.message}</span>}
		</div>
	);
});

Rating.displayName = 'Rating'; 

export default Rating;
