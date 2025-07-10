
    // Disable right-click
    document.addEventListener('contextmenu', function (e) {
      e.preventDefault();
    });

    // Disable Ctrl key shortcuts
    document.addEventListener('keydown', function (e) {
      // Block Ctrl+C, Ctrl+U, Ctrl+S, Ctrl+A, Ctrl+X, Ctrl+I
      if (e.ctrlKey && ['c', 'u', 's', 'a', 'x', 'i'].includes(e.key.toLowerCase())) {
        e.preventDefault();
        console.log('Blocked:', e.key);
      }

      // Block F12 (dev tools)
      if (e.key === 'F12') {
        e.preventDefault();
      }
    });

    // Optional: disable drag
    document.addEventListener('dragstart', function (e) {
      e.preventDefault();
    });