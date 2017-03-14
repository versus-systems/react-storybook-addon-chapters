'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Section = require('./Section');

var _Section2 = _interopRequireDefault(_Section);

var _infoContent = require('../utils/info-content');

var _infoContent2 = _interopRequireDefault(_infoContent);

var _theme = require('../theme');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  header: {
    marginBottom: 60
  },
  hr: {
    border: 'none',
    backgroundColor: _theme2.default.border,
    height: 1
  },
  title: {
    color: _theme2.default.grayDarkest,
    fontSize: 24,
    marginBottom: 10
  },
  subtitle: {
    color: _theme2.default.grayDark,
    fontSize: 16,
    marginBottom: 20,
    marginTop: 0
  },
  info: _theme2.default.infoStyle
};

var Chapter = function (_Component) {
  (0, _inherits3.default)(Chapter, _Component);

  function Chapter() {
    (0, _classCallCheck3.default)(this, Chapter);
    return (0, _possibleConstructorReturn3.default)(this, (Chapter.__proto__ || (0, _getPrototypeOf2.default)(Chapter)).apply(this, arguments));
  }

  (0, _createClass3.default)(Chapter, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          context = _props.context,
          title = _props.title,
          subtitle = _props.subtitle,
          info = _props.info,
          sections = _props.sections;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { style: styles.header },
          title && _react2.default.createElement(
            'h3',
            { style: styles.title },
            title
          ),
          subtitle && _react2.default.createElement(
            'p',
            { style: styles.subtitle },
            subtitle
          ),
          (subtitle || info) && _react2.default.createElement('hr', { style: styles.hr }),
          info && _react2.default.createElement(
            'div',
            { style: styles.info },
            (0, _infoContent2.default)(info)
          )
        ),
        sections.map(function (section, index) {
          var options = section.options || {};
          var sectionProps = (0, _extends3.default)({
            context: context,
            title: section.title,
            subtitle: section.subtitle,
            info: section.info
          }, options);
          return _react2.default.createElement(
            _Section2.default,
            (0, _extends3.default)({ key: index }, sectionProps),
            section.sectionFn(context)
          );
        })
      );
    }
  }]);
  return Chapter;
}(_react.Component);

exports.default = Chapter;


Chapter.displayName = 'Chapter';
Chapter.propTypes = {
  context: _react.PropTypes.object,
  title: _react.PropTypes.string,
  subtitle: _react.PropTypes.string,
  info: _react.PropTypes.string,
  sections: _react.PropTypes.arrayOf(_react.PropTypes.object)
};
Chapter.defaultProps = {
  context: {},
  title: '',
  subtitle: '',
  info: '',
  sections: []
};