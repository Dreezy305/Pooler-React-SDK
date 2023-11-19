function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}

var loadedScripts = {};
var src = 'https://js.poolerapp.com/v1/inline.js';
function usePoolerScript() {
  var _React$useState = React.useState({
      loaded: false,
      error: false
    }),
    state = _React$useState[0],
    setState = _React$useState[1];
  React.useEffect(function () {
    if (loadedScripts !== null && loadedScripts !== void 0 && loadedScripts.hasOwnProperty(src)) {
      setState({
        loaded: true,
        error: false
      });
    } else {
      loadedScripts.src = src;
      var script = document.createElement('script');
      script.src = src;
      script.async = true;
      var onScriptLoad = function onScriptLoad() {
        setState({
          loaded: true,
          error: false
        });
      };
      var onScriptError = function onScriptError() {
        delete loadedScripts.src;
        setState({
          loaded: true,
          error: true
        });
      };
      script.addEventListener('load', onScriptLoad);
      script.addEventListener('complete', onScriptLoad);
      script.addEventListener('error', onScriptError);
      document.body.appendChild(script);
      return function () {
        script.removeEventListener('load', onScriptLoad);
        script.removeEventListener('error', onScriptError);
      };
    }
  }, []);
  return [state.loaded, state.error];
}

function usePooler(poolerConfig) {
  var _usePoolerScript = usePoolerScript(),
    loaded = _usePoolerScript[0],
    error = _usePoolerScript[1];
  React__default.useEffect(function () {
    if (error) throw new Error('Unable to initialise Pooler SDK');
  }, [error]);
  var handlePoolerSend = function handlePoolerSend() {
    if (error) throw new Error('Unable to initialise Pooler SDK');
    if (loaded) {
      var _window;
      var config = {
        amount: poolerConfig === null || poolerConfig === void 0 ? void 0 : poolerConfig.amount,
        callback: poolerConfig === null || poolerConfig === void 0 ? void 0 : poolerConfig.callback,
        email: poolerConfig === null || poolerConfig === void 0 ? void 0 : poolerConfig.email,
        public_key: poolerConfig === null || poolerConfig === void 0 ? void 0 : poolerConfig.public_key,
        transaction_reference: poolerConfig === null || poolerConfig === void 0 ? void 0 : poolerConfig.transaction_reference,
        success_message: poolerConfig === null || poolerConfig === void 0 ? void 0 : poolerConfig.success_message,
        error_message: poolerConfig === null || poolerConfig === void 0 ? void 0 : poolerConfig.error_message,
        onClose: poolerConfig === null || poolerConfig === void 0 ? void 0 : poolerConfig.onClose
      };
      var Pooler = (_window = window) === null || _window === void 0 ? void 0 : _window.Pooler;
      return Pooler.Popup(config);
    }
  };
  return handlePoolerSend;
}

var _excluded = ["children", "className", "disabled", "loading"];
function poolerButton(_ref) {
  var children = _ref.children,
    className = _ref.className,
    disabled = _ref.disabled,
    rest = _objectWithoutPropertiesLoose(_ref, _excluded);
  var _usePooler = usePooler(rest),
    handlePoolerSend = _usePooler.handlePoolerSend;
  return React__default.createElement("button", {
    disabled: disabled,
    className: className || 'pooler-button ',
    onClick: handlePoolerSend
  }, children);
}



var types = {
  __proto__: null
};

exports.PoolerButton = poolerButton;
exports.PoolerConfig = types;
exports.usePooler = usePooler;
//# sourceMappingURL=index.js.map
