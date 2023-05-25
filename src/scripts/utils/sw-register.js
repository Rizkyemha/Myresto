const swRegister = async () => {
  if (!('serviceWorker' in navigator)) {
    console.log('Service Worker not supported in the browser');
    return;
  }

  try {
    await navigator.serviceWorker.register('./sw.bundle.js'); // penyakit
    console.log('Service worker registered');
  } catch (error) {
    console.log(error);
  }
};

export default swRegister;
