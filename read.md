# 🎉 Wilson Counter 🎉

This project is a simple counter application with increase, decrease, and reset functionality. It consists of an HTML structure, some CSS for styling, and JavaScript for the interactivity.

## 📋 Project Information

### 🏗️ HTML

The HTML structure includes:

- A main container with the class `counter`.
- A title.
- A span to display the counter value.
- A reset button.
- Increase/decrease buttons.

### 💻 JavaScript

- **🔄 Reset Button**: When clicked, the counter value resets to `0`, and the UI changes are undone.
- **➖ Decrease Button**: Decreases the counter value by `1`, ensuring it doesn’t go below `0`.
- **➕ Increase Button**: Increases the counter value by `1`, with a maximum limit of `5`. If the limit is reached, the UI indicates this, and further incrementing is disabled.
- **⌨️ Keyboard Interaction**: The counter also increments when any key is pressed.
