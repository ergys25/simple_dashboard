<template>
  <div class="contact-container">
    <div class="contact">
      <h1>Contact Us</h1>
      <p>Please fill out the form below to get in touch with us.</p>
      <!-- Contact Form -->
      <form @submit.prevent="submitForm" class="form">
        <div class="form-group">
          <label for="name">Name:</label>
          <input type="text" id="name" v-model="formData.name" required>
        </div>
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="formData.email" required>
        </div>
        <div class="form-group">
          <label for="message">Message:</label>
          <textarea id="message" v-model="formData.message" required></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  data() {
    return {
      formData: {
        name: '',
        email: '',
        message: ''
      }
    };
  },
  methods: {
    submitForm() {
      // Handle form submission logic here
      console.log('Form submitted:', this.formData);
      // Example: You can send the form data to a backend API
      // using Axios or another HTTP client library
    }
  }
};
</script>

<style scoped>
/* Add scoped styles for the Contact page here */
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

.contact-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Ensure the container covers the entire viewport height */
  background-color: #222; /* Dark background color */
}

.contact {
  /* Define styles for the Contact page */
  text-align: center;
  font-family: 'Roboto', sans-serif;
  color: #fff; /* Text color */
  padding: 20px;
}

.form {
  width: 100%;
  max-width: 400px; /* Limit the width of the form for better readability */
}

.form-group {
  margin-bottom: 1.5rem; /* Add space between form groups */
}

input[type="text"],
input[type="email"],
textarea {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #fff; /* White border for input fields */
  border-radius: 4px;
  background-color: transparent; /* Transparent background */
  color: #fff; /* Text color */
}

input[type="text"]::placeholder,
input[type="email"]::placeholder,
textarea::placeholder {
  color: #ccc; /* Placeholder text color */
}

button {
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3; /* Darker shade on hover */
}
</style>
