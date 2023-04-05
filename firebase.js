      <!-- Insert this script at the bottom of the HTML, but before you use any Firebase services -->
      import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js'

      // If you enabled Analytics in your project, add the Firebase SDK for Google Analytics
      import { getAnalytics } from 'https://www.gstatic.com/firebasejs/9.19.1/firebase-analytics.js'

      // Add Firebase products that you want to use
      import { getAuth } from 'https://www.gstatic.com/firebasejs/9.19.1/firebase-auth.js'
      import { getFirestore } from 'https://www.gstatic.com/firebasejs/9.19.1/firebase-firestore.js'

      // TODO: Replace the following with your app's Firebase project configuration
      const firebaseConfig = {
        // ...
      };
