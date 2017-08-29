'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _calendar = require('./calendar');

var _calendar2 = _interopRequireDefault(_calendar);

var _time = require('./time');

var _time2 = _interopRequireDefault(_time);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InputMoment = function (_Component) {
  _inherits(InputMoment, _Component);

  function InputMoment() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, InputMoment);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = InputMoment.__proto__ || Object.getPrototypeOf(InputMoment)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      tab: _this.props.tab || 0,
      moment: _this.props.moment
    }, _this.submit = function () {
      _this.props.onChange(_this.state.moment);
    }, _this.handleClickTab = function (e, tab) {
      e.preventDefault();
      _this.setState({ tab: tab });
    }, _this.internalChange = function (m, s) {
      _this.setState({ moment: m }, s ? _this.submit : null);
    }, _this.componentWillReceiveProps = function (nextProps) {
      var change = {};

      if (_this.props.tab !== nextProps.tab) {
        change.tab = nextProps.tab;
      }

      if (!_this.props.moment.isSame(nextProps.moment)) {
        change.moment = nextProps.moment;
      }

      _this.setState(change);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(InputMoment, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var tab = this.state.tab;

      var _props = this.props,
          m = _props.moment,
          className = _props.className,
          prevMonthIcon = _props.prevMonthIcon,
          nextMonthIcon = _props.nextMonthIcon,
          onDateSave = _props.onDateSave,
          props = _objectWithoutProperties(_props, ['moment', 'className', 'prevMonthIcon', 'nextMonthIcon', 'onDateSave']);

      var cls = (0, _classnames2.default)('m-input-moment', className);

      return _react2.default.createElement(
        'div',
        { className: cls },
        !this.props.hideTabs ? _react2.default.createElement(
          'div',
          { className: 'options' },
          _react2.default.createElement(
            'button',
            {
              type: 'button',
              className: (0, _classnames2.default)('ion-calendar im-btn', { 'is-active': tab === 0 }),
              onClick: function onClick(e) {
                return _this2.handleClickTab(e, 0);
              }
            },
            'Date'
          ),
          _react2.default.createElement(
            'button',
            {
              type: 'button',
              className: (0, _classnames2.default)('ion-clock im-btn', { 'is-active': tab === 1 }),
              onClick: function onClick(e) {
                return _this2.handleClickTab(e, 1);
              }
            },
            'Time'
          )
        ) : null,
        _react2.default.createElement(
          'div',
          { className: 'tabs' },
          _react2.default.createElement(_calendar2.default, {
            submit: this.submit,
            moment: this.state.moment,
            onChange: this.props.onChange,
            className: (0, _classnames2.default)('tab', { 'is-active': tab === 0 }),
            prevMonthIcon: this.props.prevMonthIcon,
            nextMonthIcon: this.props.nextMonthIcon,
            internalChange: this.internalChange
          }),
          _react2.default.createElement(_time2.default, {
            moment: this.state.moment,
            className: (0, _classnames2.default)('tab', { 'is-active': tab === 1 }),
            internalChange: this.internalChange,
            submit: this.submit
          })
        )
      );
    }
  }]);

  return InputMoment;
}(_react.Component);

InputMoment.defaultProps = {
  prevMonthIcon: 'ion-ios-arrow-left',
  nextMonthIcon: 'ion-ios-arrow-right'
};
exports.default = InputMoment;