import React, { Component } from 'react';
import classes from './Filter.module.css';
import { AppConsumer } from '../State/context';

class Filter extends Component {
	render() {
		return (
			<div className={classes.container}>
				<h1>Filters</h1>

				<AppConsumer>
					{(value) => {
						return (
							<div className={classes.main}>
								<h1
									style={{ backgroundColor: value.selectedFilters.easy ? 'green' : 'grey' }}
									onClick={() => value.toggleFilter('easy')}
								>
									Easy
								</h1>
								<h1
									style={{ backgroundColor: value.selectedFilters.medium ? 'yellow' : 'grey' }}
									onClick={() => value.toggleFilter('medium')}
								>
									Medium
								</h1>
								<h1
									style={{ backgroundColor: value.selectedFilters.hard ? 'red' : 'grey' }}
									onClick={() => value.toggleFilter('hard')}
								>
									Hard
								</h1>
								<h1
									style={{ backgroundColor: value.isEssential ? 'blue' : 'grey' }}
									onClick={() => value.toggleFilter('essential')}
								>
									Essential
								</h1>
								<h1
									style={{ backgroundColor: value.selectedSide.attacking ? 'orange' : 'grey' }}
									onClick={() => value.toggleFilter('attacking')}
								>
									Attacking
								</h1>
								<h1
									style={{ backgroundColor: value.selectedSide.defending ? 'purple' : 'grey' }}
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
