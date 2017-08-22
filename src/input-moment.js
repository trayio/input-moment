import cx from 'classnames';
import moment from 'moment';
import React, { Component } from 'react';
import Calendar from './calendar';
import Time from './time';

export default class InputMoment extends Component {
  static defaultProps = {
    prevMonthIcon: 'ion-ios-arrow-left',
    nextMonthIcon: 'ion-ios-arrow-right'
  };

  state = {
    moment: this.props.moment,
    tab: this.props.tab || 0
  };

  submit = () => {
    this.props.onChange(this.state.moment);
  }

  handleClickTab = (e, tab) => {
    e.preventDefault();
    this.setState({ tab: tab });
  };

  internalChange = m => {
    this.setState({moment: m});
  }

  render() {
    const { tab } = this.state;
    const {
      moment: m,
      className,
      prevMonthIcon,
      nextMonthIcon,
      onDateSave,
      ...props
    } = this.props;
    const cls = cx('m-input-moment', className);

    return (
      <div className={cls}>
        {!this.props.hideTabs ?
          <div className="options">
            <button
              type="button"
              className={cx('ion-calendar im-btn', { 'is-active': tab === 0 })}
              onClick={e => this.handleClickTab(e, 0)}
            >
              Date
            </button>
            <button
              type="button"
              className={cx('ion-clock im-btn', { 'is-active': tab === 1 })}
              onClick={e => this.handleClickTab(e, 1)}
            >
              Time
            </button>
          </div> : null
        }

        <div className="tabs">
          <Calendar
            moment={this.state.moment}
            onChange={this.props.onChange}
            className={cx('tab', { 'is-active': tab === 0 })}
            prevMonthIcon={this.props.prevMonthIcon}
            nextMonthIcon={this.props.nextMonthIcon}
            internalChange={this.internalChange}
          />
          <Time
            moment={this.state.moment}
            className={cx('tab', { 'is-active': tab === 1 })}
            internalChange={this.internalChange}
            submit={this.submit}
          />
        </div>
      </div>
    );
  }
}
