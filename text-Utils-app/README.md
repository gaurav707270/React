OUTPUT => 
         https://drive.google.com/file/d/111Bjj6YMw1sHm3eg9x6DfTyieH9ceoaW/view?usp=sharing

CODE EXPLANATION =>
         https://drive.google.com/file/d/1tGrGqdrgKzzdwQlHxFn3MsIV6qGmk853/view?usp=sharing

# 🚀 Text Utils App

A modern and user-friendly React.js application that helps users analyze, modify, and manage text efficiently. This project demonstrates the use of React Hooks, state management, event handling, and browser local storage.

---

## 📖 Project Description

Text Utils App is designed to perform common text operations with a single click. Users can enter text, transform it into different formats, analyze text statistics, estimate reading time, and save their work for future use.

The application provides an interactive interface with real-time text preview and detailed text analysis.

---

## ✨ Features

### 🔠 Convert to Uppercase

Transforms all entered text into uppercase letters.

**Example:**

```text
hello world
```

Output:

```text
HELLO WORLD
```

---

### 🔡 Convert to Lowercase

Transforms all entered text into lowercase letters.

**Example:**

```text
HELLO WORLD
```

Output:

```text
hello world
```

---

### 📊 Letter Counter

Counts the total number of characters present in the text.

---

### 📖 Word Counter

Calculates the total number of words entered by the user.

---

### ⏱️ Reading Time Estimator

Estimates how long it will take to read the text based on an average reading speed of 200 words per minute.

---

### 💾 Save Text

Allows users to save text and its statistics in browser local storage.

Saved data remains available even after refreshing the page.

---

### 👀 Live Preview

Displays the current text in real time so users can instantly view their changes.

---

## 🛠️ Technologies Used

| Technology        | Purpose              |
| ----------------- | -------------------- |
| React.js          | Frontend Development |
| JavaScript (ES6)  | Application Logic    |
| Bootstrap 5       | UI Design            |
| HTML5             | Structure            |
| CSS3              | Styling              |
| Local Storage API | Data Persistence     |

---

## ⚙️ React Concepts Used

### useState Hook

Used for managing application state such as:

* Input Text
* Letter Count
* Word Count
* Reading Time
* Saved Text Records

### useEffect Hook

Used to:

* Load saved text from Local Storage when the application starts.

---

## 🔄 Application Workflow

1. User enters text into the textarea.
2. Text is stored in React state.
3. User selects a text operation.
4. The application processes the text instantly.
5. Statistics are calculated and displayed.
6. User can save results to local storage.
7. Saved data is automatically loaded when the application is reopened.

---

## 📂 Project Structure

```text
src/
│
├── components/
│   ├── Navbar.jsx
│   ├── UtilsBody.jsx
│   └── DisplayText.jsx
│
├── App.jsx
└── main.jsx
```

---

## 🎯 Key Learning Outcomes

This project helped in understanding:

* React Functional Components
* React Hooks
* State Management
* Event Handling
* Local Storage Integration
* Dynamic Rendering
* Component-Based Architecture
* Bootstrap Layout and Styling

---

## 🔮 Future Enhancements

The following features can be added in future versions:

* 📋 Copy Text to Clipboard
* 🌙 Dark Mode
* ✂️ Remove Extra Spaces
* 📄 Export Text as PDF
* 🔍 Search and Replace Text
* 📈 Advanced Text Analytics
* 🗑️ Delete Saved Text Records

---

## 📸 User Interface Highlights

* Clean and Responsive Design
* Interactive Buttons
* Live Text Preview
* Statistics Dashboard
* Bootstrap Cards and Layout
* Mobile-Friendly Interface

---

## 👨‍💻 Author

**Gaurav Kharate**

Frontend Developer & React.js Learner

---

## 📝 Conclusion

Text Utils App is a practical React.js project that demonstrates text manipulation and analysis in a simple and effective way. The project combines React Hooks, Local Storage, and Bootstrap to create a responsive and interactive user experience. It serves as an excellent beginner-level project for learning modern React development concepts.
