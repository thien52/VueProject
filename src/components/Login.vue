<template>
  <div class="login-container">
    <h1  >Login</h1>
    <form @submit.prevent="handleSubmit" >
      <label for="username">Username:</label>
      <el-input type="text" id="username" v-model="username" required placeholder="Enter UserName..." clearable />

      <label for="password">Password:</label>
      <el-input type="password"  id="password" v-model="password" required placeholder="Enter PassWord..."   show-password />
      <div class="btn-success">
      <el-button type="primary" round="primary" native-type="submit" >
        <el-icon size="20px"><Lock /></el-icon>
        Login</el-button>
        </div>
        <p v-if="error" class="error">{{ error }}</p>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue';


export default {
  setup() {
    const username = ref('');
    const password = ref('');
    const error = ref('');

    const handleSubmit = async () => {
      // In a real app, you'd have API logic here to authenticate
      // For this example, we'll just simulate a login
      if (username.value === 'admin' && password.value === 'password') {
        error.value = '';
        alert('Login successful!');
        // Redirect or update app state as needed
      } else {
        error.value = 'Invalid credentials.';
      }
    };

    return {
      username,
      password,
      error,
      handleSubmit,
    };
  },
};
</script>

<style scoped>
.login-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  max-width: 600px;
  margin: 10px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 20px rgba(0,0,0, 0.2);
  background-size: cover; /* Cover the entire container */
  background-position: center; /* Center the image */
  background-repeat: repeat; /* Prevent image repetition */
  background-image: url('/images/login.jpg');

  /* Optional: Add a background color as a fallback if the image fails to load */
}
 .btn-success  {
  display: flex;
  justify-content: center;
  margin: 10px 0;
  border-radius: 5px;
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

}
.btn-success .el-button {
  font-size: 20px;
}
.btn-success .el-icon {
  margin-right: 4px;

}

.error {
  color: red;
  text-align: center;
}
</style>