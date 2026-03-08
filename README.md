# New-hackthebox-UI-fixer
As of 6 March 2026, HTB updated their UI, and it does not look the best as of now, the lesson page is furstraiting for me, having a narrow lesson card and an uncomfortable text/background contrast. This is a temporary fix until (hopefully) HTB improves it.

This is a firefox add-on that fixes the narrow lesson card and improve text/background contrast on the new hackthebox UI.

### Try it now (dosen't survive refreshes)
Open the inspector tab on the lesson page, go to console, and paste in this style code: ```document.head.appendChild(document.createElement('style')).innerHTML='div[class*="max-w-"]{max-width:100%!important;width:100%!important;} p, span, div, h1, h2, h3, h4, h5, h6, li, a, .text-secondary, .text-primary { color: #E0E0E0 !important; } .text-secondary { color: #D0D0D0 !important; }';```

type in `allow pasting` if it dosen't allow pasting code in console.

### Steps to install the add-on:
- Open extensions & themes in firefox.
- Search for "HTB new UI fixer".
- Install the add-on.

Before:
![WhatsApp Image 2026-03-05 at 11 53 08 PM](https://github.com/user-attachments/assets/2e174b26-9743-4a84-80c4-d38fbfb43f2f)

After:
![WhatsApp Image 2026-03-05 at 11 53 08 PM (1)](https://github.com/user-attachments/assets/3d67fc14-9e87-4086-b1d1-65d2b3a57631)

Minimize the sections tab to view the full lesson, click on this:
![WhatsApp Image 2026-03-05 at 11 53 08 PM (2)](https://github.com/user-attachments/assets/758a9968-562a-4ff5-a5a2-baee54f072af)
