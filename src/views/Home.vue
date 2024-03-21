<template>
  <div class="contact">
    <h1>Contact Us</h1>
    <p>Please fill out the form below to get in touch with us.</p>
    <!-- Contact Form -->
    <form @submit.prevent="submitForm">
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
.contact {
  /* Add styles for the contact component */
}
/* Add more scoped styles as needed */
</style>
