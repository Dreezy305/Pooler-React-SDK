import React__default, { useState, useEffect } from 'react';

const loadedScripts = {};
const src = 'https://js.poolerapp.com/v1/inline.js';
function usePoolerScript() {
  const [state, setState] = useState({
    loaded: false,
    error: false
  });
  useEffect(() => {
    if (loadedScripts !== null && loadedScripts !== void 0 && loadedScripts.hasOwnProperty(src)) {
      setState({
        loaded: true,
        error: false
      });
    } else {
      loadedScripts.src = src;
      const script = document.createElement('script');
      script.src = src;
      script.async = true;
      const onScriptLoad = () => {
        setState({
          loaded: true,
          error: false
        });
      };
      const onScriptError = () => {
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
      return () => {
        script.removeEventListener('load', onScriptLoad);
        script.removeEventListener('error', onScriptError);
      };
    }
  }, []);
  return [state.loaded, state.error];
}

function usePooler(poolerConfig) {
  const [loaded, error] = usePoolerScript();
  React__default.useEffect(() => {
    if (error) throw new Error('Unable to initialise Pooler SDK');
  }, [error]);
  const handlePoolerSend = () => {
    if (error) throw new Error('Unable to initialise Pooler SDK');
    if (loaded) {
      var _window;
      const config = {
        amount: poolerConfig === null || poolerConfig === void 0 ? void 0 : poolerConfig.amount,
        callback: poolerConfig === null || poolerConfig === void 0 ? void 0 : poolerConfig.callback,
        email: poolerConfig === null || poolerConfig === void 0 ? void 0 : poolerConfig.email,
        public_key: poolerConfig === null || poolerConfig === void 0 ? void 0 : poolerConfig.public_key,
        transaction_reference: poolerConfig === null || poolerConfig === void 0 ? void 0 : poolerConfig.transaction_reference,
        success_message: poolerConfig === null || poolerConfig === void 0 ? void 0 : poolerConfig.success_message,
        error_message: poolerConfig === null || poolerConfig === void 0 ? void 0 : poolerConfig.error_message,
        onClose: poolerConfig === null || poolerConfig === void 0 ? void 0 : poolerConfig.onClose
      };
      const Pooler = (_window = window) === null || _window === void 0 ? void 0 : _window.Pooler;
      return Pooler.Popup(config);
    }
  };
  return handlePoolerSend;
}

function poolerButton({
  children,
  className,
  disabled,
  loading,
  ...rest
}) {
  const {
    handlePoolerSend
  } = usePooler(rest);
  return React__default.createElement("button", {
    disabled: disabled,
    className: className || 'pooler-button ',
    onClick: handlePoolerSend
  }, children);
}



var types = {
  __proto__: null
};

export { poolerButton as PoolerButton, types as PoolerConfig, usePooler };
//# sourceMappingURL=index.modern.js.map
