export const messageSandbox = (data) => {
  const sandboxIframe = document.getElementById('sandbox-frame');

  sandboxIframe.contentWindow.postMessage(data);
};
