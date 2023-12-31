const butInstall = document.getElementById('buttonInstall');

// Add an event handler to the `beforeinstallprompt` event
window.addEventListener("beforeinstallprompt", (event) => {
  // Store the triggered events
  window.deferredPrompt = event;

  // Remove the hidden class from the button.
  butInstall.classList.toggle("hidden", false);
});
  
  // Implement a click event handler on the `butInstall` element
  butInstall.addEventListener('click', async () => {
    const promptEvent = window.deferredPrompt;
    if (!promptEvent) {
      // The deferred prompt is not available
      return;
    }
    // Show the installation prompt
    promptEvent.prompt();
  // Reset the deferred prompt variable, it can only be used once.
  window.deferredPrompt = null;

  butInstall.classList.toggle("hidden", true);
});
  
  // Add a handler for the `appinstalled` event
  window.addEventListener('appinstalled', (event) => {
    console.log('App installed:', event);
    window.deferredPrompt = null;
  });
  