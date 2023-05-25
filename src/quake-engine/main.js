async function init (options = {}) {
  const adapter = await navigator.gpu.requestAdapter();
  
  if (!adapter) {
    return;
  }

  const device = adapter.requestDevice();

}
