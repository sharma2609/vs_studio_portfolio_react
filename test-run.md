# Test Instructions

## To test the React Portfolio:

1. **Install dependencies:**

   ```bash
   cd vs_studio_portfolio_react
   npm install
   ```

2. **Start the development server:**

   ```bash
   npm run dev
   ```

3. **Test the features:**
   - **Tabs**: Click on files in the Explorer (left sidebar) - they should open as tabs
   - **Welcome Screen**: Close all tabs using the X button - welcome message should appear
   - **Dino Game**: Click on "dino.js" in the Run and Debug section - game should load and be playable with Space/Arrow keys
   - **Chatbot**: Go to terminal panel (bottom), click CHATBOT tab, type questions like:
     - "What are his skills?"
     - "Tell me about his projects"
     - "What's his experience?"
     - "How can I contact him?"
   - **Themes**: Go to Extensions in sidebar, click different themes to test theme switching
   - **Sidebar**: Use the sidebar toggle button in top-right menu bar
   - **Terminal**: Use the panel toggle button in top-right menu bar

## Expected Behavior:

- ✅ Tabs open when clicking files
- ✅ Welcome screen shows when no tabs open
- ✅ Dino game is playable with proper graphics
- ✅ Chatbot responds intelligently to questions
- ✅ Themes change colors throughout the interface
- ✅ Layout remains consistent when switching views

## If issues persist:

1. Check browser console for errors
2. Try refreshing the page
3. Clear browser cache
4. Ensure all dependencies are installed
