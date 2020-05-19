import React, { Component } from 'react';
import classes from './Filter.module.css';
import { AppConsumer } from '../State/context';

class Filter extends Component {
	render() {
		return (
			<div className={classes.container}>
				<h5 className={classes.title}>
					<span>Filters</span>
				</h5>

				<AppConsumer>
					{(value) => {
						return (
							<div className={classes.main}>
								<h1
									className={classes.filter}
									style={{
										backgroundColor: value.selectedFilters.easy
											? 'rgb(98, 163, 29)'
											: 'rgb(88, 88, 88)'
									}}
									onClick={() => value.toggleFilter('easy')}
								>
									Easy
								</h1>
								<h1
									className={classes.filter}
									style={{
										backgroundColor: value.selectedFilters.medium
											? 'rgb(163, 157, 94)'
											: 'rgb(88, 88, 88)'
									}}
									onClick={() => value.toggleFilter('medium')}
								>
									Medium
								</h1>
								<h1
									className={classes.filter}
									style={{
										backgroundColor: value.selectedFilters.hard
											? 'rgb(175, 41, 41)'
											: 'rgb(88, 88, 88)'
									}}
									onClick={() => value.toggleFilter('hard')}
								>
									Hard
								</h1>
								<h1
									className={classes.filter}
									style={{
										backgroundColor: value.isEssential
											? 'rgb(53,142,197)'
											: 'rgb(88, 88, 88)'
									}}
									onClick={() => value.toggleFilter('essential')}
								>
									Essential
								</h1>
								<h1
									className={classes.filter}
									style={{
										backgroundColor: value.selectedSide.attacking
											? 'rgb(248,166,72)'
											: 'rgb(88, 88, 88)'
									}}
									onClick={() => value.toggleFilter('attacking')}
								>
									Attacking
								</h1>
								<h1
									className={classes.filter}
									style={{
										backgroundColor: value.selectedSide.defending
											? 'rgb(99,56,126)'
											: 'rgb(88, 88, 88)'
									}}
									onClick={() => value.toggleFilter('defending')}
								>
									Defending
								</h1>
							</div>
						);
					}}
				</AppConsumer>
			</div>
		);
	}
}

export default Filter;
